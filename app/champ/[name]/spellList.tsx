'use client'
import { useState } from 'react'
import style from '../champ.module.css'
import { passive, spell } from '../d'

export default function SpellList(props: { passive: passive, spellList: spell[], champKey: string }) {
    const spellKeyArr = ['Q', 'W', 'E', 'R']
    const passive: passive = props.passive
    const spellList: spell[] = props.spellList
    const champKey = ('000' + props.champKey).slice(-4)
    const spellVideoArr = ['P1', 'Q1', 'W1', 'E1', 'R1']
    let [spell, setSpell] = useState('P1')
    return (
        <div className={style.champ_spellList_wrapper}>
            <div className={style.champ_spellLsit_box}>
                <div>spell</div>
                <div onClick={() => { setSpell('P1') }}>
                    <img src={`https://ddragon.leagueoflegends.com/cdn/14.6.1/img/passive/${passive.image.full}`}></img>
                    <div>Passive</div>
                </div>
                {
                    spellList.map((spell, i) => {
                        return (
                            <div key={i} onClick={() => { setSpell(spellVideoArr[i + 1]) }}>
                                <img src={`https://ddragon.leagueoflegends.com/cdn/14.6.1/img/spell/${spell.image.full}`}></img>
                                <div>{spellKeyArr[i]}</div>
                            </div>
                        )
                    })
                }
            </div>
            <div className={style.champ_spellVideo_box}>
                {
                    spellVideoArr.map((key, i) => {
                        console.log(spell)
                        return (
                            <video key={i} controls style={key == spell ? { opacity: '1' } : { opacity: '0' }}>
                                <source src={`https://d28xe8vt774jo5.cloudfront.net/champion-abilities/${champKey}/ability_${champKey}_${key}.webm`} type="video/webm" />
                            </video>
                        )
                    })
                }
            </div>
        </div>
    )
}