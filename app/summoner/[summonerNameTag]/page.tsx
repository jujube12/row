import style from '../summoner.module.css'
import SearchBox from '@/app/component/summonerSearchBox'
import MatchBox from './matchBox'
import Error from '../../error'
import NotFound from './notFound'

export default async function Search(props: summonerUrlParam) {
    const summonerNameTag: string[] = props.params.summonerNameTag.split('-')
    let summonerAccount!: summonerRiotAccount
    let summonerAccountIds!: summonerAccountIds
    let summonerAccountProfle!: summonerAccountProfle
    let summonerMatchList!: string[]
    await fetch(`https://asia.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${summonerNameTag[0]}/${summonerNameTag[1]}?api_key=${process.env.NEXT_RIOT}`)
        .then((r) => r.json())
        .then((result) => {
            if (result.status != undefined) {
            } else {
                summonerAccount = result
            }
        })
    summonerAccount && await fetch(`https://asia.api.riotgames.com/lol/match/v5/matches/by-puuid/${summonerAccount.puuid}/ids?start=0&count=20&api_key=${process.env.NEXT_RIOT}`)
        .then((r) => r.json())
        .then((result) => {
            summonerMatchList = result
        })

    summonerAccount && await fetch(`https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-puuid/${summonerAccount.puuid}?api_key=${process.env.NEXT_RIOT}`)
        .then((r) => r.json())
        .then((result) => {
            summonerAccountIds = result
        })

    summonerAccountIds && await fetch(`https://kr.api.riotgames.com/lol/league/v4/entries/by-summoner/${summonerAccountIds.id}?api_key=${process.env.NEXT_RIOT}`)
        .then((r) => r.json())
        .then((result) => {
            summonerAccountProfle = result
        })


    return (
        summonerAccount ?
            <div className={style.summoner_container}>
                <SearchBox></SearchBox>
                <div className={style.summoner_profile_wrapper}>
                    <img src={`https://ddragon.leagueoflegends.com/cdn/14.2.1/img/profileicon/${summonerAccountIds.profileIconId}.png`}></img>
                    <div>
                        <div >{summonerAccount.gameName} #{summonerAccount.tagLine}</div>
                        <div>level: {summonerAccountIds.summonerLevel}</div>
                        {
                            summonerAccountProfle &&
                            <>
                                <div><span>{summonerAccountProfle.tier}</span> <span>{summonerAccountProfle.leaguePoints}점</span></div>
                                <div><span>{summonerAccountProfle.wins + summonerAccountProfle.losses}전</span> <span>{summonerAccountProfle.wins}승</span> <span>{summonerAccountProfle.losses}패</span></div>
                            </>
                        }
                    </div>
                </div>
                {
                    summonerMatchList.map((summonerMatchId, i) => {
                        return (
                            fetch(`https://asia.api.riotgames.com/lol/match/v5/matches/${summonerMatchId}?api_key=${process.env.NEXT_RIOT}`)
                                .then((r) => r.json())
                                .then((result) => {
                                    return (
                                        <MatchBox key={i} matchInfo={result} summonerAccountIds={summonerAccountIds}></MatchBox>
                                    )
                                })
                        )
                    })

                }
            </div>
            : <NotFound></NotFound>
    )
}