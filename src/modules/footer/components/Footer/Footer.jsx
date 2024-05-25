import { Container } from 'shared/components';
import style from './Footer.module.scss';
// import SocialIcons from '../SocialIcons/SocialIcons';
import FooterContent from '../FooterContent/FooterContent';

const Footer = () => {
  return (
    <footer className={style.footer}>
      <Container>
        <FooterContent />
        {/* <SocialIcons /> */}
      </Container>
    </footer>
  );
};

export default Footer;
