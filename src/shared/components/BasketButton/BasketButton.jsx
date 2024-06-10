import { icons as sprite } from 'shared/icons';
import style from './BasketButton.module.scss';
import { ModalWindow } from '..';
import { Cart } from 'modules/cart';
import { useModal } from 'hooks/useModal';
import { useSelector } from 'react-redux';

const BasketButton = () => {
  const cartModal = useModal();
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <>
      <div className={style.iconThumb} onClick={cartModal.openModal}>
        <svg className={style.basketCartIcon}>
          <use xlinkHref={`${sprite}#basket`} />
        </svg>

        {totalQuantity > 0 && (
          <div className={style.totalQuantity}>{totalQuantity}</div>
        )}
      </div>

      <ModalWindow
        isOpen={cartModal.isOpen}
        onRequestClose={cartModal.closeModal}
        title={'Your shopping cart'}
      >
        <Cart closeCartModal={cartModal.closeModal} />
      </ModalWindow>
    </>
  );
};

export default BasketButton;
