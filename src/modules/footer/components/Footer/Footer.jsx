import { Container } from 'shared/components';
import style from './Footer.module.scss';
import FooterContent from '../FooterContent/FooterContent';
import FooterNavLink from '../FooterNavLink/FooterNavLink';

const Footer = () => {
  return (
    <footer className={style.footer}>
      <Container>
        <FooterContent />
        <FooterNavLink />
      </Container>
    </footer>
  );
};

export default Footer;
