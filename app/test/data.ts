import { connectDB } from "@/util/database"
import { matchData, matchInfo } from "./d"
import { champData } from "../championList/d"
export default async function dataHandler() {
    const matchVersion = 'match_14.7'
    const matchDataVersion = 'matchInfo_14.7'
    const gameVersion = '14.7.1'

    let db = (await connectDB).db(process.env.NEXT_DB_NAME)

    async function updateWinnningP0er() {
        let a = await db.collection(matchDataVersion).find({}, { projection: { champName: 1, pickCount: 1, winCount: 1 } }).toArray()
        a.map(async (aa) => {
            let winp = Number((aa.winCount / aa.pickCount * 100).toFixed(2))
            await db.collection(matchDataVersion).updateOne({ champName: aa.champName }, { $set: { winningPer: winp } })
        })
    }
    async function getChampList() {
        let champs: string[] = []
        await fetch('https://ddragon.leagueoflegends.com/cdn/14.7.1/data/en_US/champion.json')
            .then(r => r.json())
            .then((result) => {
                champs = Object.keys(result.data)
            })

        await Promise.all(champs.map(async (a, i) => {
            let result = await db.collection(matchDataVersion).insertOne({ champName: a, pickCount: 0, banCount: 0, winCount: 0, defeatCount: 0 })
            console.log(i + ': ' + JSON.stringify(result) + '저장 완료')
        }))

        // fiddle name err change
        let aa = await db.collection(matchDataVersion).find({ champName: { $regex: /Fiddle/ } }).toArray()
        console.log(aa)
        await db.collection(matchDataVersion).updateOne({ champName: 'Fiddlesticks' }, { $set: { champName: 'FiddleSticks' } })
        let bb = await db.collection(matchDataVersion).find({ champName: { $regex: /Fiddle/ } }).toArray()
        console.log(bb)
    }

    async function updateMatchKeyInfo() {
        let champList = await db.collection(matchDataVersion).find({}, { projection: { champName: 1, _id: 0 } }).toArray();
        champList.map(async (item) => {
            let name = item.champName
            if (item.champName === 'FiddleSticks') {
                name = 'Fiddlesticks'
            }
            await fetch(`https://ddragon.leagueoflegends.com/cdn/14.8.1/data/en_US/champion/${name}.json`)
                .then((r) => r.json())
                .then(async (result) => {
                    console.log(result.data[name].key + ':' + item.champName)
                    await db.collection(matchDataVersion).updateOne({ champName: item.champName }, { $set: { champKey: Number(result.data[name].key) } })
                })
        })
    }

    async function updateMatchPerksInfo() {
        let perkType = {
            perkCount: {
                primaryStyle: {
                    perk: { 8000: 0, 8100: 0, 8200: 0, 8300: 0, 8400: 0 },
                    8000: { 8005: 0, 8008: 0, 8021: 0, 9101: 0, 9111: 0, 8009: 0, 9104: 0, 9105: 0, 9103: 0, 8014: 0, 8017: 0, 8299: 0 },
                    8100: { 8112: 0, 8124: 0, 8128: 0, 8126: 0, 8139: 0, 8143: 0, 8136: 0, 8120: 0, 8138: 0, 8135: 0, 8134: 0, 8105: 0, 8106: 0 },
                    8200: { 8214: 0, 8229: 0, 8230: 0, 8224: 0, 8226: 0, 8275: 0, 8210: 0, 8234: 0, 8233: 0, 8237: 0, 8232: 0, 8236: 0 },
                    8300: { 8351: 0, 8360: 0, 8369: 0, 8306: 0, 8304: 0, 8313: 0, 8321: 0, 8316: 0, 8345: 0, 8347: 0, 8410: 0, 8352: 0 },
                    8400: { 8437: 0, 8439: 0, 8465: 0, 8446: 0, 8463: 0, 8401: 0, 8429: 0, 8444: 0, 8473: 0, 8451: 0, 8453: 0, 8242: 0 },
                },
                subStyle: {
                    perk: { 8000: 0, 8100: 0, 8200: 0, 8300: 0, 8400: 0 },
                    8000: { 8005: 0, 8008: 0, 8021: 0, 9101: 0, 9111: 0, 8009: 0, 9104: 0, 9105: 0, 9103: 0, 8014: 0, 8017: 0, 8299: 0 },
                    8100: { 8112: 0, 8124: 0, 8128: 0, 8126: 0, 8139: 0, 8143: 0, 8136: 0, 8120: 0, 8138: 0, 8135: 0, 8134: 0, 8105: 0, 8106: 0 },
                    8200: { 8214: 0, 8229: 0, 8230: 0, 8224: 0, 8226: 0, 8275: 0, 8210: 0, 8234: 0, 8233: 0, 8237: 0, 8232: 0, 8236: 0 },
                    8300: { 8351: 0, 8360: 0, 8369: 0, 8306: 0, 8304: 0, 8313: 0, 8321: 0, 8316: 0, 8345: 0, 8347: 0, 8410: 0, 8352: 0 },
                    8400: { 8437: 0, 8439: 0, 8465: 0, 8446: 0, 8463: 0, 8401: 0, 8429: 0, 8444: 0, 8473: 0, 8451: 0, 8453: 0, 8242: 0 },
                },
                statPerks: {
                    defense: {},
                    flex: {},
                    offense: {}
                }
            }
        }
        let dataLsit = await db.collection(matchDataVersion).updateMany({}, { $set: perkType })
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

    async function getBanCount() {
        let matchData = await db.collection<matchData>(matchVersion).find().toArray()
        matchData.map((match, i) => {
            Promise.all(
                match.info.teams[0].bans.map(async (ban, j) => {
                    await db.collection(matchDataVersion).updateOne({ champKey: ban.championId }, { $inc: { banCount: 1 } })
                })
            )
            Promise.all(
                match.info.teams[1].bans.map(async (ban, j) => {
                    await db.collection(matchDataVersion).updateOne({ champKey: ban.championId }, { $inc: { banCount: 1 } })
                })
            )
            console.log(i)
        })
    }

    async function getPerksCount() {
        let matchDataList = await db.collection<matchData>('match_14.7').find().toArray()
        // let mainPerk = 'peckCount.primaryStyle.perk.' + matchDataList[0].info.participants[0].perks.styles[0].style
        // let subPerk = 'peckCount.subStyle.perk.' + matchDataList[0].info.participants[0].perks.styles[1].style
        // let mainExtra: string[] = [
        //     'peckCount.primaryStyle.' + matchDataList[0].info.participants[0].perks.styles[0].style + '.' + matchDataList[0].info.participants[0].perks.styles[0].selections[0].perk,
        //     'peckCount.primaryStyle.' + matchDataList[0].info.participants[0].perks.styles[0].style + '.' + matchDataList[0].info.participants[0].perks.styles[0].selections[1].perk,
        //     'peckCount.primaryStyle.' + matchDataList[0].info.participants[0].perks.styles[0].style + '.' + matchDataList[0].info.participants[0].perks.styles[0].selections[2].perk,
        //     'peckCount.primaryStyle.' + matchDataList[0].info.participants[0].perks.styles[0].style + '.' + matchDataList[0].info.participants[0].perks.styles[0].selections[3].perk,
        // ]
        // let subExtra: string[] = [
        //     'peckCount.subStyle.' + matchDataList[0].info.participants[0].perks.styles[1].style + '.' + matchDataList[0].info.participants[0].perks.styles[1].selections[0].perk,
        //     'peckCount.subStyle.' + matchDataList[0].info.participants[0].perks.styles[1].style + '.' + matchDataList[0].info.participants[0].perks.styles[1].selections[1].perk,
        // ]
        matchDataList.map(async (match, i) => {
            await Promise.all(match.info.participants.map(async (summoner) => {
                let mainPerk = 'perkCount.primaryStyle.perk.' + summoner.perks.styles[0].style
                let subPerk = 'perkCount.subStyle.perk.' + summoner.perks.styles[1].style
                let mainExtra: string[] = [
                    'perkCount.primaryStyle.' + summoner.perks.styles[0].style + '.' + summoner.perks.styles[0].selections[0].perk,
                    'perkCount.primaryStyle.' + summoner.perks.styles[0].style + '.' + summoner.perks.styles[0].selections[1].perk,
                    'perkCount.primaryStyle.' + summoner.perks.styles[0].style + '.' + summoner.perks.styles[0].selections[2].perk,
                    'perkCount.primaryStyle.' + summoner.perks.styles[0].style + '.' + summoner.perks.styles[0].selections[3].perk,
                ]
                let subExtra: string[] = [
                    'perkCount.subStyle.' + summoner.perks.styles[1].style + '.' + summoner.perks.styles[1].selections[0].perk,
                    'perkCount.subStyle.' + summoner.perks.styles[1].style + '.' + summoner.perks.styles[1].selections[1].perk,
                ]
                let incItem = {
                    [mainPerk]: 1,
                    [subPerk]: 1,
                    [mainExtra[0]]: 1,
                    [mainExtra[1]]: 1,
                    [mainExtra[2]]: 1,
                    [mainExtra[3]]: 1,
                    [subExtra[0]]: 1,
                    [subExtra[1]]: 1,
                }
                await db.collection(matchDataVersion).updateOne({ champName: summoner.championName }, { $inc: incItem })
            }))
        })
    }

    async function getSpellCount() {
        let dataList = await db.collection<matchData>(matchVersion).find().toArray();
        // console.log(dataList[0].info.participants[0].summoner1Id + '-' + dataList[0].info.participants[0].summoner2Id)
        // let result = await db.collection(matchDataVersion).findOne({ champName: dataList[0].info.participants[0].championName, 'champName.spellCount.id': '3-4' })
        // console.log(result)

        dataList.map((match, i) => {
            Promise.all(match.info.participants.map(async (summoner) => {
                const s = Math.min(summoner.summoner1Id, summoner.summoner2Id)
                const l = Math.max(summoner.summoner1Id, summoner.summoner2Id)
                const spellId = s + '-' + l
                const chg = 'spellCount0.' + spellId + '.count'
                const chgw = 'spellCount0.' + spellId + '.win'
                const result = await db.collection<matchInfo>(matchDataVersion).findOne({ champName: summoner.championName })
                let count = summoner.win ? 1 : 0;
                if (result?.spellsCount[spellId] != null) {
                    await db.collection(matchDataVersion).updateOne({ champName: summoner.championName }, { $inc: { [chg]: 1, [chgw]: count } })
                } else {
                    await db.collection(matchDataVersion).updateOne({ champName: summoner.championName }, { $set: { [chg]: 1, [chgw]: count } })
                }
            })).then(() => {
                console.log(i)
            })
        })
    }

    async function checkChampInfo(champId: string | number,) {
        let result;
        if (typeof (champId) === 'number') {
            result = await db.collection(matchDataVersion).findOne({ champKey: champId })
        } else {
            result = await db.collection(matchDataVersion).findOne({ champName: champId })
        }
        console.log(result)
    }

    async function checkData(checkItem: string) {
        let result = await db.collection(matchDataVersion).find().toArray()
        let sum = 0
        result.map(async (a) => {
            sum += a[checkItem]
        })
        console.log(sum)
    }

    async function resetData(resetItem: string) {
        let result = await db.collection('matchInfo_14.7').find().toArray()
        result.map(async (a) => {
            await db.collection('matchInfo_14.7').updateOne({ champName: a.champName }, { $set: { resetItem: 0 } })
        })
    }

    async function test() {
        await fetch(`https://asia.api.riotgames.com/lol/match/v5/matches/KR_7015674994?api_key=${process.env.NEXT_RIOT}`)
            .then((r) => r.json())
            .then((result) => {
                console.log(result)
            })
    }

}