'use client'
import style from './board.module.css'
import { post, propsPost } from './d'
import { useRouter } from 'next/navigation'
export default function PostBox(props: { post: propsPost }) {
    let router = useRouter()
    let post: post = { _id: JSON.parse(props.post._id), title: props.post.title, post: props.post.post }
    return (
        <div className={style.post_box} onClick={() => {
            router.push(`/board/detail/${post._id}`)
        }}>
            <div className={style.post_title}>{post.title}</div>
            <div className={style.post_body}>
                <div>
                    {post.post}
                </div>
            </div>
        </div>
    )
}