import { useState, useEffect } from 'react';

import style from './HeroSlide.module.scss';
import imagesHero from 'modules/mainPageHero/helpers/imagesHero';

const HeroSlide = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [prevSlide, setPrevSlide] = useState(imagesHero.length - 1);

  useEffect(() => {
    const interval = setInterval(() => {
      setPrevSlide(currentSlide);
      setCurrentSlide((prevSlide) =>
        prevSlide === imagesHero.length - 1 ? 0 : prevSlide + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <>
      <ul className={style.hero}>
        {imagesHero.map((slide, index) => (
          <li
            key={index}
            className={`${style.sliderItem} ${index === currentSlide ? style.active : ''} ${index === prevSlide ? style.prev : ''}`}
          >
            <picture>
              <source
                media="(min-width: 1440px)"
                srcSet={`${slide.desktop1x} 1x, ${slide.desktop2x} 2x`}
              />
              <source
                media="(min-width: 768px)"
                srcSet={`${slide.tablet1x} 1x, ${slide.tablet2x} 2x`}
              />
              <source
                media="(max-width: 767.98px)"
                srcSet={`${slide.mobile1x} 1x, ${slide.mobile2x} 2x`}
              />
              <img
                src={slide.desktop1x}
                width="1880"
                height="950"
                alt=""
                className={`${style.imgCover}`}
              />
            </picture>
          </li>
        ))}
      </ul>
    </>
  );
};

export default HeroSlide;
