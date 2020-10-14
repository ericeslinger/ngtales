"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.characters = exports.inventory = exports.campaign = void 0;
const util_1 = require("./util");
const equipment_1 = require("./equipment");
const skills_1 = require("./skills");
const localSkills = [
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
exports.campaign = {
    type: 'campaign',
    campaignId: 'ou',
    name: 'Tales of Fantasy and Fighting',
    description: 'also Underground Caverns and Chaos',
    acl: {},
    skills: skills_1.commonSkills.concat(localSkills),
};
exports.inventory = {
    stu: [equipment_1.stoneCloak, equipment_1.crossbow, equipment_1.dagger, equipment_1.shield, equipment_1.staff],
    kewulf: [equipment_1.longbow, equipment_1.stoneCloak, equipment_1.dagger],
    malven: [equipment_1.lightMace, equipment_1.stoneCloak, equipment_1.dagger],
    jordiz: [equipment_1.stoneCloak],
    loupe: [equipment_1.magicRapier, equipment_1.stoneCloak, equipment_1.magicCrossbow],
};
exports.characters = [
    {
        name: 'Stu Roid',
        campaignId: 'ou',
        characterId: 'stu',
        acl: {},
        description: '',
        type: 'character',
        subtype: 'player',
        attributes: {
            health: util_1.attr(10, 0, 'health'),
            might: util_1.attr(6, 0, 'might'),
            speed: util_1.attr(6, 0, 'speed'),
            focus: util_1.attr(12, 2, 'focus'),
            conviction: util_1.attr(6, 0, 'conviction'),
        },
        skills: util_1.skillBlock(exports.campaign.skills, {
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
        equipped: [],
        carried: [],
        abilities: [],
        auras: [],
    },
    {
        name: 'Kewulf Trannyth',
        campaignId: 'ou',
        characterId: 'kewulf',
        acl: {},
        description: '',
        type: 'character',
        subtype: 'player',
        attributes: {
            health: util_1.attr(10, 0, 'health'),
            might: util_1.attr(6, 0, 'might'),
            speed: util_1.attr(8, 0, 'speed'),
            focus: util_1.attr(5, 0, 'focus'),
            conviction: util_1.attr(11, 1, 'conviction'),
        },
        skills: util_1.skillBlock(exports.campaign.skills, {
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
        equipped: [],
        carried: [],
        abilities: [],
        auras: [],
    },
    {
        name: 'Malven Stonecutter',
        campaignId: 'ou',
        characterId: 'malven',
        acl: {},
        description: '',
        type: 'character',
        subtype: 'player',
        attributes: {
            health: util_1.attr(10, 0, 'health'),
            might: util_1.attr(6, 0, 'might'),
            speed: util_1.attr(9, 0, 'speed'),
            focus: util_1.attr(9, 1, 'focus'),
            conviction: util_1.attr(6, 0, 'conviction'),
        },
        skills: util_1.skillBlock(exports.campaign.skills, {
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
        equipped: [],
        carried: [],
        abilities: [],
        auras: [],
    },
    {
        name: 'Jordiz Shirodz',
        campaignId: 'ou',
        characterId: 'jordiz',
        acl: {},
        description: '',
        type: 'character',
        subtype: 'player',
        attributes: {
            health: util_1.attr(10, 0, 'health'),
            might: util_1.attr(6, 0, 'might'),
            speed: util_1.attr(8, 1, 'speed'),
            focus: util_1.attr(11, 1, 'focus'),
            conviction: util_1.attr(5, 0, 'conviction'),
        },
        skills: util_1.skillBlock(exports.campaign.skills, {
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
        equipped: [],
        carried: [],
        abilities: [equipment_1.feet],
        auras: [],
    },
    {
        name: 'Cantaloupe "Loupe" Pantaloons',
        campaignId: 'ou',
        characterId: 'loupe',
        acl: {},
        description: '',
        type: 'character',
        subtype: 'player',
        attributes: {
            health: util_1.attr(10, 0, 'health'),
            might: util_1.attr(5, 0, 'might'),
            speed: util_1.attr(11, 2, 'speed'),
            focus: util_1.attr(8, 0, 'focus'),
            conviction: util_1.attr(6, 0, 'conviction'),
        },
        skills: util_1.skillBlock(exports.campaign.skills, {
            inept: ['riding', 'medicine', 'commandanimal', 'persuade'],
            proficient: ['fencing', 'dodge', 'reflexes', 'health', 'movement'],
            trained: [],
            expert: [],
        }),
        experience: 5,
        initiative: 0,
        equipped: [],
        carried: [],
        abilities: [],
        auras: [],
    },
];
