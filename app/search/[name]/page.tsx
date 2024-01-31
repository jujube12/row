import style from '../search.module.css'
import SearchBox from '@/app/component/searchBox'

export default async function Search(props: param) {
    let summonerInfo!: summoner
    let matchIDInfo!: string[]
    let matchInfo: match[] = []
    await fetch(`https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/${props.params.name}?api_key=${process.env.NEXT_RIOT}`)
        .then((r) => r.json())
        .then((result) => {
            summonerInfo = result
        })
    await fetch(`https://asia.api.riotgames.com/lol/match/v5/matches/by-puuid/${summonerInfo.puuid}/ids?start=0&count=3&api_key=${process.env.NEXT_RIOT}`)
        .then((r) => r.json())
        .then((result) => {
            matchIDInfo = result
        })
    await Promise.all(matchIDInfo.map(async (a) => {
        await fetch(`https://asia.api.riotgames.com/lol/match/v5/matches/${a}?api_key=${process.env.NEXT_RIOT}`)
            .then((r) => r.json())
            .then((result) => {
                matchInfo.push(result)
            })
    }))

    let userNameCnt = [...new Array(5)].map((_, i) => i + 1);
    return (
        <div className={style.search_container}>
            <div style={{ margin: '10px' }}></div>
            <SearchBox></SearchBox>
            <div className={style.profile_container}>
                <div className={style.profile_image}></div>
                <div className={style.profile_info}>
                    <div>{summonerInfo.name}</div>
                    <div>level: {summonerInfo.summonerLevel}</div>
                </div>
            </div>
            <div className={style.match_container}>
                {
                    matchInfo.map((a, i) => {
                        return (
                            <div key={i} className={style.match_box}>
                                <div className={style.match_box_team}>
                                    {
                                        userNameCnt.map((b, i) => {
                                            return (
                                                <div key={i} className={style.match_user_box}>
                                                    <img className={style.match_user_img} src={`https://ddragon.leagueoflegends.com/cdn/14.2.1/img/champion/${a.info.participants[b - 1].championName}.png`}></img>
                                                    <div className={style.match_user_spell}>
                                                        <img src={`https://ddragon.leagueoflegends.com/cdn/14.2.1/img/spell/SummonerFlash.png`}></img>
                                                        <img src='https://ddragon.leagueoflegends.com/cdn/14.2.1/img/spell/SummonerFlash.png'></img>
                                                    </div>
                                                    <div className={style.match_user_info}>
                                                        {a.info.participants[b - 1].summonerName == ''
                                                            ? <div className={style.match_user_name}>{a.info.participants[b - 1].riotIdGameName}</div>
                                                            : <div className={style.match_user_name}>{a.info.participants[b - 1].summonerName}</div>
                                                        }
                                                        <div className={style.match_user_level}> {a.info.participants[b - 1].champLevel} </div>
                                                        <div className={style.match_user_kda}>{a.info.participants[b - 1].kills} / {a.info.participants[b - 1].deaths}/ {a.info.participants[b - 1].assists}</div>
                                                    </div>
                                                    <div className={style.match_user_item}>
                                                        {
                                                            a.info.participants[b - 1].item0 != 0
                                                                ? <img src={`https://ddragon.leagueoflegends.com/cdn/14.2.1/img/item/${a.info.participants[b - 1].item0}.png`}></img>
                                                                : <p></p>
                                                        }
                                                        {
                                                            a.info.participants[b - 1].item1 != 0
                                                                ? <img src={`https://ddragon.leagueoflegends.com/cdn/14.2.1/img/item/${a.info.participants[b - 1].item1}.png`}></img>
                                                                : <p></p>
                                                        }
                                                        {
                                                            a.info.participants[b - 1].item2 != 0
                                                                ? <img src={`https://ddragon.leagueoflegends.com/cdn/14.2.1/img/item/${a.info.participants[b - 1].item2}.png`}></img>
                                                                : <p></p>
                                                        }
                                                        {
                                                            a.info.participants[b - 1].item3 != 0
                                                                ? <img src={`https://ddragon.leagueoflegends.com/cdn/14.2.1/img/item/${a.info.participants[b - 1].item3}.png`}></img>
                                                                : <p></p>
                                                        }
                                                        {
                                                            a.info.participants[b - 1].item4 != 0
                                                                ? <img src={`https://ddragon.leagueoflegends.com/cdn/14.2.1/img/item/${a.info.participants[b - 1].item4}.png`}></img>
                                                                : <p></p>
                                                        }
                                                        {
                                                            a.info.participants[b - 1].item5 != 0
                                                                ? <img src={`https://ddragon.leagueoflegends.com/cdn/14.2.1/img/item/${a.info.participants[b - 1].item5}.png`}></img>
                                                                : <p></p>
                                                        }
                                                        {
                                                            a.info.participants[b - 1].item5 != 0
                                                                ? <img src={`https://ddragon.leagueoflegends.com/cdn/14.2.1/img/item/${a.info.participants[b - 1].item6}.png`}></img>
                                                                : <p></p>
                                                        }
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                <div className={style.match_box_team}>
                                    {
                                        userNameCnt.map((b, i) => {
                                            return (
                                                <div key={i} className={style.match_user_box}>
                                                    <img className={style.match_user_img} src={`https://ddragon.leagueoflegends.com/cdn/14.2.1/img/champion/${a.info.participants[b + 4].championName}.png`}></img>
                                                    <div className={style.match_user_info}>
                                                        {a.info.participants[b + 4].summonerName == ''
                                                            ? <div className={style.match_user_name}>{a.info.participants[b + 4].riotIdGameName}</div>
                                                            : <div className={style.match_user_name}>{a.info.participants[b + 4].summonerName}</div>
                                                        }
                                                        <div className={style.match_user_level}>{a.info.participants[b + 4].champLevel}</div>
                                                        <div className={style.match_user_kda}>{a.info.participants[b + 4].kills} / {a.info.participants[b + 4].deaths}/ {a.info.participants[b + 4].assists}</div>
                                                    </div>
                                                    <div className={style.match_user_item}>
                                                        {
                                                            a.info.participants[b + 4].item0 != 0
                                                                ? <img src={`https://ddragon.leagueoflegends.com/cdn/14.2.1/img/item/${a.info.participants[b - 1].item0}.png`}></img>
                                                                : <p></p>
                                                        }
                                                        {
                                                            a.info.participants[b + 4].item1 != 0
                                                                ? <img src={`https://ddragon.leagueoflegends.com/cdn/14.2.1/img/item/${a.info.participants[b + 4].item1}.png`}></img>
                                                                : <p></p>
                                                        }
                                                        {
                                                            a.info.participants[b + 4].item2 != 0
                                                                ? <img src={`https://ddragon.leagueoflegends.com/cdn/14.2.1/img/item/${a.info.participants[b + 4].item2}.png`}></img>
                                                                : <p></p>
                                                        }
                                                        {
                                                            a.info.participants[b + 4].item3 != 0
                                                                ? <img src={`https://ddragon.leagueoflegends.com/cdn/14.2.1/img/item/${a.info.participants[b + 4].item3}.png`}></img>
                                                                : <p></p>
                                                        }
                                                        {
                                                            a.info.participants[b + 4].item4 != 0
                                                                ? <img src={`https://ddragon.leagueoflegends.com/cdn/14.2.1/img/item/${a.info.participants[b + 4].item4}.png`}></img>
                                                                : <p></p>
                                                        }
                                                        {
                                                            a.info.participants[b + 4].item5 != 0
                                                                ? <img src={`https://ddragon.leagueoflegends.com/cdn/14.2.1/img/item/${a.info.participants[b + 4].item5}.png`}></img>
                                                                : <p></p>
                                                        }
                                                        {
                                                            a.info.participants[b + 4].item5 != 0
                                                                ? <img src={`https://ddragon.leagueoflegends.com/cdn/14.2.1/img/item/${a.info.participants[b + 4].item6}.png`}></img>
                                                                : <p></p>
                                                        }
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div >
    )
}