import { NextApiRequest, NextApiResponse } from "next"
import { connectDB } from '@/util/database'
import { ObjectId } from "mongodb"
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        if (req.method == 'POST') {
            let db = (await connectDB).db('row')
            let postUpdate = { title: req.body.title, post: req.body.post }
            await db.collection('post').updateOne({ _id: new ObjectId(JSON.parse(req.body._id)) }, { $set: postUpdate })
            res.redirect(302, '/board')
        } else {
            res.status(500)
        }
    } catch (err) {
        res.status(500)
    }
}