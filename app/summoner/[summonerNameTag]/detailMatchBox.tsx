import style from '../summoner.module.css'

export default function DetailMatchBox(props: { matchData: match, spell: any, summonerAccountIds: summonerAccountIds }) {
    let matchData: match = props.matchData
    let blueTeam: participants[] = matchData.info.participants.slice(0, 5)
    let redTeam: participants[] = matchData.info.participants.slice(5, 10)
    let damageDealt: number[] = []
    let damageTaken: number[] = []
    blueTeam.map((summoner) => {
        damageDealt.push(summoner.totalDamageDealtToChampions)
        damageTaken.push(summoner.totalDamageTaken)
    })
    redTeam.map((summoner) => {
        damageDealt.push(summoner.totalDamageDealtToChampions)
        damageTaken.push(summoner.totalDamageTaken)
    })
    let maxDamageDealt = Math.max(...damageDealt)
    let maxDamageTaken = Math.max(...damageTaken)
    const perkImgUrl = 'https://ddragon.leagueoflegends.com/cdn/img/'

    return (
        <div className={style.match_detail_wrapper}>
            <div className={style.match_detail_team}>
                <div>{blueTeam[0].win == true ? '승리' : '패배'} (블루팀)</div>
                <TeamBox teamMembers={blueTeam} spell={props.spell} searchedSummonerId={props.summonerAccountIds.id} maxDamageDealt={maxDamageDealt} maxDamageTaken={maxDamageTaken}></TeamBox>
            </div>
            <div className={style.match_detail_team}>
                <div>{redTeam[0].win == true ? '승리' : '패배'} (레드팀)</div>
                <TeamBox teamMembers={redTeam} spell={props.spell} searchedSummonerId={props.summonerAccountIds.id} maxDamageDealt={maxDamageDealt} maxDamageTaken={maxDamageTaken}></TeamBox>
            </div>
        </div>
    )
}

function TeamBox(props: { teamMembers: participants[], spell: any, searchedSummonerId: string, maxDamageDealt: number, maxDamageTaken: number }) {
    return (
        <div>
            {
                props.teamMembers.map((summoner, i) => {
                    let itemKeys: number[] = [summoner.item0, summoner.item1, summoner.item2, summoner.item3, summoner.item4, summoner.item5, summoner.item6]
                    return (
                        <div key={i} className={style.match_detail_user_box}>
                            <div className={style.match_detail_user_img}>
                                <div>
                                    <img src={`https://ddragon.leagueoflegends.com/cdn/14.2.1/img/champion/${summoner.championName}.png`}></img>
                                    <div>{summoner.champLevel}</div>
                                </div>
                                <div>
                                    <img src={`https://ddragon.leagueoflegends.com/cdn/14.2.1/img/spell/${props.spell[summoner.summoner1Id]}.png`}></img>
                                    <img src={`https://ddragon.leagueoflegends.com/cdn/14.2.1/img/spell/${props.spell[summoner.summoner2Id]}.png`}></img>
                                </div>
                                <div>
                                    <div>{summoner.perks.styles[0].selections[0].perk}</div>
                                    <div>{summoner.perks.styles[1].style}</div>
                                </div>
                            </div>
                            <div className={style.match_detail_user_info}>
                                <div>
                                    {summoner.riotIdGameName
                                        ? <span>{summoner.riotIdGameName}</span>
                                        : <span>{summoner.summonerName}</span>
                                    }
                                </div>
                                <div>
                                    <div>{summoner.kills} / {summoner.deaths} / {summoner.assists}</div>
                                    <div>
                                        <span className=''>kda </span>
                                        {
                                            summoner.deaths == 0
                                                ? <span>perfect</span>
                                                : <span>
                                                    {(Math.round((summoner.kills + summoner.assists) / summoner.deaths)).toFixed(2)}
                                                </span>
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className={style.match_detail_user_cs}>
                                <div>CS</div>
                                <div>{summoner.totalMinionsKilled + summoner.neutralMinionsKilled}</div>
                            </div>
                            <div className={style.match_detail_user_damage}>
                                <div>
                                    <div>{summoner.totalDamageDealtToChampions}</div>
                                    <div className={style.match_user_damage_bar}>
                                        <div style={{ width: (summoner.totalDamageDealtToChampions / props.maxDamageDealt * 100).toFixed() + '%' }}></div>
                                    </div>
                                </div>
                                <div>
                                    <div>{summoner.totalDamageTaken}</div>
                                    <div className={style.match_user_damage_taken_bar}>
                                        <div style={{ width: (summoner.totalDamageTaken / props.maxDamageTaken * 100).toFixed() + '%' }}></div>
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