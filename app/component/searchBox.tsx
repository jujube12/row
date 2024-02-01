'use client'
import style from './component.module.css'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
export default function SearchBox() {
    let router = useRouter()
    let [input, setInput] = useState('')

    return (
        <div className={style.search_box_container}>
            <div className={style.search_box_input}>
                <input placeholder='검색어를 입력하세요' onChange={(e) => { setInput(e.target.value) }}></input>
                <button onClick={() => { router.push(`/search/${input}`) }}>검색</button>
            </div>
        </div>
    )
}