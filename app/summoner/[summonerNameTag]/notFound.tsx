import SummonerSearchBox from "@/app/component/summonerSearchBox"
import style from '../summoner.module.css'

export default function NotFound() {
    return (
        <div className={style.summoner_container}>
            <SummonerSearchBox></SummonerSearchBox>
            <div className={style.summoner_error_wrapper}>
                <div>해당 소환사에 대한 검색 결과가 없습니다.</div>
                <div>검색어를 확인해주세요.</div>
            </div>
        </div>
    )
}