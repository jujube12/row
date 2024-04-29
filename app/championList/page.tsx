import style from './championList.module.css'
import ChampToggleBox from './champToggleBox'
export default async function championList() {
    return (
        <div className={style.championList_container}>
            <div className={style.championList_title}>Row</div>
            <ChampToggleBox></ChampToggleBox>
        </div>
    )
}