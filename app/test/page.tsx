import dataHandler from "./data"
import style from './test.module.css'

export default async function Test() {
    await dataHandler()

    return (
        <div className={style.test_container}>
            <div>test</div>
        </div>
    )
} 