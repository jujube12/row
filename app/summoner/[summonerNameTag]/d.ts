type summonerUrlParam = {
    params: {
        summonerNameTag: string
    },
    searchParams: object
}
type summonerRiotAccount = {
    puuid: string,
    gameName: string,
    tagLine: string
}
type summonerAccountIds = {
    id: string,
    accountId: string,
    puuid: string,
    profileIconId: number,
    revisionDate: number,
    summonerLevel: number
}
type summonerAccountProfle = {
    leagueId: string,
    queueType: string,
    tier: string,
    rank: string,
    summonerId: string,
    leaguePoints: number,
    wins: number,
    losses: number,
    veteran: boolean,
    inactive: boolean,
    freshBlood: boolean,
    hotStreak: boolean
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
        teams: team[],
        tournamentCode: string
    }
}
type team = {
    bans: [
        { championId: number, pickTurn: number },
        { championId: number, pickTurn: number },
        { championId: number, pickTurn: number },
        { championId: number, pickTurn: number },
        { championId: number, pickTurn: number }
    ],
    objectives: {
        baron: { first: boolean, kills: number },
        champion: { first: boolean, kills: number },
        dragon: { first: boolean, kills: number },
        horde: { first: boolean, kills: number },
        inhibitor: { first: boolean, kills: number },
        riftHerald: { first: boolean, kills: number },
        tower: { first: boolean, kills: number }
    },
    teamId: number,
    win: boolean
}

type perk = {
    statPerks: { defense: number, flex: number, offense: number },
    styles: {
        description: string,
        selections: { perk: number, var1: number, var2: number, var3: number }[]
        style: number,
    }[]
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
    firstBloodKill: boolean,
    firstTowerAssist: boolean,
    firstTowerKill: boolean,
    gameEndedInEarlySurrender: boolean,
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
    perks: perk,
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
    riotIdGameName: string,
    riotIdTagline: string,
    riotIdName: string,
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
    teamEarlySurrendered: boolean,
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

type perkJson = {
    id: string,
    key: string,
    icon: string,
    name: string,
    slots: {
        runes: {
            id: number,
            key: string,
            icon: string,
            name: string,
            longDesc: string,
            shortDesc: string
        }[]
    }[]
}