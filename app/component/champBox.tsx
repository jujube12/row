'use client'
import style from './component.module.css'
import { useRouter } from 'next/navigation'
import { champList } from './d'
import { useState } from 'react'

export default function ChampBox(props: { champSortListByPick: string, champSortListByWin: string, champSortListByName: string }) {
    let router = useRouter()
    const champSortListByPick: champList[] = JSON.parse(props.champSortListByPick).slice(0, 10)
    const champSortListByWin: champList[] = JSON.parse(props.champSortListByWin).slice(0, 10)
    const champSortListByName: champList[] = JSON.parse(props.champSortListByName).slice(0, 10)
    let [champBox, showChampBox] = useState(false)
    let [wordBox, showWordBox] = useState(false)
    let [champSortWord, setChampSortWord] = useState(['픽 많은 순', '승률 높은 순', '이름 순'])
    let a: champList[] = champSortListByPick
    if (champSortWord[0] === '픽 많은 순') {
        a = champSortListByPick
    } else if (champSortWord[0] === '승률 높은 순') {
        a = champSortListByWin
    } else {
        a = champSortListByName
    }

    function champList(champArray: champList[]) {
        return (
            <div>
                <div>
                    {champArray.slice(0, 5).map((champ, i) => {
                        if (champ.champName === 'FiddleSticks') {
                            champ.champName = 'Fiddlesticks'
                        }
                        return (
                            <div key={i}>
                                <div>{i + 1}</div>
                                <img src={`https://ddragon.leagueoflegends.com/cdn/14.2.1/img/champion/${champ.champName}.png`}></img>
                                <div>{champ.champName}</div>
                            </div>
                        )
                    })}
                </div>
                <div>
                    {champArray.slice(5, 10).map((champ, i) => {
                        if (champ.champName === 'FiddleSticks') {
                            champ.champName = 'Fiddlesticks'
                        }
                        return (
                            <div key={i}>
                                <div>{i + 6}</div>
                                <img src={`https://ddragon.leagueoflegends.com/cdn/14.2.1/img/champion/${champ.champName}.png`}></img>
                                <div>{champ.champName}</div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
    return (
        <div className={style.champ_box_wrapper}>
            <div>
                <div>챔피언 목록</div>
                <div onClick={() => { router.push('/championList') }}>챔피언 목록 이동</div>
            </div>
            <div>
                <div onClick={() => { showWordBox(true) }}>{champSortWord[0]} ▼</div>
                <div style={wordBox ? { display: 'block' } : { display: 'none' }}>
                    <div onClick={() => { showWordBox(false) }}>{champSortWord[0]} ▼</div>
                    {champSortWord.slice(1).map((word, i) => {
                        return (
                            <div key={i} onClick={() => {
                                let copy = [word]
                                champSortWord.map((w) => {
                                    if (w != word) {
                                        copy.push(w)
                                    }
                                })
                                setChampSortWord(copy)
                                showWordBox(false)
                            }}>{word}</div>
                        )
                    })}
                </div>
            </div>
            <div className={style.champ_sorted_list}>
                {champList(a)}
            </div>
        </div>
    )
}