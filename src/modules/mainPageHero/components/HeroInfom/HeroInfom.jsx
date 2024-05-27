import { useMediaQuery } from 'react-responsive';

import { Button } from 'shared/components';
import style from './HeroInfom.module.scss';
import HeroSocial from '../HeroSocial/HeroSocial';
import { scrollToElementById } from 'helpers/scrollToElementById';

const HeroInfom = () => {
  const isDesctop = useMediaQuery({ query: '(min-width: 1440px)' });

  const handleBuyNowClick = () => {
    scrollToElementById('ourProducts');
  };

  const handleHowItsMadeClick = () => {
    scrollToElementById('howItsMade');
  };

  return (
    <div className={style.heroInform}>
      {isDesctop && <HeroSocial />}
      <h1 className={style.heroMainTitle}>
        Treat yourself or a loved one to our finest ingredients for a moment of
        pure delight!
      </h1>
      <div className={style.heroBtn}>
        <Button
          title={'Buy now'}
          className={style.btnOrangeStyle}
          onClick={handleBuyNowClick}
        />
        <Button
          title={'How it’s made'}
          border={true}
          onClick={handleHowItsMadeClick}
        />
      </div>
    </div>
  );
};

export default HeroInfom;
