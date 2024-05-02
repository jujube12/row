export const dynamic = 'force-dynamic'
import { connectDB } from "@/util/database";
import style from './component.module.css'
import BoardBox from "./boardBox";
import ChampBox from "./champBox";
export default async function NavBox() {
    let db = (await connectDB).db(process.env.NEXT_DB_NAME)
    let champList = await db.collection('matchInfo_14.7').find({}, { projection: { _id: 0, champName: 1, pickCount: 1, winningPer: 1 } }).toArray()
    let champSortListByPick = [...champList]
    champSortListByPick.sort((a, b) => { return b.pickCount - a.pickCount })
    let champSortListByWin = [...champList]
    champSortListByWin.sort((a, b) => { return b.winningPer - a.winningPer })
    let champSortListByName = [...champList]
    champSortListByWin.sort((a, b) => { return a.champName - b.champName })

    let postList = await db.collection('post').find().sort({ _id: -1 }).limit(5).toArray()
    return (
        <div className={style.nav_box_wrapper}>
            <ChampBox champSortListByPick={JSON.stringify(champSortListByPick)} champSortListByWin={JSON.stringify(champSortListByWin)} champSortListByName={JSON.stringify(champSortListByName)}></ChampBox>
            <BoardBox postList={JSON.stringify(postList)}></BoardBox>
        </div>
    )
}