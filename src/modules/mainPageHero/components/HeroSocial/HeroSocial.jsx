import { SocialMedia } from 'shared/components';
import style from './HeroSocial.module.scss';

const HeroSocial = () => {
  return (
    <div className={style.heroLineAndSocial}>
      <div className={style.heroLine}></div>
      <SocialMedia className={style.heroSocialLink} />
    </div>
  );
};

export default HeroSocial;
