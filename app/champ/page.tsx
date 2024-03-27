import style from './champ.module.css'
import { connectDB } from '@/util/database'
import ChampToggleBtn from './champToggleBtn'
export default async function champ() {
    const db = (await connectDB).db(process.env.NEXT_DB_NAME)
    let result = await db.collection('Support').find().toArray()
    return (
        <div className={style.champ_container}>
            <div className={style.champ_title}>Row</div>
            <div className={style.champList_wrapper}>
                <ChampToggleBtn></ChampToggleBtn>
                <div className={style.champList_box}>
                    {
                        result.map((a, i) => {
                            return (
                                <div key={i} className={style.champInfo_box}>
                                    <div>
                                        <img src={`https://ddragon.leagueoflegends.com/cdn/14.2.1/img/champion/${a.champName}.png`}></img>
                                    </div>
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