import { useState } from 'react';
import style from './OrderModal.module.scss';
import OrderProducts from '../OrderProducts/OrderProducts';
import OrderForm from '../OrderForm/OrderForm';
import CustomScrollWrapper from 'shared/components/CustomScrollWrapper/CustomScrollWrapper';
import { useSelector } from 'react-redux';

const OrderModal = ({ closeModal }) => {
  const [discount, setDiscount] = useState(0);
  const products = useSelector((state) => state.cart.products);

  const totalPrice = products.reduce(
    (acc, item) => acc + parseFloat(item.product.price) * item.quantity,
    0
  );

  const handleApplyPromocode = (percent) => {
    setDiscount(percent);
  };

  const discountedPrice =
    discount > 0 ? totalPrice * (1 - discount / 100) : totalPrice;

  return (
    <CustomScrollWrapper>
      <div className={style.orderModal}>
        <h2 className={style.orderTitle}>Complete Your Order</h2>

        <div className={style.orderInformation}>
          <OrderProducts
            closeModal={closeModal}
            onApplyPromocode={handleApplyPromocode}
            totalPrice={totalPrice}
            discount={discount}
          />
          <OrderForm
            closeModal={closeModal}
            discount={discount}
            discountedPrice={discountedPrice}
          />
        </div>
      </div>
    </CustomScrollWrapper>
  );
};

export default OrderModal;
