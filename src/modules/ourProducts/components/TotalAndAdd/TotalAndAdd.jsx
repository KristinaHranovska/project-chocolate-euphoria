import { useDispatch } from 'react-redux';

import { Button } from 'shared/components';
import style from './TotalAndAdd.module.scss';
import { addProductToCart } from '@redux/cart/cartSlice';

const TotalAndAdd = ({ quantity, price, product, close }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addProductToCart({ product, quantity }));
    close();
  };

  const totalPrice = quantity * price;

  return (
    <div className={style.totalPrice}>
      <h3 className={style.totalTitle}>
        Total Price:{' '}
        <span className={style.price}>{totalPrice.toFixed(2)} UAH</span>
      </h3>
      <Button
        title={'Add to Cart'}
        className={style.btnOrangeStyle}
        onClick={handleAddToCart}
      />
    </div>
  );
};

export default TotalAndAdd;
