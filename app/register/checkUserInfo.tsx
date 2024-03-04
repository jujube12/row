'use client'
import { useEffect, useState } from "react"
import style from './register.module.css'
export default function CheckUserInfo() {
    let [name, setName] = useState(' ')
    let [email, setEmail] = useState(' ')
    let [password, setPassword] = useState(' ')
    let [ok, setOk] = useState(false)
    let [ment, setMent] = useState('')
    let [submit, setSubmit] = useState(false)
    let [focus, setFocus] = useState('')
    useEffect(() => {

        fetch('api/user/checkUserInfo', { method: 'POST', body: JSON.stringify({ name: name, email: email, password: password, focus: focus }) }).then((r) => r.json())
            .then((result) => {
                if (result === 'ok') {
                    setMent(' ')
                    setOk(true)
                }
                else {
                    setOk(false)
                    setMent(result)
                }
            })

    }, [name, email, password])

    return (
        <>
            <div className="f14px gold p6 h30">{ment}</div>
            <input type='text' name='name' placeholder='name' onChange={(e) => { setName(e.target.value) }} onFocus={() => { setFocus('name') }}></input>
            <input type='text' name='email' placeholder='email' onChange={(e) => { setEmail(e.target.value) }} onFocus={() => { setFocus('email') }}></input>
            <input type='password' name='password' placeholder='password' onChange={(e) => { setPassword(e.target.value) }} onFocus={() => { setFocus('password') }}></input>
            {
                ok
                    ? <button type='submit'>회원 가입</button>
                    : <div className={style.register_box_btn}>회원 가입</div>
            }
        </>
    )
}