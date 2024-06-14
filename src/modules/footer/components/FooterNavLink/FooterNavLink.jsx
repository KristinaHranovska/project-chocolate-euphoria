import NavList from 'modules/header/components/NavList/NavList';
import style from './FooterNavLink.module.scss';
import { Logo, SocialMedia } from 'shared/components';

const FooterNavLink = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      data-aos-duration="2000"
      className={style.footerLinkThumb}
    >
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
