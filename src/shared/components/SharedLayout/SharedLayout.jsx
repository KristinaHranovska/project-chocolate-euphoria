import { Footer } from 'modules/footer';
import { Header } from 'modules/header';
import { ArrowUp } from '..';
import { useMediaQuery } from 'react-responsive';
import style from './SharedLayout.module.scss';
import { Toaster } from 'react-hot-toast';

const SharedLayout = ({ children }) => {
  const isDesktop = useMediaQuery({ query: '(min-width: 1440px)' });
  return (
    <div className={style.oveflow}>
      <Header />
      {children}
      <Footer />
      {isDesktop && <ArrowUp />}
      <Toaster position="top-right" reverseOrder={true} />
    </div>
  );
};

export default SharedLayout;
