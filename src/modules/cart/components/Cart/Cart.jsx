// import style from './Cart.module.scss';

import EmptyCart from '../EmptyCart/EmptyCart';

const Cart = ({ closeCartModal }) => {
  return (
    <>
      <EmptyCart closeCartModal={closeCartModal} />
    </>
  );
};

export default Cart;
