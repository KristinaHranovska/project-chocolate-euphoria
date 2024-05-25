import NavList from 'modules/header/components/NavList/NavList';
import style from './FooterNavLink.module.scss';
import { Logo, SocialMedia } from 'shared/components';

const FooterNavLink = () => {
  return (
    <div className={style.footerLinkThumb}>
      <NavList
        className={style.footerList}
        listItemClass={style.footerListItem}
      />
      <div className={style.footerThumb}>
        <Logo />
        <SocialMedia className={style.footerSocialLink} />
      </div>
    </div>
  );
};

export default FooterNavLink;
