import style from './OrderModal.module.scss';

import OrderProducts from '../OrderProducts/OrderProducts';
import OrderForm from '../OrderForm/OrderForm';

const OrderModal = ({ closeModal }) => {
  return (
    <div className={style.orderModal}>
      <h2 className={style.orderTitle}>Complete Your Order</h2>

      <div className={style.orderInformation}>
        <OrderForm closeModal={closeModal} />
        <OrderProducts closeModal={closeModal} />
      </div>
    </div>
  );
};

export default OrderModal;
