import HeroComponent from '../HeroComponent/HeroComponent';
import HeroSlide from '../HeroSlide/HeroSlide';

import style from './MainPageHero.module.scss';

const MainPageAbout = () => {
  return (
    <section className={style.heroSection}>
      <HeroSlide />
      <HeroComponent />
    </section>
  );
};

export default MainPageAbout;
