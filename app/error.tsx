'use client'
import style from './main.module.css'
import { useRouter } from 'next/navigation'
export default function Error() {
    const router = useRouter()
    return (
        <div className={style.error_container}>
            <div className={style.error_wrapper}>
                <div>404 Error</div>
                <div>페이지를 찾을 수 없습니다</div>
                <div>
                    <button onClick={() => { router.back() }}>이전페이지로</button>
                    <button onClick={() => { router.push('/') }}>홈으로</button>
                </div>
            </div>
        </div>
    )
}