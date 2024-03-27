import style from './champ.module.css'
import { connectDB } from '@/util/database'
import ChampToggleBox from './champToggleBox'
export default async function champ() {
    return (
        <div className={style.champ_container}>
            <div className={style.champ_title}>Row</div>
            <ChampToggleBox></ChampToggleBox>
        </div>
    )
}