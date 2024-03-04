import LogoutBtn from '../component/logoutBtn'
import style from './login.module.css'
export default function AlreadyLogged() {
    return (
        <div className={style.logged_container}>
            <div>
                <div>이미 로그인하셨습니다.</div>
                <div style={{ height: '30px' }}></div>
                <LogoutBtn></LogoutBtn>
            </div>
        </div>
    )
}