'use client'
import style from '../board.module.css'
import { useRouter } from 'next/navigation'
export default function DeleteBtn(props: { id: string }) {
    let router = useRouter()
    return (
        <div className={style.delete_btn} onClick={() => {
            fetch('/api/board/delete', { method: 'DELETE', body: props.id })
                .then(() => {
                    router.push('/board')
                })
        }}>
            삭제
        </div>
    )
}