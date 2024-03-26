import style from './champ.module.css'
import { connectDB } from '@/util/database'
export default async function champ() {
    const db = (await connectDB).db(process.env.NEXT_DB_NAME)
    let result = await db.collection('Support').find().toArray()
    return (
        <div className={style.champ_container}>
            <div className={style.champList_wrapper}>
                <div className={style.champList_toggle_btn}>
                    <div>암살자</div>
                    <div>전사</div>
                    <div>마법사</div>
                    <div>원거리딜러</div>
                    <div>서포터</div>
                    <div>탱커</div>
                </div>
                <div className={style.champList_box}>
                    {
                        result.map((a, i) => {
                            return (
                                <div key={i} className={style.champInfo_box}>
                                    {/* <img src={`/img/champion/tiles/${a.champName}_0.jpg`}></img> */}
                                    <div>{a.champName}</div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}