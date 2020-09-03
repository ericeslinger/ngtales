import { Skill } from '../../types/skill';

export const skillSeed: Record<string, Skill> = {
  advancedsecurity: {
    id: 'advancedsecurity',
    type: 'noncombat',
    description: '',
    name: 'Advanced Security',
    attributes: ['focus', 'conviction'],
  },
  commandanimal: {
    id: 'commandanimal',
    type: 'noncombat',
    description: '',
    name: 'Command Animal',
    attributes: ['conviction', 'focus'],
  },
  faith: {
    id: 'faith',
    type: 'defense',
    description: '',
    name: 'Faith',
    attributes: ['conviction'],
  },
  righteousfury: {
    id: 'righteousfury',
    type: 'attack',
    description: '',
    name: 'Righteous Fury',
    attributes: ['conviction'],
  },
  hipshot: {
    id: 'hipshot',
    type: 'attack',
    description: '',
    name: 'Hip Shot',
    attributes: ['conviction'],
  },
  dryscienceknowledge: {
    id: 'dryscienceknowledge',
    type: 'noncombat',
    description: '',
    name: 'Dry Science Knowledge',
    attributes: ['conviction', 'focus'],
  },
  drysciencetinker: {
    id: 'drysciencetinker',
    type: 'noncombat',
    description: '',
    name: 'Dry Science Tinker',
    attributes: ['conviction', 'focus'],
  },
  combatprediction: {
    id: 'combatprediction',
    type: 'defense',
    description: '',
    name: 'Combat Prediction',
    attributes: ['focus'],
  },
  pinpointstrike: {
    id: 'pinpointstrike',
    type: 'attack',
    description: '',
    name: 'Pinpoint Strike',
    attributes: ['focus'],
  },
  sniper: {
    id: 'sniper',
    type: 'attack',
    description: '',
    name: 'Sniper',
    attributes: ['focus'],
  },
  hacking: {
    id: 'hacking',
    type: 'noncombat',
    description: '',
    name: 'Hacking',
    attributes: ['conviction', 'focus'],
  },
  health: {
    id: 'health',
    type: 'health',
    description: '',
    name: 'Health Check',
    attributes: ['health'],
  },
  jumpy: {
    id: 'jumpy',
    type: 'initiative',
    description: '',
    name: 'jumpy',
    attributes: ['speed'],
  },
  tactics: {
    id: 'tactics',
    type: 'initiative',
    description: '',
    name: 'Tactics',
    attributes: ['focus'],
  },
  providence: {
    id: 'providence',
    type: 'initiative',
    description: '',
    name: 'Providence',
    attributes: ['conviction'],
  },
  intimidate: {
    id: 'intimidate',
    type: 'noncombat',
    description: '',
    name: 'Intimidate',
    attributes: ['conviction', 'might'],
  },
  legerdemain: {
    id: 'legerdemain',
    type: 'noncombat',
    description: '',
    name: 'Legerdemain',
    attributes: ['speed'],
  },
  lie: {
    id: 'lie',
    type: 'noncombat',
    description: '',
    name: 'Lie',
    attributes: ['conviction'],
  },
  medicine: {
    id: 'medicine',
    type: 'noncombat',
    description: '',
    name: 'Medicine',
    attributes: ['conviction', 'focus'],
  },
  toughness: {
    id: 'toughness',
    type: 'defense',
    description: '',
    name: 'Toughness',
    attributes: ['might'],
  },
  bash: {
    id: 'bash',
    type: 'attack',
    description: '',
    name: 'Bashing',
    attributes: ['might'],
  },
  hurl: {
    id: 'hurl',
    type: 'attack',
    description: '',
    name: 'Hurl',
    attributes: ['might'],
  },
  movement: {
    id: 'movement',
    type: 'noncombat',
    description: '',
    name: 'Movement',
    attributes: ['might', 'speed'],
  },
  otherknowledge: {
    id: 'otherknowledge',
    type: 'noncombat',
    description:
      'Any knowledge that does not fall under Wet Science or Dry Science',
    name: 'Knowledge',
    attributes: ['focus', 'conviction'],
  },
  perception: {
    id: 'perception',
    type: 'noncombat',
    description: '',
    name: 'Perception',
    attributes: ['conviction', 'focus'],
  },
  persuade: {
    id: 'persuade',
    type: 'noncombat',
    description: '',
    name: 'Persuade',
    attributes: ['focus'],
  },
  picklocks: {
    id: 'picklocks',
    type: 'noncombat',
    description: '',
    name: 'Pick Locks',
    attributes: ['speed', 'focus', 'conviction'],
  },
  piloting: {
    id: 'piloting',
    type: 'noncombat',
    description: '',
    name: 'Piloting',
    attributes: ['speed', 'conviction', 'focus'],
  },
  riding: {
    id: 'riding',
    type: 'noncombat',
    description: '',
    name: 'Riding',
    attributes: ['speed', 'conviction'],
  },
  sensemotive: {
    id: 'sensemotive',
    type: 'noncombat',
    description: '',
    name: 'Sense Motive',
    attributes: ['focus'],
  },
  sneaking: {
    id: 'sneaking',
    type: 'noncombat',
    description: '',
    name: 'Sneaking',
    attributes: ['speed', 'focus'],
  },
  dodge: {
    id: 'dodge',
    type: 'defense',
    description: '',
    name: 'Dodge',
    attributes: ['speed'],
  },
  fencing: {
    id: 'fencing',
    type: 'attack',
    description: '',
    name: 'Fencing',
    attributes: ['speed'],
  },
  quickdraw: {
    id: 'quickdraw',
    type: 'attack',
    description: '',
    name: 'Quick Draw',
    attributes: ['speed'],
  },
  swimming: {
    id: 'swimming',
    type: 'noncombat',
    description: '',
    name: 'Swimming',
    attributes: ['might'],
  },
  wetscienceknowledge: {
    id: 'wetscienceknowledge',
    type: 'noncombat',
    description: '',
    name: 'Wet Science Knowledge',
    attributes: ['conviction', 'focus'],
  },
  wetsciencetinker: {
    id: 'wetsciencetinker',
    type: 'noncombat',
    description: '',
    name: 'Wet Science Tinker',
    attributes: ['conviction', 'focus'],
  },
  wildernesslore: {
    id: 'wildernesslore',
    type: 'noncombat',
    description: '',
    name: 'Wilderness Lore',
    attributes: ['conviction', 'focus'],
  },
};
