'use client'
import { useEffect, useState, useRef } from 'react'
import style from '../champ.module.css'
export default function ChampTitle(props: { name: string, title: string }) {
    useEffect(() => {
        window.addEventListener('scroll', updateScroll);
    }, [])
    const [s, setS] = useState(0)
    function updateScroll() {
        setS(window.scrollY)
    }
    let p = useRef<HTMLDivElement | null>(null)
    let aaaa: number | undefined = 0
    if (p) {
        aaaa = p.current?.getBoundingClientRect().bottom
        // console.log(aaaa)
    }
    function aaaaaa() {
        if (aaaa) {
            if (aaaa < 0) {
                return { display: 'flex' }
            } else {
                return {}
            }

        }
    }
    return (
        <>
            <div ref={p} className={style.champ_detail_bg}>
                <div>
                    <div>{props.name}</div>
                    <div>{props.title}</div>
                </div>
                <img src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${props.name}_0.jpg`}></img>
            </div>
            <div className={style.border}></div>
            <div className={style.champ_detail_sticky_header_wrapper} style={aaaaaa()}>
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