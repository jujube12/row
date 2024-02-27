import style from './board.module.css'
import { connectDB } from '@/util/database'
import { post } from './d'

export default async function PostList() {
    let db = (await connectDB).db('row')
    let postList: post[] = await db.collection<post>('post').find().sort({ _id: -1 }).toArray();
    return (
        <div className={style.post_container}>
            <div className={style.post_list_box}>
                {
                    postList.map((a, i) => {
                        return (
                            <div className={style.post_box} key={i}>
                                <div className={style.post_title}>{a.title}</div>
                                <div className={style.post_body}>{a.post}</div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}