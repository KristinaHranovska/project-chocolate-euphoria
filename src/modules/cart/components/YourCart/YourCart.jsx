import { useSelector } from 'react-redux';

import ProductCart from '../ProductCart/ProductCart';
import { Button, ModalWindow } from 'shared/components';
import style from './YourCart.module.scss';
import { useModal } from 'hooks/useModal';
import OrderModal from 'modules/order/components/OrderModal/OrderModal';

const YourCart = ({ closeCartModal }) => {
  const orderModal = useModal(true);
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
        <Button
          title={'Checkout'}
          className={style.btnOrangeStyle}
          onClick={() => orderModal.openModal()}
        />
      </div>

      <ModalWindow
        isOpen={orderModal.isOpen}
        onRequestClose={orderModal.closeModal}
        type={'order'}
        shouldCloseOnOverlayClick={false}
      >
        <OrderModal closeModal={closeCartModal} />
      </ModalWindow>
    </div>
  );
};

export default YourCart;
