'use client'
import { signIn } from 'next-auth/react'
import { useState, FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import style from './login.module.css'

export default function NotYetLogged() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
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
            }
        });
    }
    return (
        <div className={style.login_container}>
            <div className={style.login_title}>
                Row
            </div>
            <form onSubmit={onSubmit}>
                <input name="email" type="text" placeholder="아이디"
                    onChange={(e) => {
                        setEmail(e.target.value)
                    }} />
                <input name="password" type="password" placeholder="비밀번호"
                    onChange={(e) => {
                        setPassword(e.target.value)
                    }} />
                <button type="submit">로그인</button>
                <div className={style.login_register} onClick={() => { router.push('/register') }}>회원가입</div>
            </form>
        </div>
    )
}