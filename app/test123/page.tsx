import { connectDB } from "@/util/database"

export default async function Test() {
    fetch('https://ddragon.leagueoflegends.com/cdn/14.6.1/data/en_US/champion.json')
        .then((r) => r.json())
        .then(async (result) => {
            for (const [] of Object.entries(result.data)) {
                // 
            }
        })

    // let db = (await connectDB).db(env.process.NEXT_DB_NAME)
    // let a = await db.collection('champ').find().toArray()
    // let Fighter: any = new Set([])
    // let Assassin: any = new Set([])
    // let Mage: any = new Set([])
    // let Tank: any = new Set([])
    // let Marksman: any = new Set([])
    // let Support: any = new Set([])
    // let aa = [Fighter, Assassin, Mage, Tank, Marksman, Support]
    // let l = ['Fighter', 'Assassin', 'Mage', 'Tank', 'Marksman', 'Support']
    // l.map((j, m) => {
    //     a.map((i) => {
    //         if (i.champInfo.tags[0] == j) {
    //             aa[m].add(i.champName)
    //             if (i.champInfo.tags[1] == j) {
    //                 aa[m].add(i.champName)
    //             }
    //         }
    //     })
    // })

    return (
        <div>
            test page
        </div>
    )
} 