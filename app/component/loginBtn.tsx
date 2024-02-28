'use client'

import { signIn } from "next-auth/react"

export default function LoginBtn() {
    return (
        <div onClick={() => { signIn() }}>
            로그인
        </div>
    )
}