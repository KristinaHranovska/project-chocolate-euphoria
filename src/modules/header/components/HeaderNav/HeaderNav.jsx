import style from './HeaderNav.module.scss';

const HeaderNav = () => {
  return (
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
  );
};

export default HeaderNav;
