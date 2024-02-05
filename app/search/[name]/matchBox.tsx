'use client'
import style from '../search.module.css'
import DetailMatchBox from './detailMatchBox';

export default function MatchBox(props: { matchInfo: match[], summonerInfo: summoner }) {
    let matchInfo: match[] = props.matchInfo
    let spell = {
        21: 'SummonerBarrier',
        1: 'SummonerBoost',
        2202: 'SummonerCherryFlash',
        2201: 'SummonerCherryHold',
        14: 'SummonerDot',
        3: 'SummonerExhaust',
        4: 'SummonerFlash',
        6: 'SummonerHaste',
        7: 'SummonerHeal',
        13: 'SummonerMana',
        30: 'SummonerPoroRecall',
        31: 'SummonerPoroThrow',
        11: 'SummonerSmite',
        39: 'SummonerSnowURFSnowball_Mark',
        32: 'SummonerSnowball',
        12: 'SummonerTeleport',
        54: 'Summoner_UltBookPlaceholder',
        55: 'Summoner_UltBookSmitePlaceholder',
    }
    return (
        <div className={style.match_container}>
            {
                matchInfo.map((a, i) => {
                    return (
                        <DetailMatchBox key={i} matchInfo={a} spell={spell} summonerInfo={props.summonerInfo}></DetailMatchBox>
                    )
                })
            }
        </div>
    )
}