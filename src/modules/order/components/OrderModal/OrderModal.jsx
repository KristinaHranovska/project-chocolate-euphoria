import style from './OrderModal.module.scss';
import OrderProducts from '../OrderProducts/OrderProducts';
import OrderForm from '../OrderForm/OrderForm';
import CustomScrollWrapper from 'shared/components/CustomScrollWrapper/CustomScrollWrapper';

const OrderModal = ({ closeModal }) => {
  return (
    <CustomScrollWrapper>
      <div className={style.orderModal}>
        <h2 className={style.orderTitle}>Complete Your Order</h2>

        <div className={style.orderInformation}>
          <OrderProducts closeModal={closeModal} />
          <OrderForm closeModal={closeModal} />
        </div>
      </div>
    </CustomScrollWrapper>
  );
};

export default OrderModal;
