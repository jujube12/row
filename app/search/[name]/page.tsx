import style from '../search.module.css'
import SearchBox from '@/app/component/searchBox'
import MatchBox from './matchBox'

export default async function Search(props: param) {
    let summonerInfo!: summoner
    let matchIDInfo!: string[]
    let summonerLeague!: league
    await fetch(`https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/${props.params.name}?api_key=${process.env.NEXT_RIOT}`)
        .then((r) => r.json())
        .then((result) => {
            if (result.status != undefined) {
            } else {
                summonerInfo = result
            }
        })
    summonerInfo && await fetch(`https://kr.api.riotgames.com/lol/league/v4/entries/by-summoner/${summonerInfo.id}/?api_key=${process.env.NEXT_RIOT}`)
        .then((r) => r.json())
        .then((result) => {
            summonerLeague = result[0]
        })
    summonerInfo && await fetch(`https://asia.api.riotgames.com/lol/match/v5/matches/by-puuid/${summonerInfo.puuid}/ids?start=0&count=10&api_key=${process.env.NEXT_RIOT}`)
        .then((r) => r.json())
        .then((result) => {
            matchIDInfo = result
        }).then(
    )
    return (
        summonerInfo ?
            <div className={style.search_container}>
                <SearchBox></SearchBox>
                <div className={style.profile_wrapper}>
                    <img src={`https://ddragon.leagueoflegends.com/cdn/14.2.1/img/profileicon/${summonerInfo.profileIconId}.png`}></img>
                    <div>
                        <div >{summonerInfo.name}</div>
                        <div>level: {summonerInfo.summonerLevel}</div>
                        {
                            summonerLeague &&
                            <>
                                <div><span>{summonerLeague.tier}</span> <span>{summonerLeague.leaguePoints}점</span></div>
                                <div><span>{summonerLeague.wins + summonerLeague.losses}전</span> <span>{summonerLeague.wins}승</span> <span>{summonerLeague.losses}패</span></div>
                            </>
                        }
                    </div>
                </div>
                {
                    matchIDInfo.map((a, i) => {
                        return (
                            fetch(`https://asia.api.riotgames.com/lol/match/v5/matches/${a}?api_key=${process.env.NEXT_RIOT}`)
                                .then((r) => r.json())
                                .then((result) => {
                                    return (
                                        <MatchBox key={i} matchInfo={result} summonerInfo={summonerInfo}></MatchBox>
                                    )
                                })
                        )
                    })

                }
            </div>
            : <div></div>
    )
}