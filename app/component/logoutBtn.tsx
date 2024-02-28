'use client'

import { signOut } from "next-auth/react"

export default function LogoutBtn() {
    return (
        <div onClick={() => { signOut() }}>
            로그아웃
        </div>
    )
}