// import { Cart } from 'modules/cart';
import { Footer } from 'modules/footer';
import { Header } from 'modules/header';
import { ArrowUp, Toastify } from '..';
import { useMediaQuery } from 'react-responsive';

const SharedLayout = ({ children }) => {
  const isDesktop = useMediaQuery({ query: '(min-width: 1440px)' });
  return (
    <>
      <Header />
      {children}
      <Footer />
      {/* <Cart /> */}
      {isDesktop && <ArrowUp />}
      <Toastify />
    </>
  );
};

export default SharedLayout;
