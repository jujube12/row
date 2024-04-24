import BoardBox from "./boardBox";
import ChampBox from "./champBox";
import style from './component.module.css'

export default function NavBox(props: { postList: string }) {
    return (
        <div className={style.nav_box_wrapper}>
            <ChampBox></ChampBox>
            <BoardBox postList={props.postList}></BoardBox>
        </div>
    )
}