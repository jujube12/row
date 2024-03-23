import { NextApiRequest, NextApiResponse } from "next"
import { connectDB } from '@/util/database'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { getServerSession } from 'next-auth'
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        if (req.method == 'POST') {
            let session: any = await getServerSession(req, res, authOptions)
            let db = (await connectDB).db('row');
            const date = new Date()
            req.body.writeDate = date
            req.body.name = session.user.name
            await db.collection('post').insertOne(req.body)
            res.redirect(302, '/board')
        } else {
            res.status(200)
        }
    } catch (err) {
        res.status(200)
    }
}