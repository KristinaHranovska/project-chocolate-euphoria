import { useMediaQuery } from 'react-responsive';
import clsx from 'clsx';
import { useEffect, useState } from 'react';

import { Logo } from 'shared/components';
import HeaderNav from '../HeaderNav/HeaderNav';
import { BasketButton } from 'shared/components';
import style from './Header.module.scss';

const Header = () => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1439px)' });
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={clsx(style.header, {
        [style.headerContainer]: isTabletOrMobile && scroll,
      })}
      id="home"
    >
      {isTabletOrMobile && <Logo className={style.logo} />}
      <HeaderNav />
      <BasketButton />
    </header>
  );
};

export default Header;
