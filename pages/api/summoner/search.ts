import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        if (req.method == 'POST') {
            let key_word = req.body.replace(/ /g, '')
            let userInfo = {}
            await fetch(`https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/${key_word}?api_key=${process.env.NEXT_RIOT}`)
                .then((r) => r.json())
                .then((result) => {
                    console.log(result)
                    userInfo = result
                })
            res.status(200).json(userInfo)
        }
    } catch (err) {
        res.status(400).json('err')
    }
}