import style from './NavList.module.scss';
const NavList = ({ className }) => {
  return (
    <>
      <ul className={className}>
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

export default NavList;
