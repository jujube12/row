'use client'
import style from './component.module.css'
import { useRouter } from 'next/navigation'
export default function BoardBox() {
    let router = useRouter()
    return (
        <>
            <div className={style.board_box_container} onClick={() => {
                router.push('/board')
            }}>
                게시판 이동 버튼

            </div>
        </>
    )
}