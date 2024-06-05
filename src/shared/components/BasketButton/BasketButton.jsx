import { icons as sprite } from 'shared/icons';
import style from './BasketButton.module.scss';
import { ModalWindow } from '..';
import { Cart } from 'modules/cart';
import useModal from 'hooks/useModal';

const BasketButton = () => {
  const cartModal = useModal();

  const openCartModal = () => {
    cartModal.openModal();
  };

  return (
    <>
      <div className={style.iconThumb} onClick={openCartModal}>
        <svg className={style.basketCartIcon}>
          <use xlinkHref={`${sprite}#basket`} />
        </svg>
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
