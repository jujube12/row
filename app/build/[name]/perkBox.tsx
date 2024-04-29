'use client'
import { useEffect, useState } from 'react'
import style from '../build.module.css'
import { perkInfo, perkJson } from '../d'

export default function PerkBox(props: { perkData: perkInfo }) {
    const summonerPerk: perkInfo | undefined = props.perkData
    let imgUrl = 'https://ddragon.leagueoflegends.com/cdn/img/'
    let [perkData, setPerkData] = useState<perkJson[] | null>(null)
    let max = Math.max(...Object.values(summonerPerk?.primaryStyle.perk))
    let max2 = Math.max(...Object.values(summonerPerk?.subStyle.perk))
    let mostMainPerk = Object.keys(summonerPerk.primaryStyle.perk).find((i) => summonerPerk.primaryStyle.perk[i] == max)
    let mostSubPerk = Object.keys(summonerPerk.subStyle.perk).find((i) => summonerPerk.subStyle.perk[i] == max2)
    let [mainPerkInfo, setMainPerkInfo] = useState<perkJson | null>(null)
    let [subPerkInfo, setSubPerkIngo] = useState<perkJson | null>(null)
    useEffect(() => {
        fetch('https://ddragon.leagueoflegends.com/cdn/14.7.1/data/ko_KR/runesReforged.json')
            .then((r) => r.json())
            .then((result) => {
                setPerkData(result)
            })
    }, [])

    useEffect(() => {
        if (perkData != null) {
            setMainPerkInfo(perkData[perkData.findIndex((i) => i.id == mostMainPerk)])
            setSubPerkIngo(perkData[perkData.findIndex((i) => i.id == mostSubPerk)])
        }
    }, [perkData])

    let mainPerkList = summonerPerk.primaryStyle[mostMainPerk as keyof perkInfo]
    let selectedMainPerkIndex: number[] = []
    mainPerkInfo?.slots.map((slot, i) => {
        let runeArr: number[] = []
        slot.runes.map((r) => {
            runeArr.push(mainPerkList[r.id])
        })
        selectedMainPerkIndex.push(runeArr.indexOf(Math.max(...runeArr)))
    })
    let subPerkList = summonerPerk.subStyle[mostSubPerk as keyof perkInfo]
    let selectedSubPerkIndex: number[] = []
    subPerkInfo?.slots.map((slot, i) => {
        let runeArr: number[] = []
        slot.runes.map((r) => {
            runeArr.push(subPerkList[r.id])
        })
        selectedSubPerkIndex.push(runeArr.indexOf(Math.max(...runeArr)))
    })
    return (
        <div className={style.build_champ_perks}>
            <div>
                <div>
                    <div><img src={imgUrl + mainPerkInfo?.icon}></img></div>
                    {
                        mainPerkInfo?.slots.map((slot, i) => {
                            return (
                                <div key={i}>
                                    {
                                        slot.runes.map((a, j) => {
                                            return (
                                                <div key={j}><img style={selectedMainPerkIndex[i] == j ? { filter: 'none' } : {}} src={imgUrl + a.icon}></img></div>
                                            )
                                        })
                                    }
                                </div>
                            )
                        })
                    }
                </div>
                <div>
                    <div><img src={imgUrl + subPerkInfo?.icon}></img></div>
                    {
                        subPerkInfo?.slots.map((slot, i) => {
                            return (
                                <div key={i}>
                                    {
                                        i != 0
                                            ? slot.runes.map((a, j) => {
                                                return (
                                                    <div key={j}><img style={selectedSubPerkIndex[i] == j ? { filter: 'none' } : {}} src={imgUrl + a.icon}></img></div>
                                                )
                                            })
                                            : <div></div>
                                    }
                                </div>
                            )
                        }
                        )
                    }
                </div>
            </div>
        </div>
    )
}