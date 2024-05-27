import { Logo } from 'shared/components';
import HeaderNav from '../HeaderNav/HeaderNav';
import { BasketButton } from 'shared/components';
import style from './Header.module.scss';
import { useMedia } from 'hooks/useMedia';

const Header = () => {
  const { isMobile } = useMedia();

  return (
    <header className={style.header} id="home">
      {isMobile && <Logo className={style.logo} />}
      <HeaderNav />
      <BasketButton />
    </header>
  );
};

export default Header;
