import SearchBox from './component/searchBox'
import style from './main.module.css'

export default function Home() {
  return (
    <main>
      <div className={style.main_container}>
        <div className={style.main_title}>
          Row
        </div>
        <SearchBox></SearchBox>
      </div>
    </main>
  );
}
