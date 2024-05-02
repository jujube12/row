export const dynamic = 'force-dynamic'
import style from './board.module.css'
import { connectDB } from '@/util/database'
import { post } from './d'
import PostBox from './postBox'
export default async function PostList() {
    let db = (await connectDB).db(process.env.NEXT_DB_NAME)
    let postList: post[] = await db.collection<post>('post').find().limit(9).sort({ _id: -1 }).toArray();
    return (
        <div className={style.post_wrapper}>
            {
                postList.map((a, i) => {
                    let copy: any = { ...a }
                    copy._id = JSON.stringify(a._id)
                    return (
                        <PostBox post={copy} key={i} ></PostBox>
                    )
                })
            }
        </div >
    )
}