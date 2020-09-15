import { attr, skillBlock } from './util.js';

import { Campaign } from '../../types/campaign';
import { PlayerCharacter } from '../../types/character';
import { Skill } from '../../types/skill';
import { admin } from 'firebase-admin/lib/database';
import { commonSkills } from './skills.js';

const localSkills: Skill[] = [
  {
    skillId: 'arcaneknowledge',
    type: 'noncombat',
    description: '',
    name: 'Arcane Knowledge',
    category: 'magic',
    attributes: ['conviction'],
  },
  {
    skillId: 'arcanetinker',
    type: 'noncombat',
    description: '',
    category: 'magic',
    name: 'Arcane Tinker',
    attributes: ['conviction'],
  },
  {
    skillId: 'alchemyknowledge',
    type: 'noncombat',
    description: '',
    category: 'magic',
    name: 'Alchemy Knowledge',
    attributes: ['conviction', 'focus'],
  },
  {
    skillId: 'alchemytinker',
    type: 'noncombat',
    category: 'magic',
    description: '',
    name: 'Alchemy Tinker',
    attributes: ['conviction', 'focus'],
  },
  {
    skillId: 'divineknowledge',
    type: 'noncombat',
    category: 'magic',
    description: '',
    name: 'Divine Knowledge',
    attributes: ['conviction'],
  },
  {
    skillId: 'divinetinker',
    type: 'noncombat',
    category: 'magic',
    description: '',
    name: 'Divine Tinker',
    attributes: ['conviction'],
  },
  {
    skillId: 'psionicknowledge',
    type: 'noncombat',
    category: 'magic',
    description: '',
    name: 'Psionic Knowledge',
    attributes: ['conviction', 'focus'],
  },
  {
    skillId: 'psionictinker',
    type: 'noncombat',
    description: '',
    category: 'magic',
    name: 'Psionic Tinker',
    attributes: ['conviction', 'focus'],
  },
  {
    skillId: 'traps',
    type: 'noncombat',
    description: '',
    category: 'adventuring',
    name: 'Traps',
    attributes: ['conviction', 'focus'],
  },
];

export const campaign: Omit<Campaign, 'campaignId'> = {
  type: 'campaign',
  name: 'Tales of Fantasy and Fighting',
  description: 'also Underground Caverns and Chaos',
  acl: {
    E1gXs41G1mgiM441XXf14ac7ypb2: 'admin',
    UJxxtQzaOzWEFT2vtniCaDQdk2u2: 'read',
    RUEOViYBeHPUBClCUTQCmIhfrlT2: 'read',
  },
  skills: commonSkills.concat(localSkills),
};

export const characters: Omit<
  PlayerCharacter,
  'characterId' | 'campaignId'
>[] = [
  {
    name: 'Stu Roid',
    acl: {
      d1: 'admin',
    },
    description: '',
    type: 'character',
    subtype: 'player',
    attributes: {
      health: attr(10, 0, 'health'),
      might: attr(6, 0, 'might'),
      speed: attr(6, 0, 'speed'),
      focus: attr(12, 2, 'focus'),
      conviction: attr(6, 0, 'conviction'),
    },
    skills: skillBlock(campaign.skills, {
      inept: ['commandanimal', 'legerdemain', 'picklocks'],
      proficient: [
        'medicine',
        'alchemyknowledge',
        'alchemytinker',
        'combatinsight',
        'sniper',
        'health',
        'combatprediction',
      ],
      trained: [],
      expert: [],
    }),
    experience: 1,
    initiative: 0,
  },
  {
    name: 'Kewulf Trannyth',
    acl: {
      b1: 'admin',
    },
    description: '',
    type: 'character',
    subtype: 'player',
    attributes: {
      health: attr(10, 0, 'health'),
      might: attr(6, 0, 'might'),
      speed: attr(8, 0, 'speed'),
      focus: attr(5, 0, 'focus'),
      conviction: attr(11, 1, 'conviction'),
    },
    skills: skillBlock(campaign.skills, {
      inept: [
        'arcanetinker',
        'religiontinker',
        'psionicknowledge',
        'psionictinker',
      ],
      proficient: ['sneaking', 'perception', 'hipshot', 'dodge'],
      trained: [],
      expert: [],
    }),
    experience: 5,
    initiative: 0,
  },
  {
    name: 'Malven Stonecutter',
    acl: {
      j1: 'admin',
    },
    description: '',
    type: 'character',
    subtype: 'player',
    attributes: {
      health: attr(10, 0, 'health'),
      might: attr(6, 0, 'might'),
      speed: attr(9, 0, 'speed'),
      focus: attr(9, 1, 'focus'),
      conviction: attr(6, 0, 'conviction'),
    },
    skills: skillBlock(campaign.skills, {
      inept: [
        'wildernesslore',
        'arcaneknowledge',
        'religiousknowledge',
        'commandanimal',
      ],
      proficient: [
        'sneaking',
        'picklocks',
        'traps',
        'combatprediction',
        'health',
        'fencing',
      ],
      trained: [],
      expert: [],
    }),
    experience: 5,
    initiative: 0,
  },
  {
    name: 'Jordiz Shirodz',
    acl: {
      e1: 'admin',
      RUEOViYBeHPUBClCUTQCmIhfrlT2: 'admin',
    },
    description: '',
    type: 'character',
    subtype: 'player',
    attributes: {
      health: attr(10, 0, 'health'),
      might: attr(6, 0, 'might'),
      speed: attr(8, 1, 'speed'),
      focus: attr(11, 1, 'focus'),
      conviction: attr(5, 0, 'conviction'),
    },
    skills: skillBlock(campaign.skills, {
      inept: ['riding', 'wildernesslore', 'lie', 'picklocks'],
      proficient: [
        'fencing',
        'quickshot',
        'combatprediction',
        'health',
        'movement',
      ],
      trained: [],
      expert: [],
    }).concat([
      {
        level: 'proficient',
        skillId: 'unarmed',
        name: 'Unarmed Combat',
        category: 'melee',
        attributes: ['focus', 'speed', 'might', 'conviction'],
        type: 'attack',
        description: 'attacking with hands and feet',
      },
    ]),
    experience: 5,
    initiative: 0,
  },
  {
    name: 'Cantaloupe "Loupe" Pantaloons',
    acl: {
      a1: 'admin',
      RUEOViYBeHPUBClCUTQCmIhfrlT2: 'admin',
    },
    description: '',
    type: 'character',
    subtype: 'player',
    attributes: {
      health: attr(10, 0, 'health'),
      might: attr(5, 0, 'might'),
      speed: attr(11, 2, 'speed'),
      focus: attr(8, 0, 'focus'),
      conviction: attr(6, 0, 'conviction'),
    },
    skills: skillBlock(campaign.skills, {
      inept: ['riding', 'medicine', 'commandanimal', 'persuade'],
      proficient: ['fencing', 'dodge', 'reflexes', 'health', 'movement'],
      trained: [],
      expert: [],
    }),
    experience: 5,
    initiative: 0,
  },
];
