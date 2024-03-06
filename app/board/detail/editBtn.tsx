'use client'
import style from '../board.module.css'
import { useRouter } from 'next/navigation'
export default function EditBtn(props: { id: string }) {
    let router = useRouter()
    return (
        <div className={style.edit_btn} onClick={() => {
            router.push(`/board/update/${JSON.parse(props.id)}`)
        }}>
            수정
        </div>
    )
}