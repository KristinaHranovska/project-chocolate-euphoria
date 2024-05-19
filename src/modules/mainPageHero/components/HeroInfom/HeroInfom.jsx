import { Button } from 'shared/components';
import style from './HeroInfom.module.scss';
import { icons as sprite } from 'shared/icons';

const HeroInfom = () => {
  return (
    <div className={style.heroInform}>
      <h1>
        Treat yourself or a loved one to our finest ingredients for a moment of
        pure delight!
      </h1>
      <div className={style.heroBtn}>
        <Button title={'Buy now'} className={style.btnOrangeStyle} />
        <Button title={'How it’s made'} border={true} />
      </div>
      <div className={style.scrollStyle}>
        <p>scroll down</p>
        <Button className={style.btnArrowDown}>
          <svg className={style.iconHeroArrow}>
            <use xlinkHref={`${sprite}#arrow-down`} />
          </svg>
        </Button>
      </div>
    </div>
  );
};

export default HeroInfom;
