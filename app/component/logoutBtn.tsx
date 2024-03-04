'use client'

import { signOut } from "next-auth/react"
import style from './component.module.css'
export default function LogoutBtn() {
    return (
        <div onClick={() => { signOut() }} className={style.logout_btn}>
            로그아웃
        </div>
    )
}