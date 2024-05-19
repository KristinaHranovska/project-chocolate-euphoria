import HeroComponent from '../HeroComponent/HeroComponent';
import HeroInfom from '../HeroInfom/HeroInfom';
import HeroSlide from '../HeroSlide/HeroSlide';

import style from './MainPageHero.module.scss';

const MainPageAbout = () => {
  return (
    <section className={style.heroSection}>
      <HeroSlide />
      <HeroComponent />
      <HeroInfom />
    </section>
  );
};

export default MainPageAbout;
