import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { getServerSession } from 'next-auth'
import AlreadyLogged from '../login/alreayLogged'
export default async function Register() {
    let session = await getServerSession(authOptions)
    return (
        session
            ? <AlreadyLogged></AlreadyLogged>
            : <div>
                <form action='/api/user/signup' method="POST">
                    <input name='name'></input>
                    <input name='email'></input>
                    <input name='password'></input>
                    <button type='submit'>sign up</button>
                </form>
            </div>
    )
}
