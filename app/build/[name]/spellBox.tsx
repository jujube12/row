import style from '../build.module.css'
import { matchInfo } from '../d'

export default function SpellBox(props: { champData: matchInfo | null }) {
    return (
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
    )
}