'use client'
import { signIn } from 'next-auth/react'
import { useState, FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import style from './login.module.css'

export default function NotYetLogged() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    let [ok, setOk] = useState(false)
    let router = useRouter()

    async function onSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        await signIn("credentials", {
            email: email,
            password: password,
            redirect: false,
        }).then((result) => {
            if (result?.ok) {
                router.push('/')
            } else {
                setOk(true)
            }
        });
    }
    return (
        <div className={style.login_container}>
            <div className={style.login_title}>
                Row
            </div>
            <form onSubmit={onSubmit}>
                {ok ? <div className='gold p4 f14px'>이메일 또는 비밀번호를 잘못입력하셨습니다.</div> : <div style={{ visibility: 'hidden' }}>.</div>}
                <input name="email" type="text" placeholder="email"
                    onChange={(e) => {
                        setEmail(e.target.value)
                    }} />
                <input name="password" type="password" placeholder="password"
                    onChange={(e) => {
                        setPassword(e.target.value)
                    }} />
                <button type="submit">로그인</button>
                <div className={style.login_register} onClick={() => { router.push('/register') }}>회원가입</div>
            </form>
        </div>
    )
}