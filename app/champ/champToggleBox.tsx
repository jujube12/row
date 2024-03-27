'use client'
import style from './champ.module.css'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
export default function ChampToggleBox() {
    let champPosition = [[
        'Akali', 'Ekko', 'Evelynn',
        'Kassadin', 'Katarina', 'Khazix',
        'Fizz', 'MasterYi', 'Naafiri',
        'Nidalee', 'Nocturne', 'Leblanc',
        'Rengar', 'Shaco', 'Talon',
        'Viego', 'Qiyana', 'Zed',
        'Yone'
    ], [
        'Aatrox', 'Belveth', 'Briar',
        'Camille', 'Diana', 'Darius',
        'DrMundo', 'Fiora', 'Gangplank',
        'Garen', 'Gnar', 'Gwen',
        'Hecarim', 'Irelia', 'Illaoi',
        'Jayce', 'Jax', 'Kayle',
        'Kayn', 'Kled', 'LeeSin',
        'Lillia', 'MonkeyKing', 'Mordekaiser',
        'Nilah', 'Nasus', 'Olaf',
        'Pantheon', 'Gragas', 'RekSai',
        'Renekton', 'Rumble', 'Riven',
        'Shyvana', 'Sett', 'Skarner',
        'Trundle', 'Tryndamere', 'Udyr',
        'Urgot', 'Vi', 'Volibear',
        'Warwick', 'Yasuo', 'Yorick',
        'XinZhao'
    ], [
        'Ahri', 'Anivia', 'Annie',
        'AurelionSol', 'Azir', 'Cassiopeia',
        'Elise', 'Fiddlesticks', 'Brand',
        'Heimerdinger', 'Hwei', 'Karthus',
        'Karma', 'Kennen', 'Lissandra',
        'Malzahar', 'Lux', 'Morgana',
        'Neeko', 'Orianna', 'Ryze',
        'Seraphine', 'Swain', 'Sylas',
        'Syndra', 'Taliyah', 'TwistedFate',
        'Velkoz', 'Veigar', 'Vex',
        'Viktor', 'Vladimir', 'Zyra',
        'Ziggs', 'Zoe', 'Xerath'
    ], [
        'Aphelios', 'Ashe', 'Akshan',
        'Caitlyn', 'Corki', 'Draven',
        'Ezreal', 'Graves', 'Jhin',
        'Kalista', 'Kaisa', 'Jinx',
        'Kindred', 'KogMaw', 'Lucian',
        'MissFortune', 'Quinn', 'Samira',
        'Senna', 'Sivir', 'Smolder',
        'Teemo', 'Tristana', 'Twitch',
        'Varus', 'Vayne', 'Xayah',
        'Zeri'
    ], [
        'Bard', 'Braum',
        'Janna', 'Ivern',
        'Lulu', 'Milio',
        'Nami', 'Pyke',
        'Rakan', 'Renata',
        'TahmKench', 'Sona',
        'Soraka', 'Taric',
        'Thresh', 'Yuumi',
        'Zilean'
    ], [
        'Amumu', 'Alistar',
        'Chogath', 'Blitzcrank',
        'Galio', 'JarvanIV',
        'KSante', 'Leona',
        'Malphite', 'Maokai',
        'Nautilus', 'Nunu',
        'Ornn', 'Poppy',
        'Rammus', 'Singed',
        'Shen', 'Sejuani',
        'Sion', 'Rell',
        'Zac'
    ]]
    let [position, setPosition] = useState(0)
    let router = useRouter()
    function champImg(position: any) {
        let arr = champPosition[position]
        return (
            champPosition[position].map((a, i) => {
                return (
                    <div key={i} className={style.champInfo_box} onClick={() => { router.push(`champ/${a}`) }}>
                        <div>
                            <img src={`https://ddragon.leagueoflegends.com/cdn/14.2.1/img/champion/${a}.png`}></img>
                        </div>
                        <div>{a}</div>
                    </div>
                )
            })
        )
    }
    return (
        <div className={style.champList_wrapper}>
            <div className={style.champList_toggle_btn}>
                <div className={position == 0 ? style.toggle_btn_selected : ''} onClick={() => { setPosition(0) }}>암살자</div>
                <div className={position == 1 ? style.toggle_btn_selected : ''} onClick={() => { setPosition(1) }}>전사</div>
                <div className={position == 2 ? style.toggle_btn_selected : ''} onClick={() => { setPosition(2) }}>마법사</div>
                <div className={position == 3 ? style.toggle_btn_selected : ''} onClick={() => { setPosition(3) }}>원거리딜러</div>
                <div className={position == 4 ? style.toggle_btn_selected : ''} onClick={() => { setPosition(4) }}>서포터</div>
                <div className={position == 5 ? style.toggle_btn_selected : ''} onClick={() => { setPosition(5) }}>탱커</div>
            </div>
            <div className={style.champList_box}>{champImg(position)}</div>
        </div>
    )
}