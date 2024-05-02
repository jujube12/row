import SummonerSearchBox from './component/summonerSearchBox'
import NavBox from './component/navBox';
import style from './main.module.css'

export default async function Home() {
  return (
    <main>
      <div className={style.main_container}>
        <div className={style.main_title}>
          Row
        </div>
        <SummonerSearchBox></SummonerSearchBox>
        <NavBox></NavBox>
      </div>
    </main>
  );
}
