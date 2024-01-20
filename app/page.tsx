import SearchBox from './component/searchBox';
import style from './main.module.css'
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className={style.main_container}>
        <div className={style.main_title}>
          ADAP
        </div>
        <SearchBox></SearchBox>
      </div>
    </main>
  );
}
