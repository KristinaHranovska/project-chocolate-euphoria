import { Button } from 'shared/components';
import style from './OrderModal.module.scss';
import OrderUserForm from '../OrderUserForm/OrderUserForm';
import OrderAdressForm from '../OrderAdressForm/OrderAdressForm';
import OrderProducts from '../OrderProducts/OrderProducts';

const OrderModal = ({ closeModal }) => {
  return (
    <>
      <OrderUserForm />
      <OrderAdressForm />
      <OrderProducts />

      <Button
        title={'Checkout'}
        className={style.btnOrangeStyle}
        onClick={() => closeModal()}
      />
    </>
  );
};

export default OrderModal;
