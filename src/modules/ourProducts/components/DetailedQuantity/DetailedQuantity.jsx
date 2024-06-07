import { icons as sprite } from 'shared/icons';
import style from './DetailedQuantity.module.scss';

const DetailedQuantity = ({ quantity, setQuantity }) => {
  const handleIncrease = () => setQuantity(quantity + 1);
  const handleDecrease = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  return (
    <div className={style.quantity}>
      <h3 className={style.quantityTitle}>Quantity</h3>
      <button
        className={style.quantityBtn}
        type="button"
        onClick={handleDecrease}
      >
        <svg className={style.iconQuantity}>
          <use xlinkHref={`${sprite}#minus`}></use>
        </svg>
      </button>
      <span className={style.quantityValue}>{quantity}</span>
      <button
        className={style.quantityBtn}
        type="button"
        onClick={handleIncrease}
      >
        <svg className={style.iconQuantity}>
          <use xlinkHref={`${sprite}#plus`} />
        </svg>
      </button>
    </div>
  );
};

export default DetailedQuantity;
