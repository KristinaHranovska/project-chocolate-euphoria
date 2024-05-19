import { useMediaQuery } from 'react-responsive';

import { Logo } from 'shared/components';
import HeaderNav from '../HeaderNav/HeaderNav';
import { BasketButton } from 'shared/components';
import style from './Header.module.scss';

const Header = () => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1439px)' });

  return (
    <header className={style.header} id="home">
      {isTabletOrMobile && <Logo className={style.logo} />}
      <HeaderNav />
      <BasketButton />
    </header>
  );
};

export default Header;
