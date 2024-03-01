import { NextApiRequest, NextApiResponse } from "next"
import { connectDB } from '@/util/database'
import { ObjectId } from "mongodb"
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        if (req.method == 'DELETE') {
            let db = (await connectDB).db('row')
            await db.collection('post').deleteOne({ _id: new ObjectId(JSON.parse(req.body)) })
            res.redirect(302, '/board')
        }
        res.status(200)
    } catch (err) {
        res.status(200)
    }
}