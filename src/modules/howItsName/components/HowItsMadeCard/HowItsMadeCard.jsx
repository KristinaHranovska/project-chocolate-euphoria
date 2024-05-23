import {
  imagesTablet1x,
  imagesTablet2x,
  imagesDesktop1x,
  imagesDesktop2x,
} from 'shared/images';

import style from './HowItsMadeCard.module.scss';

const HowItsMadeCard = () => {
  return (
    <>
      <div className={style.madeContant}>
        <picture>
          <source
            media="(min-width: 1440px)"
            srcSet={`${imagesDesktop1x.chef} 1x, ${imagesDesktop2x.chef2x} 2x`}
          />
          <source
            media="(min-width: 375px)"
            srcSet={`${imagesTablet1x.chef} 1x, ${imagesTablet2x.chef2x} 2x`}
          />
          <img
            src={imagesDesktop1x.chef}
            alt=""
            className={`${style.imgMadeMain}`}
          />
        </picture>
        <div className={style.madeThumb}>
          <ul>
            <li className={style.madeItemElement}>
              <p className={style.madeText}>
                Heat the milk in a saucepan without bringing it to a boil. Add
                sugar and cocoa powder.
              </p>
            </li>
            <li className={style.madeItemElement}>
              <p className={style.madeText}>
                At the same time, prepare a water bath. Melt the butter on it.
              </p>
            </li>
            <li className={style.madeItemElement}>
              <p className={style.madeText}>
                Mix the milk mixture and already liquid butter. Mix thoroughly
                with a silicone spatula so that the mass becomes uniform and
                silky.
              </p>
            </li>
            <li className={style.madeItemElement}>
              <p className={style.madeText}>
                Heat the mixture over low heat, letting it barely boil.
              </p>
            </li>
            <li className={style.madeItemElement}>
              <p className={style.madeText}>
                Pour the chocolate into special containers (can be replaced with
                ice molds). Allow to cool and harden.
              </p>
            </li>
          </ul>
          <img
            className={style.madeLineImg}
            src={imagesDesktop2x.line2x}
            alt="line"
          />
        </div>
        <picture>
          <source
            media="(min-width: 1440px)"
            srcSet={`${imagesDesktop1x.shef} 1x, ${imagesDesktop2x.sheff2x} 2x`}
          />
          <img
            src={imagesDesktop1x.shef}
            alt=""
            className={`${style.imgMadeSecond}`}
          />
        </picture>
      </div>
    </>
  );
};

export default HowItsMadeCard;
