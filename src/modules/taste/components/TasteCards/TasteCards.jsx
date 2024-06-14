import tasteDescription from 'modules/taste/helpers/tasteDescription';
import style from './TasteCards.module.scss';
import { icons as sprite } from 'shared/icons';
import { useState } from 'react';

const TasteCards = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleOverlayClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };
  return (
    <>
      <ul className={style.tasteList}>
        {tasteDescription.map((taste, index) => (
          <li
            data-aos="flip-right"
            data-aos-easing="linear"
            data-aos-duration="1000"
            key={index}
            className={`${style.tasteItem} ${index % 2 === 0 ? style.odd : style.even}`}
          >
            <div className={style.thumbImage}>
              <img className={style.imgTaste} src={taste.image} alt="taste" />
              <div className={style.imgBlock}></div>
            </div>
            <div
              className={`${style.tasteBlock} ${index % 2 !== 0 && style.even}`}
            >
              <h3 className={style.tasteTitle}>{taste.title}</h3>
              <div className={style.thumbIconDote}>
                <svg className={style.doteIcon}>
                  <use xlinkHref={`${sprite}#dote`} />
                </svg>
              </div>
              <p className={style.textTaste}>{taste.text}</p>
              <div
                className={`${style.thumbIcon} ${style.onClickOverlay}`}
                onClick={() => handleOverlayClick(index)}
              >
                <svg className={style.arrowIcon}>
                  <use xlinkHref={`${sprite}#arrow-long-right`} />
                </svg>
              </div>
            </div>
            <div
              className={`${style.overlay} ${activeIndex === index ? style.activeOverlay : ''}`}
            >
              <p className={`${style.textTaste} ${style.resetMargin}`}>
                {taste.description}
              </p>
              <div
                className={`${style.thumbIcon} ${style.onClickOverlay}`}
                onClick={() => handleOverlayClick(index)}
              >
                <svg className={style.arrowIconLeft}>
                  <use xlinkHref={`${sprite}#arrow-long-left`} />
                </svg>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TasteCards;
