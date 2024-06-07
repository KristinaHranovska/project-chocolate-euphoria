import { Button } from 'shared/components';
import style from './TotalAndAdd.module.scss';

const TotalAndAdd = ({ quantity, price }) => {
  const totalPrice = quantity * price;

  return (
    <div className={style.totalPrice}>
      <h3 className={style.totalTitle}>
        Total Price:{' '}
        <span className={style.price}>{totalPrice.toFixed(2)} UAH</span>
      </h3>
      <Button title={'Add to Cart'} className={style.btnOrangeStyle} />
    </div>
  );
};

export default TotalAndAdd;
