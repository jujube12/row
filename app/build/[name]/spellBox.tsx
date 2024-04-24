'use client'
import { useEffect, useState } from 'react'
import style from '../build.module.css'
import { matchInfo, spellInfo } from '../d'

export default function SpellBox(props: { spellData: spellInfo }) {
    const summonerSpell: spellInfo = props.spellData
    let count = Object.values(summonerSpell).map((i) => i.count)
    count.sort()
    let sum = 0
    count.map((a) => {
        sum += a
    })
    let max = count[0]
    let max2 = count[1]
    let first = (Object.keys(summonerSpell).find((i) => summonerSpell[i].count == max))?.split('-')
    let seconde = (Object.keys(summonerSpell).find((i) => summonerSpell[i].count == max2))?.split('-')
    let winPer = [(max / sum * 100).toFixed(2) + ' %', (max2 / sum * 100).toFixed(2) + ' %']

    let imgUrl = 'https://ddragon.leagueoflegends.com/cdn/14.8.1/img/spell/'
    let spell: { [id: string]: string } = {
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
        <div className={style.build_champ_spells}>
            <div>
                <div>
                    {
                        first
                            ?
                            <>
                                <div><img src={imgUrl + spell[first[0] as keyof { [id: string]: string }] + '.png'}></img></div>
                                <div><img src={imgUrl + spell[first[1] as keyof { [id: string]: string }] + '.png'}></img></div>
                            </>
                            : <></>
                    }
                </div>
                <div>
                    <div>승률</div>
                    <div>{winPer[0]}</div>
                </div>
            </div>
            <div>
                <div>
                    {
                        seconde
                            ?
                            <>
                                <div><img src={imgUrl + spell[seconde[0] as keyof { [id: string]: string }] + '.png'}></img></div>
                                <div><img src={imgUrl + spell[seconde[1] as keyof { [id: string]: string }] + '.png'}></img></div>
                            </>
                            : <></>
                    }
                </div>
                <div>
                    <div>승률</div>
                    <div>{winPer[1]}</div>
                </div>
            </div>
        </div>
    )
}