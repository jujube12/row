import { ObjectId } from "mongodb"

export type champUrlParam = {
    params: { name: string },
    searchParams: {},
}

export type skin = {
    id: string,
    num: number,
    name: string,
    chromas: boolean
}

export interface champData {
    _id: ObjectId,
    name: string,
    type: string,
    format: string,
    version: string,
    data: {
        [champName: string]: {
            id: string,
            key: string,
            name: string,
            title: string,
            image: {
                full: string,
                sprite: string,
                group: string,
                x: number,
                y: number,
                w: number,
                h: number
            },
            skins: skin[],
            lore: string
            blurb: string,
            allytips: string[],
            enemytips: string[],
            tags: string[],
            partype: string,
            info: { attack: number, defense: number, magic: number, difficulty: number },
            stats: {
                hp: number,
                hpperlevel: number,
                mp: number,
                mpperlevel: number,
                movespeed: number,
                armor: number,
                armorperlevel: number,
                spellblock: number,
                spellblockperlevel: number,
                attackrange: number,
                hpregen: number,
                hpregenperlevel: number,
                mpregen: number,
                mpregenperlevel: number,
                crit: number,
                critperlevel: number,
                attackdamage: number,
                attackdamageperlevel: number,
                attackspeedperlevel: number,
                attackspeed: number
            },
            spells: {
                id: string,
                name: string,
                description: string,
                tooltip: string,
                leveltip: {
                    label: string[],
                    effect: string[]
                },
                maxrank: number,
                cooldown: number,
                cooldownBurn: string,
                cost: number,
                costBurn: string,
                datavalues: {},
                effect: number[] | null[],
                effectBurn: string | null[],
                vars: [],
                costType: string,
                maxammo: string,
                range: number[],
                rangeBurn: string,
                image: {
                    full: string,
                    sprite: string,
                    group: string,
                    x: number,
                    y: number,
                    w: number,
                    h: number
                },
                resource: string
            }[],
            passive: {
                name: string,
                description: string,
                image: {
                    full: string,
                    sprite: string,
                    group: string,
                    x: number,
                    y: number,
                    w: number,
                    h: number
                },
            },
            recommended: []
        }
    }
}
