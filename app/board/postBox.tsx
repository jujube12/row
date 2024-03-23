'use client'
import style from './board.module.css'
import { propsPost } from './d'
import { useRouter } from 'next/navigation'
import { writeDate } from '../function/board'
export default function PostBox(props: { post: propsPost }) {
    let router = useRouter()
    let post = props.post
    let postDetail: string = ''
    if (post.post.length > 30) {
        postDetail = post.post.substr(0, 30) + '...'
    } else {
        postDetail = post.post
    }
    return (
        <div className={style.post_box} onClick={() => {
            router.push(`/board/detail/${JSON.parse(post._id)}`)
        }}>
            <div className={style.post_info}>
                <div>{post.title}</div>
                <div>{post.name}</div>
                <div>{writeDate(post.writeDate)}</div>
            </div>
        </div>
    )
}