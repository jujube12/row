import { NextApiRequest, NextApiResponse } from "next"
import { connectDB } from '@/util/database'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        if (req.method == 'POST') {
            let db = (await connectDB).db('row');
            await db.collection('post').insertOne({ post: req.body.posting })
            res.redirect(302, '/board')
        } else {
            res.status(200)
        }
    } catch (err) {
        res.status(200)
    }
}