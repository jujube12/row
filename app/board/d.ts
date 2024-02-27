import { ObjectId } from "mongodb"

export type post = {
    _id: ObjectId,
    title: string,
    post: string,
}