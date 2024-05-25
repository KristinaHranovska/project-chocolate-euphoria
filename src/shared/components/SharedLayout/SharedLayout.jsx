// import { Cart } from 'modules/cart';
import { Footer } from 'modules/footer';
import { Header } from 'modules/header';
import { ArrowUp } from '..';
import { useMediaQuery } from 'react-responsive';
import { Toaster } from 'react-hot-toast';

const SharedLayout = ({ children }) => {
  const isDesktop = useMediaQuery({ query: '(min-width: 1440px)' });
  return (
    <>
      <Header />
      {children}
      <Footer />
      {/* <Cart /> */}
      {isDesktop && <ArrowUp />}
      <Toaster position="top-right" reverseOrder={true} />
    </>
  );
};

export default SharedLayout;
