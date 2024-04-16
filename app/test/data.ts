import { connectDB } from "@/util/database"
import { matchData, matchInfo } from "./d"
export default async function dataHandler() {
    let db = (await connectDB).db(process.env.NEXT_DB_NAME)
    console.log('start')

    async function getChampList() {
        let champs: string[] = []
        await fetch('https://ddragon.leagueoflegends.com/cdn/14.7.1/data/en_US/champion.json')
            .then(r => r.json())
            .then((result) => {
                champs = Object.keys(result.data)
            })

        await Promise.all(champs.map(async (a, i) => {
            let result = await db.collection('matchInfo_14.7').insertOne({ champName: a, pickCount: 0, banCount: 0, winCount: 0, defeatCount: 0 })
            console.log(i + ': ' + JSON.stringify(result) + '저장 완료')
        }))

        // fiddle name err change
        let aa = await db.collection('matchInfo_14.7').find({ champName: { $regex: /Fiddle/ } }).toArray()
        console.log(aa)
        await db.collection('matchInfo_14.7').updateOne({ champName: 'Fiddlesticks' }, { $set: { champName: 'FiddleSticks' } })
        let bb = await db.collection('matchInfo_14.7').find({ champName: { $regex: /Fiddle/ } }).toArray()
        console.log(bb)
    }

    async function getPickCount() {
        let matchDataList = await db.collection<matchData>('match_14.7').find().toArray()
        await Promise.all(
            matchDataList.map(async (match) => {
                await Promise.all(match.info.participants.map(async (summonor) => {
                    await db.collection('matchInfo_14.7').updateOne({ champName: summonor.championName }, { $inc: { pickCount: 1 } })
                }))
            })
        )
        console.log('done')
    }

    async function getWinCount() {
        let matchDataList = await db.collection<matchData>('match_14.7').find().toArray()
        await Promise.all(
            matchDataList.map(async (match, i) => {
                await Promise.all(match.info.participants.map(async (summonor) => {
                    if (summonor.win) {
                        await db.collection('matchInfo_14.7').updateOne({ champName: summonor.championName }, { $inc: { winCount: 1 } })
                    } else {
                        await db.collection('matchInfo_14.7').updateOne({ champName: summonor.championName }, { $inc: { defeatCount: 1 } })
                    }
                }))
                console.log(i)
            })
        )
        console.log('done')
    }

    async function checkData(checkItem: string) {
        let result = await db.collection('matchInfo_14.7').find().toArray()
        let sum = 0
        result.map(async (a) => {
            sum += a[checkItem]
            await db.collection('matchInfo_14.7').updateOne({ champName: a.champName }, { $set: { pickCount: 0 } })
        })
        console.log(sum)
    }

    async function resetDate(resetItem: string) {
        let result = await db.collection('matchInfo_14.7').find().toArray()
        result.map(async (a) => {
            await db.collection('matchInfo_14.7').updateOne({ champName: a.champName }, { $set: { resetItem: 0 } })
        })
    }

    async function getMatchData() {
        let num = 7015677866
        let cnt = 0
        let conti = true
        let bre = 0
        function timer() {
            return new Promise((resolve) => {
                setTimeout(() => { resolve('req') }, 2000)
            })
        }
        while (conti) {
            await fetch(`https://asia.api.riotgames.com/lol/match/v5/matches/KR_${num}?api_key=${process.env.NEXT_RIOT}`)
                .then((r) => r.json())
                .then(async (result) => {
                    if (result.info) {
                        if (result.info.gameVersion.slice(0, 4) == '14.7' && result.info.queueId == 420) {
                            await db.collection('match_14.7').insertOne(result)
                            cnt += 1
                            console.log('저장 완료: ' + result.info.gameId)
                            bre = 0
                        }
                        console.log('있지만 저장 안함: ' + result.info.gameId)
                    } else {
                        bre += 1
                        console.log('없음: ' + num)
                    }
                })
            num += 1
            if (cnt > 99 || bre > 100) {
                conti = false
            }
            await timer()
        }

        console.log(cnt)
        console.log(num)
    }

    async function test() {
        await fetch(`https://asia.api.riotgames.com/lol/match/v5/matches/KR_7015674994?api_key=${process.env.NEXT_RIOT}`)
            .then((r) => r.json())
            .then((result) => {
                console.log(result)
            })
    }

}