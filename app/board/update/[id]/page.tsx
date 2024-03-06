import { ObjectId } from "mongodb"
import { urlParam, post } from "../../d"
import { connectDB } from "@/util/database"
import style from '../../board.module.css'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { getServerSession } from 'next-auth'

export default async function Update(props: urlParam) {
    let session: any = await getServerSession(authOptions)
    let db = (await connectDB).db('row')
    let postDetail: post | null = await db.collection<post>('post').findOne({ _id: new ObjectId(props.params.id) })
    return (
        session?.user.name == postDetail?.name
            ? <div className={style.write_container}>
                <form className={style.write_box} action='/api/board/update' method='POST'>
                    <div className={style.write_title}>
                        <input name='title' defaultValue={postDetail?.title}></input>
                    </div>
                    <div className={style.write_post}>
                        <textarea name='post' defaultValue={postDetail?.post}></textarea>
                    </div>
                    <input style={{ display: 'none' }} name='_id' defaultValue={JSON.stringify(postDetail?._id)}></input>
                    <button type='submit'>수정</button>
                </form>
            </div>
            : <div>올바르지 않은 접근</div>
    )
}