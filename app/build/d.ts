import { ObjectId } from "mongodb"

export type champUrlParam = {
    params: { name: string },
    searchParams: {},
}

export type perkInfo = {
    primaryStyle: {
        [id: string]: {
            [id: string]: number
        },
        perk: { [id: string]: number }
    },
    subStyle: {
        [id: string]: {
            [id: string]: number
        },
        perk: { [id: string]: number }
    }
    statPerks: {
        defense: {},
        flex: {},
        offense: {}
    }
}
export type spellInfo = {
    [id: string]: {
        count: number,
        win: number
    }
}
export type matchInfo = {
    _id: ObjectId,
    champName: string,
    pickCount: number,
    banCount: number,
    winCount: number,
    defeatCount: number,
    perkCount: perkInfo,
    spellCount: spellInfo
}

export type perkJson = {
    id: string,
    key: string,
    icon: string,
    name: string,
    slots: {
        runes: {
            id: number,
            key: string,
            icon: string,
            name: string,
            longDesc: string,
            shortDesc: string
        }[]
    }[]
}