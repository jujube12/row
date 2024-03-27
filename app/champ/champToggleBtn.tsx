'use client'
import { JSXElementConstructor, Key, PromiseLikeOfReactNode, ReactElement, ReactNode, ReactPortal, useState } from 'react'
import style from './champ.module.css'

export default function ChampToggleBtn(props: any) {
    let [position, setPosition] = useState(0)
    return (
        <div className={style.champList_toggle_btn}>
            <div className={position == 0 ? style.toggle_btn_selected : ''} onClick={() => { setPosition(0) }}>암살자</div>
            <div className={position == 1 ? style.toggle_btn_selected : ''} onClick={() => { setPosition(1) }}>전사</div>
            <div className={position == 2 ? style.toggle_btn_selected : ''} onClick={() => { setPosition(2) }}>마법사</div>
            <div className={position == 3 ? style.toggle_btn_selected : ''} onClick={() => { setPosition(3) }}>원거리딜러</div>
            <div className={position == 4 ? style.toggle_btn_selected : ''} onClick={() => { setPosition(4) }}>서포터</div>
            <div className={position == 5 ? style.toggle_btn_selected : ''} onClick={() => { setPosition(5) }}>탱커</div>
        </div>
    )
}