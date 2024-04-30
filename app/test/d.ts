import { ObjectId } from "mongodb"
export type matchData = {
    _id: ObjectId,
    metadata: {
        dataVersion: string,
        matchId: string,
        participants: string[]
    },
    info: {
        gameCreation: number,
        gameDuration: number,
        gameEndTimestamp: number,
        gameId: number,
        gameMode: string,
        gameName: string,
        gameStartTimestamp: number,
        gameType: string,
        gameVersion: string,
        mapId: number,
        participants: participants[],
        platformId: string,
        queueId: number,
        teams: team[],
        tournamentCode: string
    }
}

export type matchInfo = {
    _id: ObjectId,
    champName: string,
    pickCount: number,
    banCount: number,
    winCount: number,
    defeatCount: number,
    winnningPer: number,
    perkCount: {
        primaryStyle: {
            [id: string]: string,
            perk: string
        },
        subStyle: {
            [id: string]: string,
            perk: string
        }
        statPerks: {
            defense: {},
            flex: {},
            offense: {}
        }
    }
    spellsCount: {
        [id: string]: {
            count: number,
            win: number
        }
    }
}