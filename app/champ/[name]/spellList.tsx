'use client'
import { useState, useRef, useEffect } from 'react'
import style from '../champ.module.css'
import { passive, spell } from '../d'

export default function SpellList(props: { passive: passive, spellList: spell[], champKey: string }) {
    const spellKeyArr = ['Q', 'W', 'E', 'R']
    const passive: passive = props.passive
    const spellList: spell[] = props.spellList
    const champKey = ('000' + props.champKey).slice(-4)
    const spellVideoArr = ['P1', 'Q1', 'W1', 'E1', 'R1']
    let [seletedSpell, setSelectedSpell] = useState('P1')
    let [spellDescription, setSpellDescription] = useState([passive.name, passive.description])
    const vRef = useRef<(HTMLVideoElement | null)[]>([])
    function pausevideo() {
        vRef.current.map((video) => {
            video?.pause();
        })
    }
    useEffect(() => {
        let copy = [...spellDescription]
        if (seletedSpell == 'P1') {
            copy[0] = passive.name
            copy[1] = passive.description
        } else {
            copy[0] = spellList[spellVideoArr.indexOf(seletedSpell) - 1].name
            copy[1] = spellList[spellVideoArr.indexOf(seletedSpell) - 1].description
        }
        setSpellDescription(copy)
    }, [seletedSpell])
    return (
        <div className={style.champ_spellList_wrapper}>
            <div className={style.champ_spellLsit_box}>
                <div>spell</div>
                <div>
                    <div onClick={() => { setSelectedSpell('P1') }} className={seletedSpell === 'P1' ? style.selected_spell : style.none_selected_spell}>
                        <img src={`https://ddragon.leagueoflegends.com/cdn/14.6.1/img/passive/${passive.image.full}`}></img>
                        <div>Passive</div>
                    </div>
                    {
                        spellList.map((spell, i) => {
                            return (
                                <div key={i} onClick={() => { setSelectedSpell(spellVideoArr[i + 1]); pausevideo() }} className={seletedSpell == (spellKeyArr[i] + '1') ? style.selected_spell : style.none_selected_spell}>
                                    <img src={`https://ddragon.leagueoflegends.com/cdn/14.6.1/img/spell/${spell.image.full}`}></img>
                                    <div>{spellKeyArr[i]}</div>
                                </div>
                            )
                        })
                    }
                </div>
                <div>
                    <div>{spellDescription[0]}</div>
                    <div>{spellDescription[1]}</div>
                </div>
            </div>
            <div className={style.champ_spellVideo_box}>
                {
                    spellVideoArr.map((key, i) => {
                        return (
                            <video ref={e => vRef.current[i] = e} key={i} controls muted style={key == seletedSpell ? { margin: 'auto' } : { display: 'none' }}>
                                <source src={`https://d28xe8vt774jo5.cloudfront.net/champion-abilities/${champKey}/ability_${champKey}_${key}.webm`} type="video/webm" />
                            </video>
                        )
                    })
                }
            </div>
        </div>
    )
}