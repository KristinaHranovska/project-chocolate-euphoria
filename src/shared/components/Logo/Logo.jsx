import style from './Logo.module.scss';

import { icons as sprite } from 'shared/icons';

const Logo = () => {
  return (
    <a href="/" className={style.logo}>
      <svg className={style.iconLogo} role="img">
        <use xlinkHref={`${sprite}#logo`} />
      </svg>
      <span>
        Chocolate <br />
        <span className={style.accentLogo}>Euphoria</span>
      </span>
    </a>
  );
};

export default Logo;
