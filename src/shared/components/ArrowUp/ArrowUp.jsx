import { useEffect, useState } from 'react';
import clsx from 'clsx';

import { icons as sprite } from 'shared/icons';
import style from './ArrowUp.module.scss';

const ArrowUp = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <>
      <div
        className={clsx(style.btnUp, { [style.show]: isVisible })}
        onClick={scrollToTop}
      >
        <svg className={style.iconArrowUp}>
          <use xlinkHref={`${sprite}#arrow-up`} />
        </svg>
      </div>
    </>
  );
};

export default ArrowUp;
