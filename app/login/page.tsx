import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { getServerSession } from 'next-auth'
import NotYetLogged from './notYetLogged'
import AlreadyLogged from './alreayLogged'

export default async function Login() {
    let session = await getServerSession(authOptions)
    return (
        session
            ? <AlreadyLogged></AlreadyLogged>
            : <NotYetLogged></NotYetLogged>
    )
}