import SearchBox from './component/searchBox'
import BoardBox from './component/boardBox';
import style from './main.module.css'

export default function Home() {
  return (
    <main>
      <div className={style.main_container}>
        <div className={style.main_title}>
          Row
        </div>
        <SearchBox></SearchBox>
        <div style={{ height: '20px' }}></div>
        <BoardBox></BoardBox>
      </div>
    </main>
  );
}
