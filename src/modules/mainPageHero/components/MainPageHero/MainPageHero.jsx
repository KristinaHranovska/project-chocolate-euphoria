import HeroInfom from '../HeroInfom/HeroInfom';
import HeroSlide from '../HeroSlide/HeroSlide';

import style from './MainPageHero.module.scss';

const MainPageAbout = () => {
  return (
    <section className={style.heroSection}>
      <HeroSlide />
      <HeroInfom />
    </section>
  );
};

export default MainPageAbout;
