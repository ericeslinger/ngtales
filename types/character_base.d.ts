import { Acl } from './acl';
import { Ability } from './ability';
import { Effect } from './effect';
import { CharacterId } from './idtypes';
import { Item } from './item';

export type CharacterType = 'player' | 'nonplayer' | 'companion';

export interface CharacterBase extends CharacterId {
  name: string;
  description: string;
  acl: Acl;
  subtype: CharacterType;
  initiative: number;
  equipment: Record<string, Item>;
  abilities: Ability[];
  auras: Record<string, Effect>;
}
