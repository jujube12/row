export const dynamic = 'force-dynamic'
import style from './board.module.css'
import SearchBox from '../component/searchBox'
import PostList from './postList'
import PostWriteBtn from '../component/postWriteBtn'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { getServerSession } from 'next-auth'

export default async function Board() {
    let session = await getServerSession(authOptions)
    return (
        <div className={style.board_container}>
            <div style={{ margin: '20px' }}></div>
            <SearchBox></SearchBox>
            <div style={{ margin: '20px' }}></div>
            <PostWriteBtn session={session}></PostWriteBtn>
            <div style={{ margin: '10px' }}></div>
            <PostList></PostList>
        </div>
    )
}