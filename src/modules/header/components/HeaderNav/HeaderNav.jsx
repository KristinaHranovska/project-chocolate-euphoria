import { useState } from 'react';
import { Transition } from 'react-transition-group';

import { icons as sprite } from 'shared/icons';
import style from './HeaderNav.module.scss';

const HeaderNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className={style.thumbMenu} onClick={toggleMenu}>
        <svg className={style.mobileMenu}>
          <use xlinkHref={`${sprite}#burger-menu`} />
        </svg>
      </div>

      <Transition in={isMenuOpen} timeout={300}>
        {(state) => (
          <>
            {state === 'entered' && (
              <div className={style.backdrop} onClick={toggleMenu} />
            )}
            <div
              className={`${style.overlayMenu} ${
                state === 'entered' ? style.entered : ''
              }`}
            />
          </>
        )}
      </Transition>

      <ul className={style.navList}>
        <li>
          <a className={style.navListItem} href="">
            How it’s made?
          </a>
        </li>
        <li>
          <a className={style.navListItem} href="">
            Our products
          </a>
        </li>
        <li>
          <a className={style.navListItem} href="">
            Chocolate is loved
          </a>
        </li>
      </ul>
    </>
  );
};

export default HeaderNav;
