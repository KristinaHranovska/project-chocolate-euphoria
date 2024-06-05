import { BasketButton, Button } from 'shared/components';
import style from './TotalAndAdd.module.scss';

const TotalAndAdd = ({ quantity, price }) => {
  const totalPrice = quantity * price;

  return (
    <>
      <h3>Total Price: {totalPrice.toFixed(2)} UAH</h3>
      <BasketButton />
      <Button title={'Add to Cart'} className={style.btnOrangeStyle} />
    </>
  );
};

export default TotalAndAdd;
