import clsx from 'clsx';
import { useState } from 'react';

import style from './NavList.module.scss';
import { scrollToElementById } from 'helpers/scrollToElementById';
import { useMedia } from 'hooks/useMedia';

const NavList = ({ className, children, listItemClass, closeMenu }) => {
  const { isTablet, isDesktop } = useMedia();
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
            className={clsx(style.navListItem, listItemClass, {
              [style.activeLink]: activeLink === 'home',
            })}
            onClick={() => handleLinkClick('home')}
          >
            Home
          </a>
        </li>
        <li>
          <a
            className={clsx(style.navListItem, listItemClass, {
              [style.activeLink]: activeLink === 'howItsMade',
            })}
            onClick={() => handleLinkClick('howItsMade')}
          >
            How it’s made?
          </a>
        </li>
        {(isTablet || isDesktop) && <li>{children}</li>}
        <li>
          <a
            className={clsx(style.navListItem, listItemClass, {
              [style.activeLink]: activeLink === 'ourProducts',
            })}
            onClick={() => handleLinkClick('ourProducts')}
          >
            Our products
          </a>
        </li>
        <li>
          <a
            className={clsx(style.navListItem, listItemClass, {
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
