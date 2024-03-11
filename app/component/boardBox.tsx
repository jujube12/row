'use client'
import { useEffect, useState } from 'react'
import style from './component.module.css'
import { useRouter } from 'next/navigation'
import { post } from '../board/d'

export default function BoardBox() {
    let router = useRouter()
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
            <div className={`${style.board_box_container} box`}>
                <div className={style.board_list}>
                    <div>
                        <div className='fw700 pt10'>최근 게시글</div>
                        <div className='btn' onClick={() => { router.push('/board') }}>게시판 이동</div>
                    </div>
                    <div className={style.board_list_box}>
                        {
                            recentList.map((a: post, i) => {
                                return (
                                    <div key={i} className={style.board_post} onClick={() => {
                                        router.push(`board/detail/${a._id}`)
                                    }}>
                                        <div>{a.title}</div>
                                        <div>{a.name}</div>
                                        <div>{a.post}</div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}