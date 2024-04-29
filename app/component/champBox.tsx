'use client'
import style from './component.module.css'
import { useRouter } from 'next/navigation'

export default function ChampBox() {
    let router = useRouter()
    return (
        <div className={style.champ_box_wrapper}>
            <div>
                <div>챔피언 목록</div>
                <div onClick={() => { router.push('/championList') }}>챔피언 목록 이동</div>
            </div>
            <div></div>
        </div>
    )
}