'use client'
import style from './component.module.css'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
export default function SearchBox() {
    let router = useRouter()
    let [searchBtn, setSearchBtn] = useState(false)
    let [input, setInput] = useState('')
    useEffect(() => {
        if (searchBtn == true) {
            fetch('api/summoner/search', { method: 'POST', body: JSON.stringify(input) }).then(r => r.json())
                .then((result) => {
                    console.log(result)
                    router.push('/search')
                })
        }
    }, [searchBtn])
    return (
        <div className={style.search_box_container}>
            <div className={style.search_box_input}>
                <input placeholder='검색어를 입력하세요' onChange={(e) => { setInput(e.target.value) }}></input>
                <button onClick={() => { setSearchBtn(true) }}>검색</button>
            </div>
        </div>
    )
}