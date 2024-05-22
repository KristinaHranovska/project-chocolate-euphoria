import clsx from 'clsx';
import { useState } from 'react';

import { useMediaQuery } from 'react-responsive';
import style from './NavList.module.scss';
import { scrollToElementById } from 'helpers/scrollToElementById';

const NavList = ({ className, children, closeMenu }) => {
  const isDesctopOrTablet = useMediaQuery({ query: '(min-width: 768px)' });
  const [activeLink, setActiveLink] = useState('home');

  const handleLinkClick = (id) => {
    setActiveLink(id);
    scrollToElementById(id);
    if (typeof closeMenu === 'function') {
      closeMenu();
    }
  };

  return (
    <>
      <ul className={className}>
        <li>
          <a
            className={clsx(style.navListItem, {
              [style.activeLink]: activeLink === 'home',
            })}
            onClick={() => handleLinkClick('home')}
          >
            Home
          </a>
        </li>
        <li>
          <a
            className={clsx(style.navListItem, {
              [style.activeLink]: activeLink === 'howItsMade',
            })}
            onClick={() => handleLinkClick('howItsMade')}
          >
            How it’s made?
          </a>
        </li>
        {isDesctopOrTablet && <li>{children}</li>}
        <li>
          <a
            className={clsx(style.navListItem, {
              [style.activeLink]: activeLink === 'ourProducts',
            })}
            onClick={() => handleLinkClick('ourProducts')}
          >
            Our products
          </a>
        </li>
        <li>
          <a
            className={clsx(style.navListItem, {
              [style.activeLink]: activeLink === 'chocolateIsLoved',
            })}
            onClick={() => handleLinkClick('chocolateIsLoved')}
          >
            Chocolate is loved
          </a>
        </li>
      </ul>
    </>
  );
};

export default NavList;
