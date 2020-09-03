import { CharacterSkill, LevelName } from '../../types/skill';
import { Companion, PlayerCharacter } from '../../types/character';

import { AttributeName } from '../../types/attribute';
import { campaign } from './campaign.js';
import { playerTemplate } from './characterTemplates.js';
import { skillSeed } from './skills.js';

function skill(s: string, l: LevelName): CharacterSkill {
  return { ...skillSeed[s], level: l };
}

function massageCharacter(character: PlayerCharacter): PlayerCharacter {
  return {
    ...character,
    skills: character.skills.filter(
      (s, idx, ary) =>
        ary.filter((ss) => ss.id === s.id).length === 1 ||
        s.level !== 'unskilled'
    ),
  };
}

const baseSkills: CharacterSkill[] = campaign.skills.map((sk) => ({
  ...sk,
  level: 'unskilled',
}));

function attr<T extends AttributeName>(v: number, e: number, n: T) {
  return {
    name: n,
    edge: e,
    current: v,
    pool: v,
    wound: false,
  };
}

const prePlayers: PlayerCharacter[] = [
  {
    id: 'ry',
    campaign: 'c1',
    name: 'Ry McGinnis',
    acl: {
      'cljacobs1975@gmail.com': 'admin',
      'eric.eslinger+tales@gmail.com': 'admin',
    },
    description: '',
    type: 'player',
    attributes: {
      health: attr(10, 0, 'health'),
      might: attr(5, 0, 'might'),
      speed: attr(5, 0, 'speed'),
      focus: attr(10, 1, 'focus'),
      conviction: attr(7, 0, 'conviction'),
    },
    skills: [
      ...baseSkills,
      skill('advancedsecurity', 'trained'),
      skill('commandanimal', 'proficient'),
      skill('faith', 'proficient'),
      skill('dryscienceknowledge', 'proficient'),
      skill('drysciencetinker', 'proficient'),
      skill('combatprediction', 'proficient'),
      skill('hacking', 'proficient'),
      skill('health', 'proficient'),
      skill('tactics', 'proficient'),
      skill('jumpy', 'proficient'),
      skill('providence', 'proficient'),
      skill('legerdemain', 'proficient'),
      skill('toughness', 'proficient'),
      skill('movement', 'proficient'),
      skill('perception', 'proficient'),
      skill('persuade', 'proficient'),
      skill('picklocks', 'proficient'),
      skill('piloting', 'proficient'),
      skill('sensemotive', 'proficient'),
      skill('sneaking', 'proficient'),
      skill('dodge', 'proficient'),
    ],
    experience: 27,
    initiative: 0,
  },
  {
    id: 'connie',
    campaign: 'c1',
    name: 'Connecticut (Connie) Butler',
    acl: {
      'megan@albertelli.com': 'admin',
    },
    description: '',
    type: 'player',
    attributes: {
      health: attr(10, 0, 'health'),
      might: attr(5, 0, 'might'),
      speed: attr(5, 0, 'speed'),
      focus: attr(7, 0, 'focus'),
      conviction: attr(10, 2, 'conviction'),
    },
    skills: [
      ...baseSkills,
      skill('dryscienceknowledge', 'inept'),
      skill('drysciencetinker', 'inept'),
      skill('health', 'proficient'),
      skill('legerdemain', 'proficient'),
      skill('lie', 'proficient'),
      skill('medicine', 'proficient'),
      skill('toughness', 'proficient'),
      skill('otherknowledge', 'inept'),
      skill('perception', 'proficient'),
      skill('persuade', 'proficient'),
      skill('sneaking', 'proficient'),
      skill('wetscienceknowledge', 'inept'),
      skill('wetsciencetinker', 'inept'),
      skill('wildernesslore', 'proficient'),
    ],
    experience: 34,
    initiative: 0,
  },
  {
    id: 'momentusUndergrave',
    campaign: 'c1',
    name: 'Momentus Undergrave',
    acl: {
      'llahwehttam@gmail.com': 'admin',
    },
    description: '',
    type: 'player',
    attributes: {
      health: attr(10, 0, 'health'),
      might: attr(5, 0, 'might'),
      speed: attr(7, 0, 'speed'),
      focus: attr(10, 1, 'focus'),
      conviction: attr(5, 0, 'conviction'),
    },
    skills: [
      ...baseSkills,
      skill('commandanimal', 'trained'),
      skill('health', 'proficient'),
      skill('tactics', 'proficient'),
      skill('jumpy', 'proficient'),
      skill('providence', 'proficient'),
      skill('intimidate', 'inept'),
      skill('lie', 'inept'),
      skill('medicine', 'proficient'),
      skill('toughness', 'proficient'),
      skill('perception', 'proficient'),
      skill('persuade', 'inept'),
      skill('sensemotive', 'inept'),
      skill('wetscienceknowledge', 'proficient'),
      skill('wetsciencetinker', 'proficient'),
      skill('wildernesslore', 'proficient'),
    ],
    experience: 22,
    initiative: 0,
  },
  {
    id: 'chad',
    campaign: 'c1',
    name: 'Chad',
    acl: {
      'guy@albertelli.com': 'admin',
    },
    description: '',
    type: 'player',
    attributes: {
      health: attr(10, 0, 'health'),
      might: attr(10, 2, 'might'),
      speed: attr(6, 1, 'speed'),
      focus: attr(5, 0, 'focus'),
      conviction: attr(7, 0, 'conviction'),
    },
    skills: [
      ...baseSkills,
      skill('faith', 'proficient'),
      skill('dryscienceknowledge', 'inept'),
      skill('drysciencetinker', 'inept'),
      skill('combatprediction', 'proficient'),
      skill('health', 'proficient'),
      skill('tactics', 'proficient'),
      skill('jumpy', 'proficient'),
      skill('providence', 'proficient'),
      skill('medicine', 'proficient'),
      skill('toughness', 'proficient'),
      skill('otherknowledge', 'inept'),
      skill('wetscienceknowledge', 'inept'),
      skill('wetsciencetinker', 'inept'),
    ],
    experience: 18,
    initiative: 0,
  },
  {
    id: 'thomson',
    campaign: 'c1',
    name: 'Thomson Anning',
    acl: {
      'phil.bowen@gmail.com': 'admin',
    },
    description: '',
    type: 'player',
    attributes: {
      health: attr(10, 0, 'health'),
      might: attr(5, 0, 'might'),
      speed: attr(10, 1, 'speed'),
      focus: attr(7, 1, 'focus'),
      conviction: attr(5, 0, 'conviction'),
    },
    skills: [
      ...baseSkills,
      skill('movement', 'proficient'),
      skill('riding', 'proficient'),
      skill('piloting', 'proficient'),
      skill('swimming', 'proficient'),
      skill('sneaking', 'proficient'),
      skill('dodge', 'proficient'),
      skill('health', 'proficient'),
      skill('tactics', 'proficient'),
      skill('jumpy', 'proficient'),
      skill('providence', 'proficient'),
      skill('wildernesslore', 'proficient'),
      skill('medicine', 'proficient'),
      skill('commandanimal', 'proficient'),
      skill('perception', 'proficient'),
      skill('persuade', 'proficient'),
      skill('lie', 'proficient'),
      skill('intimidate', 'proficient'),
      skill('sensemotive', 'proficient'),
      skill('legerdemain', 'inept'),
      skill('hacking', 'inept'),
      skill('picklocks', 'inept'),
      skill('advancedsecurity', 'inept'),
    ],
    experience: 16,
    initiative: 0,
  },
];

