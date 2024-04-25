'use client'
import style from './component.module.css'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
export default function SummonerSearchBox() {
    let router = useRouter()
    let [summonerName, setSummonerName] = useState('')
    let [summonerTag, setSummonerTag] = useState('')

    return (
        <div className={style.summonerSearch_box_wrapper}>
            <div className={style.summonerSearch_input_box}>
                <input placeholder='소환사 이름을 입력하세요' onChange={(e) => { setSummonerName(e.target.value) }}></input>
                <input placeholder='# 태그를 입력하세요' onChange={(e) => { setSummonerTag(e.target.value) }}></input>
            </div>
            <button onClick={() => { router.push(`/summoner/${summonerName}-${summonerTag}`) }}>검색</button>
        </div>
    )
}