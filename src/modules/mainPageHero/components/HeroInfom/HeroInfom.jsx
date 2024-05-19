import { useMediaQuery } from 'react-responsive';

import { Button } from 'shared/components';
import style from './HeroInfom.module.scss';
import HeroSocial from '../HeroSocial/HeroSocial';

const HeroInfom = () => {
  const isDesctop = useMediaQuery({ query: '(min-width: 1440px)' });
  return (
    <div className={style.heroInform}>
      {isDesctop && <HeroSocial />}
      <h1 className={style.heroMainTitle}>
        Treat yourself or a loved one to our finest ingredients for a moment of
        pure delight!
      </h1>
      <div className={style.heroBtn}>
        <Button title={'Buy now'} className={style.btnOrangeStyle} />
        <Button title={'How it’s made'} border={true} />
      </div>
    </div>
  );
};

export default HeroInfom;