export const players: PlayerCharacter[] = prePlayers.map((v) => {
  return massageCharacter(v);
});

export const companions: Companion[] = [
  {
    id: 'sparks',
    campaign: 'c1',
    name: 'Sparks',
    description: 'Ornithomimid',
    acl: {
      'cljacobs1975@gmail.com': 'admin',
      'eric.eslinger+tales@gmail.com': 'admin',
    },
    type: 'companion',
    attack: 2,
    defend: 2,
    armor: 0,
    attributes: {
      health: attr(12, 0, 'health'),
      loyalty: attr(8, 0, 'loyalty'),
    },
    initiative: 0,
    baseInitiative: 4,
    abilities: ['hands', 'birdseye'],
  },
  {
    id: 'biscuit',
    campaign: 'c1',
    name: 'Biscuit',
    description: 'Ankylosaur',
    acl: {
      'megan@albertelli.com': 'admin',
    },
    type: 'companion',
    attack: 2,
    defend: 2,
    armor: 6,
    attributes: {
      health: attr(12, 0, 'health'),
      loyalty: attr(6, 0, 'loyalty'),
    },
    initiative: 0,
    baseInitiative: 4,
    abilities: [
      'temporalHunter',
      'boneBreaker',
      'sturdyMount',
      'mountedWeapon',
    ],
  },
  {
    id: 'drFanta',
    campaign: 'c1',
    name: 'Dr. Fantabulous',
    description: 'Centrosaurus',
    acl: {
      'llahwehttam@gmail.com': 'admin',
    },
    type: 'companion',
    attack: 1,
    defend: 6,
    armor: 10,
    attributes: {
      health: attr(14, 0, 'health'),
      loyalty: attr(6, 0, 'loyalty'),
    },
    initiative: 0,
    baseInitiative: 4,
    abilities: ['terrify', 'sturdyMount', 'mountedWeapon'],
  },
  {
    id: 'smammal',
    campaign: 'c1',
    name: 'Smammal',
    description: 'Small Mammal and Occasional Plot Device',
    acl: {
      'guy@albertelli.com': 'admin',
    },
    type: 'companion',
    attack: 1,
    defend: 3,
    armor: 0,
    attributes: {
      health: attr(8, 0, 'health'),
      loyalty: attr(4, 0, 'loyalty'),
    },
    initiative: 0,
    baseInitiative: 4,
    abilities: ['hands', 'makingTheGMRegretHisLifeChoices'],
  },
  {
    id: 'nugget',
    campaign: 'c1',
    name: 'Nugget 2.0',
    description: 'Raptor',
    acl: {
      'phil.bowen@gmail.com': 'admin',
    },
    type: 'companion',
    attack: 4,
    defend: 1,
    armor: 2,
    attributes: {
      health: attr(15, 0, 'health'),
      loyalty: attr(5, 0, 'loyalty'),
    },
    initiative: 0,
    baseInitiative: 4,
    abilities: [],
  },
];
