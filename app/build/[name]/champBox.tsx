import style from '../build.module.css'
import { matchInfo } from '../d'
export default function ChampBox(props: { champName: string, champData: matchInfo | null }) {
    const champName: string = props.champName
    const champData: matchInfo | null = props.champData
    const matchCount = 500
    function roundingNumber(count: number | undefined, totalCount: number | undefined): string {
        if (count && totalCount) {
            let result = (count / totalCount * 100).toFixed(1)
            return result
        }
        return '0'
    }
    return (
        <div className={style.build_champ_profile}>
            <div>
                <img src={`https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/${champName}.png`}></img>
            </div>
            <div className={style.build_champ_profile_text}>
                <div>{champName}</div>
                <div>
                    <div>
                        <div>승률</div>
                        <div>{roundingNumber(champData?.winCount, champData?.pickCount)} %</div>
                    </div>
                    <div>
                        <div>픽률</div>
                        <div>{roundingNumber(champData?.pickCount, matchCount)} %</div>
                    </div>
                    <div>
                        <div>밴률</div>
                        <div>{roundingNumber(champData?.banCount, matchCount)} %</div>
                    </div>
                </div>
            </div>
        </div>
    )
}