import { NextApiRequest, NextApiResponse } from "next"
import { connectDB } from "@/util/database"
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        if (req.method == 'POST') {
            let data = JSON.parse(req.body)
            let db = (await connectDB).db('row')
            let emailSearch = await db.collection('user').findOne({ email: data.email })
            let email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
            if (data.name.length == 0 && data.email.length == 0 && data.password.length == 0) {
                res.status(500).json('')
            }
            if (data.focus == 'name') {
                if (data.name.length < 4) {
                    res.status(500).json('이름의 형식이 올바르지 않습니다.')
                }
                else if (emailSearch) {
                    res.status(500).json('이미 가입된 이메일입니다.')
                }
                else if (data.name.length < 4 || !email_regex.test(data.email) || data.password.length < 8) {
                    res.status(200).json('값을 모두 입력해주세요.')
                }
                else {
                    res.status(200).json('ok')
                }
            }
            else if (data.focus == 'email') {
                if (!email_regex.test(data.email)) {
                    res.status(500).json('이메일형식이 올바르지 않습니다.')
                }
                else if (emailSearch) {
                    res.status(500).json('이미 가입된 이메일입니다.')
                }
                else if (data.name.length < 4 || !email_regex.test(data.email) || data.password.length < 8) {
                    res.status(200).json('값을 모두 입력해주세요.')
                }
                else {
                    res.status(200).json('ok')
                }
            }
            else if (data.focus == 'password') {
                if (data.password.length < 8) {
                    res.status(500).json('비밀번호의 길이는 8자 이상이어야 합니다.')
                }
                else if (emailSearch) {
                    res.status(500).json('이미 가입된 이메일입니다.')
                }
                else if (data.name.length < 4 || !email_regex.test(data.email) || data.password.length < 8) {
                    res.status(200).json('값을 모두 입력해주세요.')
                }
                else {
                    res.status(200).json('ok')
                }
            }
            else {
                res.status(500).json('')
            }
        }
        res.status(500).json('')
    } catch (err) {
        res.status(500)
    }
}