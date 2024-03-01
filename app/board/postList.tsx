export const dynamic = 'force-dynamic'
import style from './board.module.css'
import { connectDB } from '@/util/database'
import { post } from './d'
import PostBox from './postBox'
export default async function PostList() {
    let db = (await connectDB).db('row')
    let postList: post[] = await db.collection<post>('post').find().sort({ _id: -1 }).toArray();
    return (
        <div className={style.post_container}>
            <div className={style.post_list_box}>
                {
                    postList.map((a, i) => {
                        let copy: any = { ...a }
                        copy._id = JSON.stringify(a._id)
                        return (
                            <PostBox post={copy} key={i} ></PostBox>
                        )
                    })
                }
            </div>
        </div >
    )
}