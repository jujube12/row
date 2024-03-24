import { ObjectId } from "mongodb"
import { urlParam, post } from "../../d"
import { connectDB } from "@/util/database"
import style from '../../board.module.css'
import DeleteBtn from "../deleteBtn"
import EditBtn from "../editBtn"
import { unixDate } from "@/app/function/board"
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { getServerSession } from 'next-auth'
export default async function postDetail(props: urlParam) {
    let session: any = await getServerSession(authOptions)
    let db = (await connectDB).db('row')
    let postDetail: post | null = await db.collection<post>('post').findOne({ _id: new ObjectId(props.params.id) })
    return (
        <div className={style.detail_container}>
            <div className={style.detail_box}>
                <div className={style.detail_title}>
                    <div>{postDetail?.title}</div>
                    <div>
                        <div>작성자: {postDetail?.name}</div>
                        <div>작성일: {unixDate(postDetail?.writeDate, postDetail?.editDate)}</div>
                    </div>
                </div>
                <div className={style.detail_post}>{postDetail?.post}</div>
                {
                    session?.user.name == postDetail?.name
                        ? <div className={style.detail_edit_box}>
                            <DeleteBtn id={JSON.stringify(postDetail?._id)}></DeleteBtn>
                            <EditBtn id={JSON.stringify(postDetail?._id)}></EditBtn>
                        </div>
                        : <div></div>
                }
            </div>
        </div>
    )
}