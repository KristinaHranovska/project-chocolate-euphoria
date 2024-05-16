import { logo } from 'shared/images';
import style from './Logo.module.scss';

const Logo = () => {
  return (
    <a href="/" className={style.logo}>
      <img src={logo.logoOne} alt="logo" width="65" height="65" />
      <span>
        Chocolate <br />
        <span className={style.accentLogo}>Euphoria</span>
      </span>
    </a>
  );
};

export default Logo;
