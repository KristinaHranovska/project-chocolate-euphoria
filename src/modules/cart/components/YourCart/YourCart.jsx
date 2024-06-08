import { useSelector } from 'react-redux';

import ProductCart from '../ProductCart/ProductCart';
import { Button } from 'shared/components';
import style from './YourCart.module.scss';

const YourCart = () => {
  const products = useSelector((state) => state.cart.products);
  const totalPrice = products.reduce(
    (acc, item) => acc + parseFloat(item.product.price) * item.quantity,
    0
  );

  return (
    <div className={style.yourCart}>
      <ProductCart />

      <div className={style.totalInfoPrice}>
        <p className={style.total}>Total Price: {totalPrice.toFixed(2)} UAH</p>
        <Button title={'Checkout'} className={style.btnOrangeStyle} />
      </div>
    </div>
  );
};

export default YourCart;
