import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { getServerSession } from 'next-auth'
import AlreadyLogged from '../login/alreayLogged'
import style from './register.module.css'
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
                    <input name='name' placeholder='name'></input>
                    <input name='email' placeholder='email'></input>
                    <input name='password' placeholder='password'></input>
                    <button type='submit'>sign up</button>
                </form>
            </div>
    )
}
