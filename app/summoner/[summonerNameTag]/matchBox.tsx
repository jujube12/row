'use client'
import style from '../summoner.module.css'
import DetailMatchBox from './detailMatchBox'
import { kill, gameDate, duringTime } from '../../function/match'
import { useState } from 'react';
export default function MatchBox(props: { matchData: match, summonerAccountIds: summonerAccountIds, perkKeyAndImg: { [id: string]: string } }) {
    let spell = {
        21: 'SummonerBarrier',
        1: 'SummonerBoost',
        2202: 'SummonerCherryFlash',
        2201: 'SummonerCherryHold',
        14: 'SummonerDot',
        3: 'SummonerExhaust',
        4: 'SummonerFlash',
        6: 'SummonerHaste',
        7: 'SummonerHeal',
        13: 'SummonerMana',
        30: 'SummonerPoroRecall',
        31: 'SummonerPoroThrow',
        11: 'SummonerSmite',
        39: 'SummonerSnowURFSnowball_Mark',
        32: 'SummonerSnowball',
        12: 'SummonerTeleport',
        54: 'Summoner_UltBookPlaceholder',
        55: 'Summoner_UltBookSmitePlaceholder',
    }
    let matchData: match = props.matchData
    let searchedSummoner!: participants  // 검색한 소환사
    let blueTeam: { summonerName: string, champName: string }[] = []
    let redTeam: { summonerName: string, champName: string }[] = []
    // 킬관여율에 활용
    let blueKill: number = 0
    let redKill: number = 0
    let searchedSummonerTeam: string = ''
    for (let i = 0; i < 10; i++) {
        if (matchData.info.participants[i].summonerId == props.summonerAccountIds.id) {
            searchedSummoner = matchData.info.participants[i]
            if (i < 5) { searchedSummonerTeam = 'blue' }
            else { searchedSummonerTeam = 'red' }
        }
        let name: string;
        matchData.info.participants[i].riotIdGameName ? name = matchData.info.participants[i].riotIdGameName
            : name = matchData.info.participants[i].summonerName
        if (i < 5) {
            blueTeam.push({ summonerName: name, champName: matchData.info.participants[i].championName })
            blueKill += matchData.info.participants[i].kills
        } else {
            redTeam.push({ summonerName: name, champName: matchData.info.participants[i].championName })
            redKill += matchData.info.participants[i].kills
        }
    }
    let itemKeys: number[] = [searchedSummoner.item0, searchedSummoner.item1, searchedSummoner.item2, searchedSummoner.item3, searchedSummoner.item4, searchedSummoner.item5, searchedSummoner.item6]
    let gameResult: boolean = searchedSummoner.win
    let matchTakenTime: { min: number, sec: number } = duringTime(matchData.info.gameDuration)
    let [showDetail, setShowDetail] = useState(false)

    const perkImgUrl = 'https://ddragon.leagueoflegends.com/cdn/img/'
    return (
        <div className={style.match_wrapper}>
            <div>
                <div className={style.match_summury_wrapper} onClick={() => {
                    if (showDetail == false) { setShowDetail(true) }
                    else { setShowDetail(false) }
                }}>
                    {/* match result */}
                    <div className={style.match_summury_result}>
                        <div>{matchData.info.gameMode == 'CLASSIC' ? '솔랭' : matchData.info.gameMode == 'URF' ? 'U.R.F.' : '무작위\n총력전'}</div>
                        <div>{gameDate(matchData.info.gameStartTimestamp)}</div>
                        <div>
                            {gameResult == true ? '승리' : '패배'}
                        </div>
                        <div>{`${matchTakenTime.min}분 ${matchTakenTime.sec}초`}</div>
                    </div>
                    {/* match img */}
                    <div className={style.match_summury_img}>
                        <img src={`https://ddragon.leagueoflegends.com/cdn/14.2.1/img/champion/${searchedSummoner.championName}.png`}></img>
                        <div>{searchedSummoner.champLevel}</div>
                    </div>
                    {/* match summury */}
                    <div className={style.match_summury_info}>
                        <div className={style.match_summury_info_default}>
                            <div className={style.match_summury_mobile_img}>
                                <img src={`https://ddragon.leagueoflegends.com/cdn/14.2.1/img/champion/${searchedSummoner.championName}.png`}></img>
                                <div>{searchedSummoner.champLevel}</div>
                            </div>
                            <div className={style.match_summury_info_spell}>
                                <img src={`https://ddragon.leagueoflegends.com/cdn/14.2.1/img/spell/${spell[searchedSummoner.summoner1Id as keyof typeof spell]}.png`}></img>
                                <img src={`https://ddragon.leagueoflegends.com/cdn/14.2.1/img/spell/${spell[searchedSummoner.summoner2Id as keyof typeof spell]}.png`}></img>
                            </div>
                            <div className={style.match_summury_info_perk}>
                                <img src={perkImgUrl + props.perkKeyAndImg[searchedSummoner.perks.styles[0].selections[0].perk]}></img>
                                <img src={perkImgUrl + props.perkKeyAndImg[searchedSummoner.perks.styles[1].style]}></img>
                            </div>
                            <div className={style.match_summury_kda}>
                                <div>{searchedSummoner.kills} / {searchedSummoner.deaths} / {searchedSummoner.assists}</div>
                                <div>
                                    <span>kda </span>
                                    {
                                        searchedSummoner.deaths == 0
                                            ? <span>perfect</span>
                                            : <span>
                                                {(Math.round((searchedSummoner.kills + searchedSummoner.assists) / searchedSummoner.deaths)).toFixed(2)}
                                            </span>
                                    }
                                </div>
                            </div>
                            <div className={style.match_summury_extra}>
                                <div><span>킬관여</span> {searchedSummonerTeam == 'blue' ? kill(blueKill, searchedSummoner.kills + searchedSummoner.assists) : kill(redKill, searchedSummoner.kills + searchedSummoner.assists)}</div>
                                <div><span>CS</span> {searchedSummoner.neutralMinionsKilled + searchedSummoner.totalMinionsKilled}</div>
                            </div>
                        </div>
                        <div className={style.match_summury_info_item}>
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
                    <div className={style.match_align_box}></div>
                    {/* match parti */}
                    <div className={style.match_summury_parti}>
                        <div>
                            {
                                blueTeam.map((b, i) => {
                                    return (
                                        <div key={i}>
                                            <img src={`https://ddragon.leagueoflegends.com/cdn/14.2.1/img/champion/${b.champName}.png`}></img>
                                            <div>{b.summonerName}</div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div>
                            {
                                redTeam.map((b, i) => {
                                    return (
                                        <div key={i}>
                                            <img src={`https://ddragon.leagueoflegends.com/cdn/14.2.1/img/champion/${b.champName}.png`}></img>
                                            <div>{b.summonerName}</div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                {
                    showDetail == true ? <DetailMatchBox matchData={matchData} spell={spell} summonerAccountIds={props.summonerAccountIds} perkKeyAndImg={props.perkKeyAndImg}></DetailMatchBox> : <div></div>
                }
            </div>
        </div >
    )
}