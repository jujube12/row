import style from '../champ.module.css'
import { passive, spell } from '../d'

export default function SpellList(props: { passive: passive, spellList: spell[] }) {
    const spellKey = ['Q', 'W', 'E', 'R']
    const passive: passive = props.passive
    const spellList: spell[] = props.spellList
    return (
        <div className={style.champ_detail_spell}>
            <div>
                <img src={`https://ddragon.leagueoflegends.com/cdn/14.6.1/img/passive/${passive.image.full}`}></img>
                <div>Passive</div>
                <div>{passive.name}</div>
            </div>
            {
                spellList.map((spell, i) => {
                    return (
                        <div>
                            <img src={`https://ddragon.leagueoflegends.com/cdn/14.6.1/img/spell/${spell.image.full}`}></img>
                            <div>{spellKey[i]}</div>
                            <div>{spell.name}</div>
                        </div>
                    )
                })
            }
        </div>
    )
}