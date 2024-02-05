import style from '../search.module.css'
import { matchDate, duringTime } from '@/app/function/timeCal'

export default function DetailMatchBox(props: { matchInfo: match, spell: any, summonerInfo: summoner }) {
    let match: match = props.matchInfo
    let blueTeam: participants[] = props.matchInfo.info.participants.slice(0, 5)
    let redTeam: participants[] = props.matchInfo.info.participants.slice(5, 10)
    let damageTo: number[] = []
    let damageTake: number[] = []
    blueTeam.map((a) => {
        damageTo.push(a.totalDamageDealtToChampions)
        damageTake.push(a.totalDamageTaken)
    })
    redTeam.map((a) => {
        damageTo.push(a.totalDamageDealtToChampions)
        damageTake.push(a.totalDamageTaken)
    })
    let date = matchDate(match.info.gameEndTimestamp)
    let matchTime: { min: number, sec: number } = duringTime(match.info.gameDuration)
    let damageToMax = Math.max(...damageTo)
    let damageTakeMax = Math.max(...damageTake)
    return (
        <div className={style.match_box}>
            <div>
                <div>{`${date.month}월 ${date.day}일 ${date.hours}시 ${date.minutes}분`}</div>
                <div>{`${matchTime.min}분 ${matchTime.sec}초`}</div>
            </div>
            <div>
                <div>{blueTeam[0].win == true ? 'victory' : 'defeat'} (블루팀)</div>
                <div>{redTeam[0].win == true ? 'victory' : 'defeat'} (레드팀)</div>
            </div>
            <div>
                <TeamBox team={blueTeam} spell={props.spell} summonerid={props.summonerInfo.id}></TeamBox>
                <TeamBox team={redTeam} spell={props.spell} summonerid={props.summonerInfo.id}></TeamBox>
            </div>
        </div>
    )
}

function TeamBox(props: { team: participants[], spell: any, summonerid: string }) {
    return (
        <div className={style.match_box_team}>
            {
                props.team.map((team, i) => {
                    let itemKeys: number[] = []
                    itemKeys.push(team.item0)
                    itemKeys.push(team.item1)
                    itemKeys.push(team.item2)
                    itemKeys.push(team.item3)
                    itemKeys.push(team.item4)
                    itemKeys.push(team.item5)
                    itemKeys.push(team.item6)
                    return (
                        <div key={i} className={props.summonerid == team.summonerId ? `${style.match_user_box} bg_gray` : style.match_user_box}>
                            <div className={style.match_user_img}>
                                <img src={`https://ddragon.leagueoflegends.com/cdn/14.2.1/img/champion/${team.championName}.png`}></img>
                                <div>
                                    <img src={`https://ddragon.leagueoflegends.com/cdn/14.2.1/img/spell/${props.spell[team.summoner1Id as keyof typeof props.spell]}.png`}></img>
                                    <img src={`https://ddragon.leagueoflegends.com/cdn/14.2.1/img/spell/${props.spell[team.summoner2Id as keyof typeof props.spell]}.png`}></img>
                                </div>
                                <div>{team.champLevel}</div>
                            </div>
                            <div className={style.match_user_info}>
                                {team.summonerName == ''
                                    ? <div>{team.riotIdGameName}</div>
                                    : <div>{team.summonerName}</div>
                                }
                                <div>{team.kills} / {team.deaths} / {team.assists}</div>
                                <div>
                                    <span>kda </span>
                                    {
                                        team.deaths == 0
                                            ? <span>perfect</span>
                                            : <span>
                                                {(Math.round((team.kills + team.assists) / team.deaths)).toFixed(2)}
                                            </span>
                                    }
                                </div>
                            </div>
                            <div className={style.match_user_cs}>
                                <div>CS</div>
                                <div>{team.totalMinionsKilled}</div>
                            </div>
                            <div className={style.match_user_damage}>
                                <div>{team.totalDamageDealtToChampions}</div>
                                <div>{team.totalDamageTaken}</div>
                            </div>
                            <div className={style.match_user_item}>
                                {
                                    itemKeys.map((a, i) => {
                                        return (
                                            a != 0
                                                ? <img key={i} src={`https://ddragon.leagueoflegends.com/cdn/14.2.1/img/item/${a}.png`}></img>
                                                : <p key={i}></p>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}