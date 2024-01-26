import style from '../search.module.css'
import SearchBox from '@/app/component/searchBox'

type param = {
    params: {
        name: string
    },
    searchParams: object
}
type summoner = {
    id: string,
    accountId: string,
    puuid: string,
    name: string,
    profileIconId: number,
    revisionDate: number,
    summonerLevel: number
}
type match = {
    metadata: {
        dataVersion: string,
        matchId: string,
        participants: string[]
    },
    info: {
        gameCreation: number,
        gameDuration: number,
        gameEndTimestamp: number,
        gameId: number,
        gameMode: string,
        gameName: string,
        gameStartTimestamp: number,
        gameType: string,
        gameVersion: string,
        mapId: number,
        participants: participants[],
        platformId: string,
        queueId: number,
        teams: [Object][],
        tournamentCode: string
    }
}
type participants = {
    allInPings: number,
    assistMePings: number,
    assists: number,
    baitPings: number,
    baronKills: number,
    basicPings: number,
    bountyLevel: number,
    challenges: {
        '12AssistStreakCount': number,
        abilityUses: number,
        acesBefore15Minutes: number,
        alliedJungleMonsterKills: number,
        baronTakedowns: number,
        blastConeOppositeOpponentCount: number,
        bountyGold: number,
        buffsStolen: number,
        completeSupportQuestInTime: number,
        controlWardsPlaced: number,
        damagePerMinute: number,
        damageTakenOnTeamPercentage: number,
        dancedWithRiftHerald: number,
        deathsByEnemyChamps: number,
        dodgeSkillShotsSmallWindow: number,
        doubleAces: number,
        dragonTakedowns: number,
        earlyLaningPhaseGoldExpAdvantage: number,
        effectiveHealAndShielding: number,
        elderDragonKillsWithOpposingSoul: number,
        elderDragonMultikills: number,
        enemyChampionImmobilizations: number,
        enemyJungleMonsterKills: number,
        epicMonsterKillsNearEnemyJungler: number,
        epicMonsterKillsWithin30SecondsOfSpawn: number,
        epicMonsterSteals: number,
        epicMonsterStolenWithoutSmite: number,
        firstTurretKilled: number,
        firstTurretKilledTime: number,
        flawlessAces: number,
        fullTeamTakedown: number,
        gameLength: number,
        getTakedownsInAllLanesEarlyJungleAsLaner: number,
        goldPerMinute: number,
        hadOpenNexus: number,
        highestCrowdControlScore: number,
        immobilizeAndKillWithAlly: number,
        initialBuffCount: number,
        initialCrabCount: number,
        jungleCsBefore10Minutes: number,
        junglerTakedownsNearDamagedEpicMonster: number,
        kTurretsDestroyedBeforePlatesFall: number,
        kda: number,
        killAfterHiddenWithAlly: number,
        killParticipation: number,
        killedChampTookFullTeamDamageSurvived: number,
        killingSprees: number,
        killsNearEnemyTurret: number,
        killsOnOtherLanesEarlyJungleAsLaner: number,
        killsOnRecentlyHealedByAramPack: number,
        killsUnderOwnTurret: number,
        killsWithHelpFromEpicMonster: number,
        knockEnemyIntoTeamAndKill: number,
        landSkillShotsEarlyGame: number,
        laneMinionsFirst10Minutes: number,
        legendaryCount: number,
        lostAnInhibitor: number,
        maxCsAdvantageOnLaneOpponent: number,
        maxKillDeficit: number,
        maxLevelLeadLaneOpponent: number,
        mejaisFullStackInTime: number,
        moreEnemyJungleThanOpponent: number,
        multiKillOneSpell: number,
        multiTurretRiftHeraldCount: number,
        multikills: number,
        multikillsAfterAggressiveFlash: number,
        mythicItemUsed: number,
        outerTurretExecutesBefore10Minutes: number,
        outnumberedKills: number,
        outnumberedNexusKill: number,
        perfectDragonSoulsTaken: number,
        perfectGame: number,
        pickKillWithAlly: number,
        poroExplosions: number,
        quickCleanse: number,
        quickFirstTurret: number,
        quickSoloKills: number,
        riftHeraldTakedowns: number,
        saveAllyFromDeath: number,
        scuttleCrabKills: number,
        skillshotsDodged: number,
        skillshotsHit: number,
        snowballsHit: number,
        soloBaronKills: number,
        soloKills: number,
        stealthWardsPlaced: number,
        survivedSingleDigitHpCount: number,
        survivedThreeImmobilizesInFight: number,
        takedownOnFirstTurret: number,
        takedowns: number,
        takedownsAfterGainingLevelAdvantage: number,
        takedownsBeforeJungleMinionSpawn: number,
        takedownsFirstXMinutes: number,
        takedownsInAlcove: number,
        takedownsInEnemyFountain: number,
        teamBaronKills: number,
        teamDamagePercentage: number,
        teamElderDragonKills: number,
        teamRiftHeraldKills: number,
        tookLargeDamageSurvived: number,
        turretPlatesTaken: number,
        turretTakedowns: number,
        turretsTakenWithRiftHerald: number,
        twentyMinionsIn3SecondsCount: number,
        twoWardsOneSweeperCount: number,
        unseenRecalls: number,
        visionScoreAdvantageLaneOpponent: number,
        visionScorePerMinute: number,
        wardTakedowns: number,
        wardTakedownsBefore20M: number,
        wardsGuarded: number
    },
    champExperience: number,
    champLevel: number,
    championId: number,
    championName: string,
    championTransform: number,
    commandPings: number,
    consumablesPurchased: number,
    damageDealtToBuildings: number,
    damageDealtToObjectives: number,
    damageDealtToTurrets: number,
    damageSelfMitigated: number,
    dangerPings: number,
    deaths: number,
    detectorWardsPlaced: number,
    doubleKills: number,
    dragonKills: number,
    eligibleForProgression: true,
    enemyMissingPings: number,
    enemyVisionPings: number,
    firstBloodAssist: true,
    firstBloodKill: false,
    firstTowerAssist: false,
    firstTowerKill: false,
    gameEndedInEarlySurrender: false,
    gameEndedInSurrender: true,
    getBackPings: number,
    goldEarned: number,
    goldSpent: number,
    holdPings: number,
    individualPosition: string,
    inhibitorKills: number,
    inhibitorTakedowns: number,
    inhibitorsLost: number,
    item0: number,
    item1: number,
    item2: number,
    item3: number,
    item4: number,
    item5: number,
    item6: number,
    itemsPurchased: number,
    killingSprees: number,
    kills: number,
    lane: string,
    largestCriticalStrike: number,
    largestKillingSpree: number,
    largestMultiKill: number,
    longestTimeSpentLiving: number,
    magicDamageDealt: number,
    magicDamageDealtToChampions: number,
    magicDamageTaken: number,
    needVisionPings: number,
    neutralMinionsKilled: number,
    nexusKills: number,
    nexusLost: number,
    nexusTakedowns: number,
    objectivesStolen: number,
    objectivesStolenAssists: number,
    onMyWayPings: number,
    participantId: number,
    pentaKills: number,
    perks: {
        statPerks: { defense: number, flex: number, offense: number },
        styles: [Object][]
    },
    physicalDamageDealt: number,
    physicalDamageDealtToChampions: number,
    physicalDamageTaken: number,
    placement: number,
    playerAugment1: number,
    playerAugment2: number,
    playerAugment3: number,
    playerAugment4: number,
    playerSubteamId: number,
    profileIcon: number,
    pushPings: number,
    puuid: string,
    quadraKills: number,
    riotIdName: string,
    riotIdTagline: string,
    role: string,
    sightWardsBoughtInGame: number,
    spell1Casts: number,
    spell2Casts: number,
    spell3Casts: number,
    spell4Casts: number,
    subteamPlacement: number,
    summoner1Casts: number,
    summoner1Id: number,
    summoner2Casts: number,
    summoner2Id: number,
    summonerId: string,
    summonerLevel: number,
    summonerName: string,
    teamEarlySurrendered: false,
    teamId: number,
    teamPosition: string,
    timeCCingOthers: number,
    timePlayed: number,
    totalAllyJungleMinionsKilled: number,
    totalDamageDealt: number,
    totalDamageDealtToChampions: number,
    totalDamageShieldedOnTeammates: number,
    totalDamageTaken: number,
    totalEnemyJungleMinionsKilled: number,
    totalHeal: number,
    totalHealsOnTeammates: number,
    totalMinionsKilled: number,
    totalTimeCCDealt: number,
    totalTimeSpentDead: number,
    totalUnitsHealed: number,
    tripleKills: number,
    trueDamageDealt: number,
    trueDamageDealtToChampions: number,
    trueDamageTaken: number,
    turretKills: number,
    turretTakedowns: number,
    turretsLost: number,
    unrealKills: number,
    visionClearedPings: number,
    visionScore: number,
    visionWardsBoughtInGame: number,
    wardsKilled: number,
    wardsPlaced: number,
    win: boolean
}
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
                    matchInfo.map((a) => {
                        return (
                            <div className={style.match_box}>
                                <div>
                                    <div>{a.info.participants[0].summonerName}</div>
                                    <div>{a.info.participants[1].summonerName}</div>
                                    <div>{a.info.participants[2].summonerName}</div>
                                    <div>{a.info.participants[3].summonerName}</div>
                                    <div>{a.info.participants[4].summonerName}</div>
                                </div>
                                <div>
                                    <div>{a.info.participants[5].summonerName}</div>
                                    <div>{a.info.participants[6].summonerName}</div>
                                    <div>{a.info.participants[7].summonerName}</div>
                                    <div>{a.info.participants[8].summonerName}</div>
                                    <div>{a.info.participants[9].summonerName}</div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}