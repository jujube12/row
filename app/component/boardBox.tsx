'use client'
import { useEffect, useState } from 'react'
import { post } from '../board/d'
import style from './component.module.css'
import Link from 'next/link'
export default function BoardBox() {
    let [recentList, setRecentList] = useState([])
    useEffect(() => {
        fetch('api/main/mainBoard', { method: 'POST', body: '' })
            .then((r) => r.json())
            .then((result) => {
                setRecentList(result)
            })
    }, [])

    return (
        <>
            <div className={`${style.board_box_wrapper}`}>
                <div className={style.board_list}>
                    <div>
                        <div>최근 게시글</div>
                        <Link href={'/board'}>게시판 이동</Link>
                    </div>
                    <div className={style.board_list_box}>
                        {
                            recentList.map((a: post, i) => {
                                return (
                                    <Link key={i} className={style.board_post} href={`/board/detail/${a._id}`}>
                                        <div>{a.title}</div>
                                        <div>{a.name}</div>
                                        <div>{a.post}</div>
                                    </Link>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}