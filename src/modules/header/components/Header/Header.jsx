import { useMediaQuery } from 'react-responsive';

import { Logo } from 'shared/components';
import HeaderNav from '../HeaderNav/HeaderNav';
import { BasketButton } from 'shared/components';
import style from './Header.module.scss';

const Header = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 375px)' });

  return (
    <header className={style.header} id="home">
      {isMobile && <Logo className={style.logo} />}
      <HeaderNav />
      <BasketButton />
    </header>
  );
};

export default Header;
