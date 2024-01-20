import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        if (req.method == 'POST') {
            console.log(req.body)
            res.status(200).json('hi')
        }
    } catch (err) {
        res.status(400).json('err')
    }
}