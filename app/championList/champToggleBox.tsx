'use client'
import style from './championList.module.css'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
export default function ChampToggleBox() {
    const champPosition = [[
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
    const positionList = ['암살자', '전사', '마법사', '원거리딜러', '서포터', '탱커']
    let [position, setPosition] = useState(0)
    let router = useRouter()
    function champImg(position: any) {
        return (
            champPosition[position].map((championName, i) => {
                return (
                    <div key={i} className={style.champion_img_box} onClick={() => { router.push(`champ/${championName}`) }}>
                        <div>
                            <img src={`https://ddragon.leagueoflegends.com/cdn/14.2.1/img/champion/${championName}.png`}></img>
                        </div>
                        <div>{championName}</div>
                    </div>
                )
            })
        )
    }
    return (
        <div className={style.toggle_championList_wrapper}>
            <div className={style.toggle_championList_btn_bar}>
                {
                    positionList.map((p, i) => {
                        return (
                            <div className={position == i ? style.toggle_btn_selected : ''} onClick={() => { setPosition(i) }}>{p}</div>
                        )
                    })
                }
            </div>
            <div className={style.championList_box}>{champImg(position)}</div>
        </div>
    )
}