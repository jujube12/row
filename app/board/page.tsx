import style from './board.module.css'
import SearchBox from '../component/searchBox'
import WriteBox from './writeBox'
import PostList from './postList'

export default function Board() {
    return (
        <div className={style.board_container}>
            <div style={{ margin: '20px' }}></div>
            <SearchBox></SearchBox>
            <div style={{ margin: '20px' }}></div>
            <div>
                <WriteBox></WriteBox>
            </div>
            <PostList></PostList>
        </div>
    )
}