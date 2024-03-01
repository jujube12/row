import { ObjectId } from "mongodb"

export type post = {
    _id: ObjectId,
    title: string,
    post: string,
    name: string
}

export type propsPost = {
    _id: string,
    title: string,
    post: string,
    name: string
}

export type urlParam = {
    params: { id: string },
    searchParams: {},
}