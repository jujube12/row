import style from '../champ.module.css'
import { connectDB } from '@/util/database'
import { champUrlParam, champData } from '../d'
export default async function champInfo(props: champUrlParam) {
    const db = (await connectDB).db(process.env.NEXT_DB_NAME)
    const champData: champData | null = await db.collection<champData>('champ').findOne({ champName: props.params.name })

    return (
        <div className={style.champ_detail_container}>
            {champData ?
                <div className={style.champ_detail_wrapper}>
                    <img src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${props.params.name}_0.jpg`}></img>
                </div>
                : <></>
            }
        </div>
    )
}