import { Button } from 'shared/components';
import style from './OrderModal.module.scss';

const OrderModal = ({ closeModal }) => {
  return (
    <>
      <Button
        title={'Checkout'}
        className={style.btnOrangeStyle}
        onClick={() => closeModal()}
      />
    </>
  );
};

export default OrderModal;
