'use client'
import { useEffect, useState, useRef } from 'react'
import style from '../champ.module.css'
export default function ChampTitle(props: { name: string, title: string }) {
    useEffect(() => {
        window.addEventListener('scroll', updateScroll);
    }, [])
    let parentHeaderBox = useRef<HTMLDivElement | null>(null)
    let [heightDiff, setHeaderDiff] = useState<number | undefined>(0)
    function updateScroll() {
        setHeaderDiff(parentHeaderBox.current?.getBoundingClientRect().bottom)
    }
    function showHeader() {
        if (heightDiff) {
            if (heightDiff < 0) {
                return { display: 'flex' }
            }
        }
    }
    return (
        <>
            <div ref={parentHeaderBox} className={style.champ_detail_bg}>
                <div>
                    <div>{props.name}</div>
                    <div>{props.title}</div>
                </div>
                <img src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${props.name}_0.jpg`}></img>
            </div>
            <div className={style.champ_detail_sticky_header_wrapper} style={showHeader()}>
                <div>
                    <img src={`https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/${props.name}.png`}></img>
                </div>
                <div>
                    <div>{props.title}</div>
                    <div>{props.name}</div>
                </div>
            </div>
        </>
    )
}