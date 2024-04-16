import { ObjectId } from "mongodb"

export type champUrlParam = {
    params: { name: string },
    searchParams: {},
}

export type matchInfo = {
    _id: ObjectId,
    champName: string,
    pickCount: number,
    banCount: number,
    winCount: number,
    defeatCount: number
}