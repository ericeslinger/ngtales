import { Skill } from '../../types/skill';

export const dinoSkillSeed: Record<string, Skill> = [
  {
    skillId: 'advancedsecurity',
    type: 'noncombat',
    description: '',
    name: 'Advanced Security',
    attributes: ['focus', 'conviction'],
  },
  {
    skillId: 'commandanimal',
    type: 'noncombat',
    description: '',
    name: 'Command Animal',
    attributes: ['conviction', 'focus'],
  },
  {
    skillId: 'faith',
    type: 'defense',
    description: '',
    name: 'Faith',
    attributes: ['conviction'],
  },
  {
    skillId: 'righteousfury',
    type: 'attack',
    description: '',
    name: 'Righteous Fury',
    attributes: ['conviction'],
  },
  {
    skillId: 'hipshot',
    type: 'attack',
    description: '',
    name: 'Hip Shot',
    attributes: ['conviction'],
  },
  {
    skillId: 'dryscienceknowledge',
    type: 'noncombat',
    description: '',
    name: 'Dry Science Knowledge',
    attributes: ['conviction', 'focus'],
  },
  {
    skillId: 'drysciencetinker',
    type: 'noncombat',
    description: '',
    name: 'Dry Science Tinker',
    attributes: ['conviction', 'focus'],
  },
  {
    skillId: 'combatprediction',
    type: 'defense',
    description: '',
    name: 'Combat Prediction',
    attributes: ['focus'],
  },
  {
    skillId: 'combatinsight',
    type: 'attack',
    description: '',
    name: 'Combat Insight',
    attributes: ['focus'],
  },
  {
    skillId: 'sniper',
    type: 'attack',
    description: '',
    name: 'Sniper',
    attributes: ['focus'],
  },
  {
    skillId: 'hacking',
    type: 'noncombat',
    description: '',
    name: 'Hacking',
    attributes: ['conviction', 'focus'],
  },
  {
    skillId: 'health',
    type: 'health',
    description: '',
    name: 'Health Check',
    attributes: ['health'],
  },
  {
    skillId: 'reflexes',
    type: 'initiative',
    description: '',
    name: 'reflexes',
    attributes: ['speed'],
  },
  {
    skillId: 'tactics',
    type: 'initiative',
    description: '',
    name: 'Tactics',
    attributes: ['focus'],
  },
  {
    skillId: 'providence',
    type: 'initiative',
    description: '',
    name: 'Providence',
    attributes: ['conviction'],
  },
  {
    skillId: 'intimidate',
    type: 'noncombat',
    description: '',
    name: 'Intimidate',
    attributes: ['conviction', 'might'],
  },
  {
    skillId: 'legerdemain',
    type: 'noncombat',
    description: '',
    name: 'Legerdemain',
    attributes: ['speed'],
  },
  {
    skillId: 'lie',
    type: 'noncombat',
    description: '',
    name: 'Lie',
    attributes: ['conviction'],
  },
  {
    skillId: 'medicine',
    type: 'noncombat',
    description: '',
    name: 'Medicine',
    attributes: ['conviction', 'focus'],
  },
  {
    skillId: 'toughness',
    type: 'defense',
    description: '',
    name: 'Toughness',
    attributes: ['might'],
  },
  {
    skillId: 'bash',
    type: 'attack',
    description: '',
    name: 'Bashing',
    attributes: ['might'],
  },
  {
    skillId: 'hurl',
    type: 'attack',
    description: '',
    name: 'Hurl',
    attributes: ['might'],
  },
  {
    skillId: 'movement',
    type: 'noncombat',
    description: '',
    name: 'Movement',
    attributes: ['might', 'speed'],
  },
  {
    skillId: 'otherknowledge',
    type: 'noncombat',
    description:
      'Any knowledge that does not fall under Wet Science or Dry Science',
    name: 'Knowledge',
    attributes: ['focus', 'conviction'],
  },
  {
    skillId: 'perception',
    type: 'noncombat',
    description: '',
    name: 'Perception',
    attributes: ['conviction', 'focus'],
  },
  {
    skillId: 'persuade',
    type: 'noncombat',
    description: '',
    name: 'Persuade',
    attributes: ['focus'],
  },
  {
    skillId: 'picklocks',
    type: 'noncombat',
    description: '',
    name: 'Pick Locks',
    attributes: ['speed', 'focus', 'conviction'],
  },
  {
    skillId: 'piloting',
    type: 'noncombat',
    description: '',
    name: 'Piloting',
    attributes: ['speed', 'conviction', 'focus'],
  },
  {
    skillId: 'riding',
    type: 'noncombat',
    description: '',
    name: 'Riding',
    attributes: ['speed', 'conviction'],
  },
  {
    skillId: 'sensemotive',
    type: 'noncombat',
    description: '',
    name: 'Sense Motive',
    attributes: ['focus'],
  },
  {
    skillId: 'sneaking',
    type: 'noncombat',
    description: '',
    name: 'Sneaking',
    attributes: ['speed', 'focus'],
  },
  {
    skillId: 'dodge',
    type: 'defense',
    description: '',
    name: 'Dodge',
    attributes: ['speed'],
  },
  {
    skillId: 'fencing',
    type: 'attack',
    description: '',
    name: 'Fencing',
    attributes: ['speed'],
  },
  {
    skillId: 'quickdraw',
    type: 'attack',
    description: '',
    name: 'Quick Draw',
    attributes: ['speed'],
  },
  {
    skillId: 'swimming',
    type: 'noncombat',
    description: '',
    name: 'Swimming',
    attributes: ['might'],
  },
  {
    skillId: 'wetscienceknowledge',
    type: 'noncombat',
    description: '',
    name: 'Wet Science Knowledge',
    attributes: ['conviction', 'focus'],
  },
  {
    skillId: 'wetsciencetinker',
    type: 'noncombat',
    description: '',
    name: 'Wet Science Tinker',
    attributes: ['conviction', 'focus'],
  },
  {
    skillId: 'wildernesslore',
    type: 'noncombat',
    description: '',
    name: 'Wilderness Lore',
    attributes: ['conviction', 'focus'],
  },
].reduce((acc, curr) => ({ ...acc, [curr.skillId]: curr }), {});
