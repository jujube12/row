'use client'
import style from '../champ.module.css'
import { useRouter } from 'next/navigation'
export default function Position(props: { tags: string[], champName: string }) {
    const position = props.tags
    const router = useRouter()
    return (
        <div className={style.champ_detail_position}>
            <div>position</div>
            <div>
                <div>{position[0]}</div>
                <div style={position[1] == undefined ? { display: 'none' } : {}}>{position[1]}</div>
            </div>
            <div onClick={() => { router.push(`/build/${props.champName}`) }}>빌드 확인하기</div>
        </div>
    )
}