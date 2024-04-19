import style from '../build.module.css'
import { champUrlParam, matchInfo } from '../d'
import { connectDB } from '@/util/database'
export default async function ChampBuild(props: champUrlParam) {
    const champName: string = props.params.name
    const db = (await connectDB).db(process.env.NEXT_DB_NAME)
    const champData = await db.collection<matchInfo>('matchInfo_14.7').findOne({ champName: champName })

    return (
        <div className={style.build_container}>
            <div className={style.bulid_wrapper}>
                <div className={style.build_champ_profile}>
                    <div>
                        <img src={`https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/${champName}.png`}></img>
                    </div>
                    <div className={style.build_champ_profile_text}>
                        <div>{champName}</div>
                        <div>
                            <div>
                                <div>승률</div>
                                <div>{champData ? champData?.winCount / champData?.pickCount * 100 : ''} %</div>
                            </div>
                            <div>
                                <div>픽률</div>
                                <div>{champData?.pickCount && champData.pickCount / 5} %</div>
                            </div>
                            <div>
                                <div>밴률</div>
                                <div>{champData?.pickCount && champData.banCount / 5} %</div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className={style.build_nav_box}>nav</div> */}
                <div className={style.build_champ_perks}>
                    <div>
                        <div>main</div>
                        <div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <div>
                        <div>serve</div>
                        <div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                </div>
                <div className={style.build_champ_spells}>
                    <div>
                        <div>
                            <div></div>
                            <div></div>
                        </div>
                        <div>
                            <div>승률</div>
                            <div>00.0%</div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <div></div>
                            <div></div>
                        </div>
                        <div>
                            <div>승률</div>
                            <div>00.0%</div>
                        </div>
                    </div>
                </div>
                <div className={style.build_champ_skills}>
                    <div>
                        <div>
                            <div></div>
                            →
                            <div></div>
                            →
                            <div></div>
                        </div>
                        <div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <div>
                        <div>승률</div>
                        <div>00.0%</div>
                    </div>
                </div>
                <div className={style.build_champ_items}>
                    <div>
                        <div>
                            <div>
                                <div></div>
                                <div></div>
                            </div>
                            <div>
                                <div>승률</div>
                                <div>00.0%</div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <div></div>
                                <div></div>
                            </div>
                            <div>
                                <div>승률</div>
                                <div>00.0%</div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <div>
                                <div></div>
                            </div>
                            <div>
                                <div>승률</div>
                                <div>00.0%</div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <div></div>
                            </div>
                            <div>
                                <div>승률</div>
                                <div>00.0%</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.build_champ_counter}>
                    <div>
                        <div>
                            <div></div>
                            <div>00.0%</div>
                        </div>
                        <div>
                            <div></div>
                            <div>00.0%</div>
                        </div>
                        <div>
                            <div></div>
                            <div>00.0%</div>
                        </div>
                        <div>
                            <div></div>
                            <div>00.0%</div>
                        </div>
                        <div>
                            <div></div>
                            <div>00.0%</div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <div></div>
                            <div>00.0%</div>
                        </div>
                        <div>
                            <div></div>
                            <div>00.0%</div>
                        </div>
                        <div>
                            <div></div>
                            <div>00.0%</div>
                        </div>
                        <div>
                            <div></div>
                            <div>00.0%</div>
                        </div>
                        <div>
                            <div></div>
                            <div>00.0%</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}