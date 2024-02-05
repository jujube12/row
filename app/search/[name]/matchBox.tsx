'use client'
import style from '../search.module.css'
import DetailMatchBox from './detailMatchBox';

import { useState } from 'react';
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
    let [arr, setArr] = useState(new Array(10).fill(false))
    return (
        <div className={style.match_container}>
            {
                matchInfo.map((a, i) => {
                    let summoner!: participants
                    for (let i = 0; i < 10; i++) {
                        if (a.info.participants[i].summonerId == props.summonerInfo.id) {
                            summoner = a.info.participants[i]
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
                    return (
                        <div key={i}>
                            <div className={style.match_summury_box} onClick={() => {
                                let copy = [...arr]
                                if (arr[i] == false) { copy[i] = true }
                                else { copy[i] = false }
                                setArr(copy)
                            }}>
                                <div>
                                    victory
                                </div>
                                <div>
                                    <img src={`https://ddragon.leagueoflegends.com/cdn/14.2.1/img/champion/${summoner.championName}.png`}></img>
                                    <div>{summoner.champLevel}</div>
                                </div>
                                <div className={style.match_summury_info}>
                                    <div>

                                        <div>
                                            <img src={`https://ddragon.leagueoflegends.com/cdn/14.2.1/img/spell/${spell[summoner.summoner1Id as keyof typeof spell]}.png`}></img>
                                            <img src={`https://ddragon.leagueoflegends.com/cdn/14.2.1/img/spell/${spell[summoner.summoner2Id as keyof typeof spell]}.png`}></img>
                                        </div>
                                        <div className={style.match_summury_kda}>
                                            <div>{summoner.kills} / {summoner.deaths} / {summoner.assists}</div>
                                            <div>
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
                                        <div className={style.match_summury_extra}>
                                            <div>킬관여 00%</div>
                                            <div>CS 000</div>
                                            <div>tier</div>
                                        </div>
                                    </div>
                                    <div>
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
                            {
                                arr[i] == true ? <DetailMatchBox matchInfo={a} spell={spell} summonerInfo={props.summonerInfo}></DetailMatchBox> : <div></div>
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}