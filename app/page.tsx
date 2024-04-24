import SearchBox from './component/searchBox'
import NavBox from './component/navBox';
import { connectDB } from '@/util/database';
import style from './main.module.css'

export default async function Home() {
  let db = (await connectDB).db(process.env.NEXT_DB_NAME)
  let postList = await db.collection('post').find().sort({ _id: -1 }).limit(5).toArray()
  return (
    <main>
      <div className={style.main_container}>
        <div className={style.main_title}>
          Row
        </div>
        <SearchBox></SearchBox>
        <NavBox postList={JSON.stringify(postList)}></NavBox>
      </div>
    </main>
  );
}
