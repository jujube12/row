import { connectDB } from "@/util/database"

export default async function Test() {
    let db = (await connectDB).db(process.env.NEXT_DB_NAME)

    let num = 7015674700
    let cnt = 0
    let conti = true
    let bre = 0
    // await fetch(`https://asia.api.riotgames.com/lol/match/v5/matches/KR_7015674994?api_key=${process.env.NEXT_RIOT}`)
    //     .then((r) => r.json())
    //     .then((result) => {
    //         console.log(result)
    //     })

    // while (conti) {
    //     await fetch(`https://asia.api.riotgames.com/lol/match/v5/matches/KR_${num}?api_key=${process.env.NEXT_RIOT}`)
    //         .then((r) => r.json())
    //         .then(async (result) => {
    //             if (result.info) {
    //                 if (result.info.gameVersion.slice(0, 4) == '14.7' && result.info.queueId == 420) {
    //                     // await db.collection('match_14.7').insertOne(result)
    //                     cnt += 1
    //                     console.log('저장 완료: ' + result.info.gameId)
    //                     bre = 0
    //                 }
    //                 console.log('있지만 저장 안함: ' + result.info.gameId)
    //             } else {
    //                 bre += 1
    //                 console.log('없음: ' + num)
    //             }
    //         })
    //     num += 1
    //     if (cnt > 499 || bre > 100) {
    //         conti = false
    //     }
    // }

    console.log(cnt)
    console.log(num)

    return (
        <div>
            test page
        </div>
    )
} 