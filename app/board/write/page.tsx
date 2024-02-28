import style from '../board.module.css'
export default function Write() {
    return (
        <div className={style.write_container}>
            <form className={style.write_box} action='/api/board/post' method='POST'>
                <div className={style.write_title}>
                    <input name='title' placeholder='제목을 입력하세요'></input>
                </div>
                <div className={style.write_post}>
                    <textarea name='post' placeholder='글을 입력하세요'></textarea>
                </div>
                <button type='submit'>post</button>
            </form>
        </div>
    )
}