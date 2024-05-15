import HeaderNav from '../HeaderNav/HeaderNav';
import { BasketButton, Logo } from 'shared/components';
import style from './Header.module.scss';

const Header = () => {
  return (
    <header className={style.header}>
      <Logo className={style.logo} />
      <HeaderNav />
      <BasketButton />
    </header>
  );
};

export default Header;
