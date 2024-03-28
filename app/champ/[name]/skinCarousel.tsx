'use client'
import style from '../champ.module.css'
import { useState } from 'react'
import { skin } from '../d'

export default function SkinCarousel(props: { champName: string, skinList: skin[] }) {
    let champName = props.champName
    let skinList = props.skinList
    let [slideMount, setSlideMount] = useState(0)
    function slideLeftMove() {
        if (slideMount !== 0) {
            setSlideMount(slideMount + 100)
        }
    }
    function slideRightMove() {
        if (slideMount > (skinList.length - 1) * -100) {
            setSlideMount(slideMount - 100)
        }
    }
    return (
        <div className={style.champ_skinList_wrapper}>
            <div className={style.champ_skinList}>
                <div className={style.champ_skinList_img}>
                    {
                        skinList.map((skin, i) => {
                            return (
                                <img key={i} style={{ transform: `translateX(${slideMount}%)` }} src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champName}_${skin.num}.jpg`}></img>
                            )
                        })
                    }
                </div>
                <div className={style.champ_skinList_btn}>
                    <div onClick={() => { slideLeftMove() }}>◀</div>
                    <div onClick={() => { slideRightMove() }}>▶</div>
                </div>
            </div>
        </div>
    )
}