import style from './board.module.css'
export default function WriteBox() {
    return (

        <div className={style.write_container}>
            <form action='/api/board/post' method='POST'>
                <input name='posting'></input>
                <button type='submit'>post</button>
            </form>
        </div>
    )
}