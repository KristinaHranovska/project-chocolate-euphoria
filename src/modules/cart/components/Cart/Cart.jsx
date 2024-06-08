// import style from './Cart.module.scss';

import EmptyCart from '../EmptyCart/EmptyCart';
import { useSelector } from 'react-redux';
import YourCart from '../YourCart/YourCart';

const Cart = ({ closeCartModal }) => {
  const products = useSelector((state) => state.cart.products);

  return (
    <>
      {products.length > 0 ? (
        <YourCart products={products} closeCartModal={closeCartModal} />
      ) : (
        <EmptyCart closeCartModal={closeCartModal} />
      )}
    </>
  );
};

export default Cart;
