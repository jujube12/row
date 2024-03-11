'use client'
import { useEffect } from 'react'
import style from './component.module.css'
import { useRouter } from 'next/navigation'
export default function BoardBox() {
    let router = useRouter()

    useEffect(() => {
        fetch('api/main/mainBoard', { method: 'POST', body: '' })
            .then((r) => r.json())
            .then((result) => {
                console.log(result)
            })
    }, [])
    return (
        <>
            <div className={`${style.board_box_container} box`} onClick={() => {
                router.push('/board')
            }}>
                <div className={style.board_box_list}>
                    <div>최근 게시글</div>
                    <div>a</div>
                </div>
                <div className={style.board_box_list}>
                    <div>인기 게시글</div>
                    <div>a</div>
                </div>
            </div>
        </>
    )
}