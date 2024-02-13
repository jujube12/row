'use client'
import style from '../search.module.css'
import DetailMatchBox from './detailMatchBox'
import { kill } from '../../function/game'
import { gameDate } from '../../function/timeCal'
import { useState } from 'react';
export default function MatchBox(props: { matchInfo: match, summonerInfo: summoner }) {
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
    let matchInfo: match = props.matchInfo
    let summoner!: participants  // 검색한 소환사
    let blueParti: { name: string, champ: string }[] = []
    let redParti: { name: string, champ: string }[] = []
    // 킬관여율에 활용
    let blueKill: number = 0
    let redKill: number = 0
    let summonerTeam: string = ''
    for (let i = 0; i < 10; i++) {
        if (matchInfo.info.participants[i].summonerId == props.summonerInfo.id) {
            summoner = matchInfo.info.participants[i]
            if (i < 5) { summonerTeam = 'blue' }
            else { summonerTeam = 'red' }
        }
        if (i < 5) {
            blueParti.push({ name: matchInfo.info.participants[i].riotIdGameName, champ: matchInfo.info.participants[i].championName })
            blueKill += matchInfo.info.participants[i].kills
        } else {
            redParti.push({ name: matchInfo.info.participants[i].riotIdGameName, champ: matchInfo.info.participants[i].championName })
            redKill += matchInfo.info.participants[i].kills
        }
    }
    let itemKeys: number[] = []
    itemKeys.push(summoner.item0)
    itemKeys.push(summoner.item1)
    itemKeys.push(summoner.item2)
    itemKeys.push(summoner.item3)
    itemKeys.push(summoner.item4)
    itemKeys.push(summoner.item5)
    itemKeys.push(summoner.item6)
    let gameResult: boolean = summoner.win
    let [detail, setDetail] = useState(false)
    return (
        <div className={style.match_container}>
            <div>
                <div className={`${style.match_summury_container} ${gameResult ? 'bg_blue_light' : 'bg_red_light'}`} onClick={() => {
                    if (detail == false) { setDetail(true) }
                    else { setDetail(false) }
                }}>
                    <div className={style.match_summury_result}>
                        <div className={gameResult ? 'bg_blue' : 'bg_red'}></div>
                        <div>
                            <div className={gameResult == true ? 'blue fw700' : 'red fw700'}>{matchInfo.info.gameMode == 'CLASSIC' ? '솔랭' : matchInfo.info.gameMode == 'URF' ? 'U.R.F.' : '무작위 총력전'}</div>
                            <div className='f14px'>{gameDate(matchInfo.info.gameStartTimestamp)}</div>
                            <div></div>
                            <div className='f14px fw700 gray_dark2'>
                                {gameResult == true ? '승리' : '패배'}
                            </div>
                        </div>
                    </div>
                    <div className={style.match_summury_img}>
                        <img src={`https://ddragon.leagueoflegends.com/cdn/14.2.1/img/champion/${summoner.championName}.png`}></img>
                        <div>{summoner.champLevel}</div>
                    </div>
                    <div className={style.match_summury_info}>
                        <div>
                            <div className={style.match_summury_info_spell}>
                                <div>
                                    <img src={`https://ddragon.leagueoflegends.com/cdn/14.2.1/img/spell/${spell[summoner.summoner1Id as keyof typeof spell]}.png`}></img>
                                    <img src={`https://ddragon.leagueoflegends.com/cdn/14.2.1/img/spell/${spell[summoner.summoner2Id as keyof typeof spell]}.png`}></img>
                                </div>
                                <div className={style.match_summury_kda}>
                                    <div className='f18px'>{summoner.kills} / {summoner.deaths} / {summoner.assists}</div>
                                    <div className='gray_dark'>
                                        <span>kda </span>
                                        {
                                            summoner.deaths == 0
                                                ? <span>perfect</span>
                                                : <span>
                                                    {(Math.round((summoner.kills + summoner.assists) / summoner.deaths)).toFixed(2)}
                                                </span>
                                        }
                                    </div>
                                </div>
                                <div className={`${style.match_summury_extra} f14px`}>
                                    <div><span>킬관여</span> {summonerTeam == 'blue' ? kill(blueKill, summoner.kills + summoner.assists) : kill(redKill, summoner.kills + summoner.assists)}</div>
                                    <div><span>CS</span> {summoner.neutralMinionsKilled + summoner.totalMinionsKilled}</div>
                                </div>
                            </div>
                            <div className={style.match_summury_info_item}>
                                {
                                    itemKeys.map((a, i) => {
                                        return (
                                            a != 0
                                                ? <img key={i} src={`https://ddragon.leagueoflegends.com/cdn/14.2.1/img/item/${a}.png`}></img>
                                                : <p key={i}></p>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className={`${style.match_summury_parti} f14px`}>
                        <div>
                            {
                                blueParti.map((b, i) => {
                                    return (
                                        <div key={i}>
                                            <img src={`https://ddragon.leagueoflegends.com/cdn/14.2.1/img/champion/${b.champ}.png`}></img>
                                            <div>{b.name}</div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div>
                            {
                                redParti.map((b, i) => {
                                    return (
                                        <div key={i}>
                                            <img src={`https://ddragon.leagueoflegends.com/cdn/14.2.1/img/champion/${b.champ}.png`}></img>
                                            <div>{b.name}</div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className={style.match_detail_btn}>
                        <div className={gameResult ? 'blue_btn' : 'red_btn'}></div>
                    </div>
                </div>
                {
                    detail == true ? <DetailMatchBox matchInfo={matchInfo} spell={spell} summonerInfo={props.summonerInfo}></DetailMatchBox> : <div></div>
                }
            </div>
        </div >
    )
}