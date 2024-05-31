import style from './EmptyCart.module.scss';

import { scrollToElementById } from 'helpers/scrollToElementById';
import { Button } from 'shared/components';

const EmptyCart = ({ closeCartModal }) => {
  const handleBuyNowClick = () => {
    scrollToElementById('ourProducts');
    closeCartModal();
  };

  return (
    <>
      <div className={style.imgCart}></div>
      <div className={style.wrapperInform}>
        <h3 className={style.cartTitle}>The basket is empty</h3>
        <p className={style.cartDescription}>
          See our catalog and choose delicious chocolate
        </p>
        <span className={style.cartLine}></span>
        <Button
          title={'Buy now'}
          className={style.btnOrangeStyle}
          onClick={handleBuyNowClick}
        />
      </div>
    </>
  );
};

export default EmptyCart;
