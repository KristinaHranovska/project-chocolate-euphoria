import { icons as sprite } from 'shared/icons';
import style from './BasketButton.module.scss';
import { useState } from 'react';
import { ModalWindow } from '..';
import { Cart } from 'modules/cart';

const BasketButton = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const openCartModal = () => {
    setIsCartOpen(true);
  };

  const closeCartModal = () => {
    setIsCartOpen(false);
  };

  return (
    <>
      <div className={style.iconThumb} onClick={openCartModal}>
        <svg className={style.basketCartIcon}>
          <use xlinkHref={`${sprite}#basket`} />
        </svg>
      </div>
      <ModalWindow
        isOpen={isCartOpen}
        onRequestClose={closeCartModal}
        title={'Your shopping cart'}
      >
        <Cart closeCartModal={closeCartModal} />
      </ModalWindow>
    </>
  );
};

export default BasketButton;
