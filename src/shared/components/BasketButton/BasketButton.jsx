import { icons as sprite } from 'shared/icons';
import style from './BasketButton.module.scss';

const BasketButton = () => {
  return (
    <div className={style.iconThumb}>
      <svg className={style.basketCartIcon}>
        <use xlinkHref={`${sprite}#basket`} />
      </svg>
    </div>
  );
};

export default BasketButton;
