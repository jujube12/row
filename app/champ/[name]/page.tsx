import style from '../champ.module.css'
import { connectDB } from '@/util/database'
import { champUrlParam, champData } from '../d'
import SkinCarousel from './skinCarousel'
import SpellList from './spellList'
import Position from './position'
import ChampTitle from './champTitle'
import Error from '@/app/error'
export default async function champInfo(props: champUrlParam) {
    const champName = props.params.name
    const db = (await connectDB).db(process.env.NEXT_DB_NAME)
    const champData: champData | null = await db.collection<champData>('champInfo').findOne({ name: champName })
    return (
        <div className={style.champ_detail_container}>
            {champData ?
                <div className={style.champ_detail_wrapper}>
                    <ChampTitle name={champName} title={champData.data[champName].title}></ChampTitle>
                    <div className={style.border}></div>
                    <div className={style.champ_detail_text}>{champData?.data[champName].lore}</div>
                    <div className={style.champ_detail_text}>{champData?.data[champName].blurb}</div>
                    <Position tags={champData?.data[champName].tags} champName={champName}></Position>
                    <SpellList passive={champData.data[champName].passive} spellList={champData.data[champName].spells} champKey={champData.data[champName].key}></SpellList>
                    <div className={style.border}></div>
                    <div className={style.skin_title}>skins</div>
                    <SkinCarousel champName={champName} skinList={champData?.data[champName].skins}></SkinCarousel>
                </div>
                : <Error></Error>
            }
        </div>
    )
}