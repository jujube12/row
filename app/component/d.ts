import { ObjectId } from "mongodb"

export type session = {
    session: {
        user: {
            email: string
        }
    }
}

export type post = {
    _id: ObjectId,
    title: string,
    post: string,
    name: string,
    writeDate: number,
    editDate: number
}
