import {
  BehaviorSubject,
  Observable,
  Subject,
  Subscription,
  combineLatest,
} from 'rxjs';
import { Character, SkilledCharacter } from 'src/types/character';
import {
  Component,
  Inject,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { InjectedData, ResolveComponent } from '../resolve/resolve.component';
import {
  distinctUntilChanged,
  filter,
  flatMap,
  map,
  publishReplay,
  refCount,
  switchMap,
  take,
  tap,
} from 'rxjs/operators';

import { AngularFireAuth } from '@angular/fire/auth';
import { CharacterService } from 'src/app/data/character.service';
import { DisplayAttribute } from 'src/types/attribute';
import { DisplaySkill } from 'src/types/skill';
import { MatDialog } from '@angular/material/dialog';
import { Roll } from 'src/types/event';
import { RulesService } from 'src/app/data/rules.service';
import { User } from 'src/types/user';
import { UserService } from 'src/app/data/user.service';

@Component({
  selector: 'roll-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss'],
})
export class PanelComponent implements OnInit, OnChanges, OnDestroy {
  @Input('roll') _roll: Roll;
  @Input() campaignId: string;
  private rollSubject = new BehaviorSubject<Roll>(null);
  roll = this.rollSubject.asObservable().pipe(
    filter((v) => !!v),
    distinctUntilChanged()
  );
  userIsRoller: Observable<boolean>;
  userRequestedRoll: Observable<boolean>;
  roller: Observable<SkilledCharacter>;
  requester: Observable<User>;
  skills: Observable<DisplaySkill[]>;
  attributes: Observable<DisplayAttribute[]>;
  private clickSubject = new Subject<number>();
  click = this.clickSubject.asObservable().pipe(distinctUntilChanged());
  subscription: Subscription;

  private skillSubject = new BehaviorSubject<DisplaySkill>(null);
  skill = this.skillSubject.asObservable().pipe(filter((v) => !!v));

  constructor(
    private auth: AngularFireAuth,
    private characterService: CharacterService,
    private userService: UserService,
    private rulesService: RulesService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.roller = this.roll.pipe(
      switchMap(
        (roll) =>
          this.characterService.get(roll.roller) as Observable<SkilledCharacter>
      )
    );

    this.requester = this.roll.pipe(
      switchMap((roll) => this.userService.get(roll.requester))
    );

    this.userIsRoller = combineLatest([this.roller, this.auth.user]).pipe(
      map(([roller, user]) => roller.acl[user.email] === 'admin')
    );

    this.userRequestedRoll = combineLatest([this.roll, this.auth.user]).pipe(
      map(([roll, user]) => roll.requester === user.email)
    );

    this.skills = this.characterService.mapDisplaySkills(
      this.roller,
      this.roll.pipe(map((roll) => roll.skills))
    );

    this.attributes = this.characterService.mapDisplayAttributes(this.roller);

    this.subscription = combineLatest([
      this.click,
      this.roller,
      this.attributes,
      this.roll,
      this.skills,
    ])
      .pipe(
        tap(console.log.bind(console)),
        distinctUntilChanged((a, b) => a[0] === b[0]),
        flatMap(([, character, attributes, roll, skills]) => {
          const data: InjectedData = { roll, character, attributes, skills };
          return this.dialog
            .open(ResolveComponent, {
              data,
            })
            .afterClosed();
        })
      )
      .subscribe((result) => {
        if (result) {
          console.log(result);
        } else {
          console.log('cancel');
        }
      });
  }

  ngOnChanges(update) {
    this.rollSubject.next(update._roll.currentValue);
  }

  skillClick() {
    this.clickSubject.next(Date.now());
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}