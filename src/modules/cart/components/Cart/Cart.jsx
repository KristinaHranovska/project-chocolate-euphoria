import EmptyCart from '../EmptyCart/EmptyCart';
import { useSelector } from 'react-redux';
import YourCart from '../YourCart/YourCart';

const Cart = ({ closeCartModal, isOpen }) => {
  const products = useSelector((state) => state.cart.products);

  return (
    <>
      {products.length > 0 ? (
        <YourCart closeCartModal={closeCartModal} isOpen={isOpen} />
      ) : (
        <EmptyCart closeCartModal={closeCartModal} />
      )}
    </>
  );
};

export default Cart;
