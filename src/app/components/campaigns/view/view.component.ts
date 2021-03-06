import { ActivatedRoute, ParamMap } from '@angular/router';
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { BehaviorSubject, Observable, Subject, combineLatest } from 'rxjs';
import { Character, SkilledCharacter } from 'types/character';
import { Roll, RollRequest } from 'types/roll';
import {
  distinctUntilChanged,
  filter,
  map,
  publishReplay,
  refCount,
  startWith,
  switchMap,
  takeUntil,
} from 'rxjs/operators';

import { AngularFireAuth } from '@angular/fire/auth';
import { Campaign } from 'types/campaign';
import { CampaignService } from 'src/app/components/campaigns/campaign.service';
import { CharacterService } from 'src/app/components/characters/character.service';
import { ChatService } from '../../chat/chat.service';
import { Message } from 'types/chat';
import { PresenceService } from 'src/app/core/firebase/presence.service';
import { RollService } from 'src/app/rolls/roll.service';
import { TitleService } from 'src/app/shared/topline/title.service';
import { User } from 'types/user';
import { UserService } from '../../user/user.service';

type ActionType = 'initiative' | 'noncombat' | 'reset' | 'rest';
interface Action {
  type: ActionType;
  character?: Character;
  event: MouseEvent;
}

@Component({
  selector: 'framesystem-campaign-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
})
export class ViewComponent implements OnInit, OnDestroy, AfterViewInit {
  campaign: Observable<Campaign>;
  characters: Observable<Character[]>;
  notableCharacters: Observable<Character[]>;
  rolls: Observable<Roll[]>;
  nextRequest: Observable<RollRequest>;
  gm: Observable<boolean>;
  playerOrGm: Observable<boolean>;
  user: Observable<User>;
  destroyingSubject = new BehaviorSubject<boolean>(false);
  chat: Observable<Message[]>;
  present: Observable<User[]>;
  destroying = this.destroyingSubject
    .asObservable()
    .pipe(filter((v) => v === true));

  actionSubject = new Subject<Action>();
  action = this.actionSubject
    .asObservable()
    .pipe(distinctUntilChanged(), publishReplay(1), refCount());

  @ViewChild('chatHistory') chatHistory: ElementRef;

  constructor(
    private campaignService: CampaignService,
    private characterService: CharacterService,
    private rollService: RollService,
    private route: ActivatedRoute,
    private userService: UserService,
    private chatService: ChatService,
    private presenceService: PresenceService,
    private titleService: TitleService,
    private auth: AngularFireAuth
  ) {}

  ngOnDestroy(): void {
    this.destroyingSubject.next(true);
  }

  ngOnInit(): void {
    this.campaign = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.campaignService.get({
          campaignId: params.get('campaignId'),
          type: 'campaign',
        })
      ),
      publishReplay(1),
      refCount()
    );

    this.campaign
      .pipe(takeUntil(this.destroying))
      .subscribe((c) => this.titleService.setTitle(c.name));

    this.characters = this.campaign.pipe(
      switchMap((campagin) => this.characterService.list(campagin)),
      publishReplay(1),
      refCount()
    );

    this.gm = combineLatest([this.campaign, this.auth.user]).pipe(
      map(([{ acl }, { uid }]) => acl[uid] === 'gm')
    );

    this.playerOrGm = combineLatest([this.campaign, this.auth.user]).pipe(
      map(([{ acl }, { uid }]) => acl[uid] === 'gm' || acl[uid] === 'player')
    );

    this.notableCharacters = combineLatest([
      this.characters,
      this.auth.user,
    ]).pipe(
      map(([characters, { uid }]) =>
        characters.filter((character) =>
          ['gm', 'player'].includes(character.acl[uid])
        )
      ),
      startWith([]),
      publishReplay(1),
      refCount()
    );

    this.present = combineLatest([
      this.presenceService.getPresences(),
      this.route.paramMap,
    ]).pipe(
      switchMap(([present, params]) =>
        combineLatest(
          Object.entries(present)
            .filter(([, location]) =>
              location.endsWith(params.get('campaignId'))
            )
            .map(([uid]) => this.userService.get(uid))
        )
      )
    );

    this.chat = this.campaign.pipe(
      switchMap((campaign) => this.chatService.list(campaign)),
      map((msg) => msg.reverse())
    );

    this.rolls = this.campaign.pipe(
      switchMap((campaign) => this.rollService.results(campaign))
    );

    this.user = this.auth.user.pipe(
      switchMap((user) => this.userService.get(user.uid))
    );

    this.nextRequest = combineLatest([
      this.campaign,
      this.notableCharacters,
      this.auth.user,
    ]).pipe(
      map(([campaign, characters, { uid }]) => ({
        campaign,
        characters:
          campaign.acl[uid] === 'gm'
            ? characters
            : characters.filter((character) => character.acl[uid] === 'player'),
      })),
      filter(({ characters }) => characters.length > 0),
      switchMap(({ campaign, characters }) =>
        this.rollService.nextRequest(campaign, characters)
      ),
      publishReplay(1),
      refCount()
    );

    combineLatest([this.nextRequest, this.notableCharacters, this.auth.user])
      .pipe(
        takeUntil(this.destroying),
        distinctUntilChanged((a, b) => a[0].rollId === b[0].rollId)
      )
      .subscribe(([request, characters, { uid }]) => {
        if (
          characters.find(
            (character) =>
              character.characterId === request.character.characterId
          )?.acl[uid] === 'player'
        ) {
          this.rollService.resolve(
            request,
            characters.find(
              (character) =>
                character.characterId === request.character.characterId
            ) as SkilledCharacter
          );
        }
      });

    this.chat.pipe(takeUntil(this.destroying)).subscribe(() => {
      this.chatHistory.nativeElement.children[
        this.chatHistory.nativeElement.childElementCount - 1
      ]?.scrollIntoViewIfNeeded();
    });

    const actionStream = combineLatest([
      this.campaign,
      this.characters,
      this.action,
    ]).pipe(
      takeUntil(this.destroying),
      distinctUntilChanged((a, b) => a[2].event === b[2].event)
    );

    actionStream
      .pipe(filter(([, , event]) => event.type === 'initiative'))
      .subscribe(([, characters]) =>
        this.rollService.requestInitiative({ type: 'initiative', characters })
      );
    actionStream
      .pipe(filter(([, , event]) => event.type === 'rest'))
      .subscribe(([campaign, characters]) => {
        this.characterService.rest(characters);
        this.rollService.scene(campaign);
      });
    actionStream
      .pipe(filter(([, , event]) => event.type === 'reset'))
      .subscribe(([, characters]) => this.characterService.reset(characters));
  }

  ngAfterViewInit() {
    setTimeout(
      () =>
        this.chatHistory.nativeElement.children[
          this.chatHistory.nativeElement.childElementCount - 1
        ]?.scrollIntoViewIfNeeded(),
      300
    );
  }

  initiative(event: MouseEvent) {
    this.actionSubject.next({ event, type: 'initiative' });
  }

  noncombat(event: MouseEvent, character: Character) {
    this.actionSubject.next({ event, character, type: 'noncombat' });
  }

  rest(event: MouseEvent) {
    this.actionSubject.next({ event, type: 'rest' });
  }

  reset(event: MouseEvent) {
    this.actionSubject.next({ event, type: 'reset' });
  }
}
