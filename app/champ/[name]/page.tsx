import style from '../champ.module.css'
import { connectDB } from '@/util/database'
import { champUrlParam, champData } from '../d'
export default async function champInfo(props: champUrlParam) {
    const champName = props.params.name
    const db = (await connectDB).db(process.env.NEXT_DB_NAME)
    const champData: champData | null = await db.collection<champData>('champInfo').findOne({ name: champName })
    return (
        <div className={style.champ_detail_container}>
            {champData ?
                <div className={style.champ_detail_wrapper}>
                    <div className={style.champ_detail_bg}>

                        <img src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champName}_0.jpg`}></img>
                    </div>
                    <div className={style.champ_detail_name}>{champName}</div>
                    <div className={style.champ_detail_blurb}>{champData?.data[champName].lore}</div>
                    <div></div>
                </div>
                : <></>
            }
        </div>
    )
}