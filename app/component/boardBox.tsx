'use client'
import { useEffect, useState } from 'react'
import style from './component.module.css'
import { post } from '../board/d'
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
                        <div className='fw700 f14px'>최근 게시글</div>
                        <Link href={'/board'} className='f12px'>게시판 이동</Link>
                    </div>
                    <div className={style.board_list_box}>
                        {
                            recentList.map((a: post, i) => {
                                return (
                                    <Link href={`/board/detail/${a._id}`} key={i} className={`${style.board_post} link`}>
                                        <div className='w100 f14px'>{a.title}</div>
                                        <div className='w100 f12px'>{a.name}</div>
                                        <div className='f12px'>{a.post}</div>
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