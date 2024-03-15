'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import style from './component.module.css'

export default function PostWriteBtn(props: any) {
    let [showBox, setShowBox] = useState(false)
    let router = useRouter()
    return (
        <div className={style.post_write_btn_wrapper}>
            <div onClick={() => { props.session ? router.push('/board/write') : setShowBox(true) }} className={style.post_write_btn}>글쓰기</div>
            <div style={{ clear: 'both' }}></div>
            {
                showBox
                    ? <div className={style.post_write_check}>
                        <div className={style.post_write_close_btn} onClick={() => { setShowBox(false) }}>x</div>
                        <div>
                            글을 작성하려면 로그인이 필요합니다.
                        </div>
                        <div className={style.post_write_session_btn}>
                            <div onClick={() => { router.push('/login') }}>로그인</div>
                            <div onClick={() => { router.push('/register') }}>회원가입</div>
                        </div>
                    </div>
                    : <div></div>
            }
        </div>
    )
}

