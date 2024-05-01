export const dynamic = 'force-dynamic'
import BoardBox from "./boardBox";
import ChampBox from "./champBox";
import style from './component.module.css'
import { connectDB } from "@/util/database";
export default async function NavBox(props: { postList: string }) {
    let db = (await connectDB).db(process.env.NEXT_DB_NAME)
    let champList = await db.collection('matchInfo_14.7').find({}, { projection: { _id: 0, champName: 1, pickCount: 1, winningPer: 1 } }).toArray()
    let champSortListByPick = [...champList]
    champSortListByPick.sort((a, b) => { return b.pickCount - a.pickCount })
    let champSortListByWin = [...champList]
    champSortListByWin.sort((a, b) => { return b.winningPer - a.winningPer })
    let champSortListByName = [...champList]
    champSortListByWin.sort((a, b) => { return a.champName - b.champName })
    return (
        <div className={style.nav_box_wrapper}>
            <ChampBox champSortListByPick={JSON.stringify(champSortListByPick)} champSortListByWin={JSON.stringify(champSortListByWin)} champSortListByName={JSON.stringify(champSortListByName)}></ChampBox>
            <BoardBox postList={props.postList}></BoardBox>
        </div>
    )
}