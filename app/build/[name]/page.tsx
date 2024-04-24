import style from '../build.module.css'
import { champUrlParam, matchInfo } from '../d'
import { connectDB } from '@/util/database'
import ChampBox from './champBox'
import PerkBox from './perkBox'
import SpellBox from './spellBox'
export default async function ChampBuild(props: champUrlParam) {
    const champName: string = props.params.name
    const db = (await connectDB).db(process.env.NEXT_DB_NAME)
    const champData = await db.collection<matchInfo>('matchInfo_14.7').findOne({ champName: champName })
    return (
        <div className={style.build_container}>
            <div className={style.bulid_wrapper}>
                <ChampBox champName={champName} champData={champData}></ChampBox>
                <PerkBox perkData={champData?.perkCount}></PerkBox>
                <SpellBox spellData={champData?.spellCount}></SpellBox>
                {/* <div className={style.build_champ_skills}>
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
                </div> */}
            </div>
        </div>
    )
}