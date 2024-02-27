export default function Register() {
    return (
        <div>
            <form action='/api/user/signup' method="POST">
                <input name='email'></input>
                <input name='password'></input>
                <button type='submit'>sign up</button>
            </form>
        </div>
    )
}