import style from '../summoner.module.css'

export default function DetailMatchBox(props: { matchInfo: match, spell: any, summonerAccountIds: summonerAccountIds }) {
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
    let maxDamage = Math.max(...damageTo)
    let maxTakenDamage = Math.max(...damageTake)
    return (
        <div className={style.match_detail_wrapper}>
            <div className={style.match_detail_team}>
                <div>{blueTeam[0].win == true ? '승리' : '패배'} (블루팀)</div>
                <TeamBox team={blueTeam} spell={props.spell} summonerid={props.summonerAccountIds.id} maxDamage={maxDamage} maxTakenDamage={maxTakenDamage}></TeamBox>
            </div>
            <div className={style.match_detail_team}>
                <div>{redTeam[0].win == true ? '승리' : '패배'} (레드팀)</div>
                <TeamBox team={redTeam} spell={props.spell} summonerid={props.summonerAccountIds.id} maxDamage={maxDamage} maxTakenDamage={maxTakenDamage}></TeamBox>
            </div>
        </div>
    )
}

function TeamBox(props: { team: participants[], spell: any, summonerid: string, maxDamage: number, maxTakenDamage: number }) {
    return (
        <div>
            {
                props.team.map((team, i) => {
                    let itemKeys: number[] = [team.item0, team.item1, team.item2, team.item3, team.item4, team.item5, team.item6]
                    return (
                        <div key={i} className={style.match_detail_user_box}>
                            <div className={style.match_detail_user_img}>
                                <img src={`https://ddragon.leagueoflegends.com/cdn/14.2.1/img/champion/${team.championName}.png`}></img>
                                <div>
                                    <img src={`https://ddragon.leagueoflegends.com/cdn/14.2.1/img/spell/${props.spell[team.summoner1Id as keyof typeof props.spell]}.png`}></img>
                                    <img src={`https://ddragon.leagueoflegends.com/cdn/14.2.1/img/spell/${props.spell[team.summoner2Id as keyof typeof props.spell]}.png`}></img>
                                </div>
                                <div>{team.champLevel}</div>
                            </div>
                            <div className={style.match_detail_user_info}>
                                <div>
                                    {team.riotIdGameName
                                        ? <span>{team.riotIdGameName}</span>
                                        : <span>{team.summonerName}</span>
                                    }
                                </div>
                                <div>
                                    <div>{team.kills} / {team.deaths} / {team.assists}</div>
                                    <div>
                                        <span className=''>kda </span>
                                        {
                                            team.deaths == 0
                                                ? <span>perfect</span>
                                                : <span>
                                                    {(Math.round((team.kills + team.assists) / team.deaths)).toFixed(2)}
                                                </span>
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className={style.match_detail_user_cs}>
                                <div>CS</div>
                                <div>{team.totalMinionsKilled + team.neutralMinionsKilled}</div>
                            </div>
                            <div className={style.match_detail_user_damage}>
                                <div>
                                    <div>{team.totalDamageDealtToChampions}</div>
                                    <div className={style.match_user_damage_bar}>
                                        <div style={{ width: (team.totalDamageDealtToChampions / props.maxDamage * 100).toFixed() + '%' }}></div>
                                    </div>
                                </div>
                                <div>
                                    <div>{team.totalDamageTaken}</div>
                                    <div className={style.match_user_damage_taken_bar}>
                                        <div style={{ width: (team.totalDamageDealtToChampions / props.maxTakenDamage * 100).toFixed() + '%' }}></div>
                                    </div>
                                </div>
                            </div>
                            <div className={style.match_detail_user_item}>
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