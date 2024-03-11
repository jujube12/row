import { NextApiRequest, NextApiResponse } from "next"
import { connectDB } from '@/util/database'
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        if (req.method == 'POST') {
            let db = (await connectDB).db('row')
            let result = await db.collection('post').find().sort({ '_id': -1 }).limit(5)
            console.log(result)
            res.status(200).json(result)
        } else {
            res.status(500)
        }
    } catch (err) {
        res.status(500)
    }
}