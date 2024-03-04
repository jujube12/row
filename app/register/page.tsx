import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { getServerSession } from 'next-auth'
import AlreadyLogged from '../login/alreayLogged'
import style from './register.module.css'
import CheckUserInfo from './checkUserInfo'
export default async function Register() {
    let session = await getServerSession(authOptions)
    return (
        session
            ? <AlreadyLogged></AlreadyLogged>
            : <div className={`${style.register_container} container`}>
                <div className={style.register_title}>
                    Row
                </div>
                <form action='/api/user/signup' method="POST">
                    <CheckUserInfo></CheckUserInfo>
                </form>
            </div>
    )
}
