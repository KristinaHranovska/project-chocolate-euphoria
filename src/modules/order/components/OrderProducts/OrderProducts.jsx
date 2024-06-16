import { useSelector } from 'react-redux';
import CustomScrollWrapper from 'shared/components/CustomScrollWrapper/CustomScrollWrapper';
import { scrollToElementById } from 'helpers/scrollToElementById';
import style from './OrderProducts.module.scss';
import { icons as sprite } from 'shared/icons';
import PromocodeForm from '../PromocodeForm/PromocodeForm';

const OrderProducts = ({
  closeModal,
  onApplyPromocode,
  totalPrice,
  discount,
}) => {
  const products = useSelector((state) => state.cart.products);

  const handleBuyNowClick = () => {
    scrollToElementById('ourProducts');
  };

  const handleApplyPromocode = (percent) => {
    onApplyPromocode(percent);
  };

  const discountTotal = (totalPrice * discount) / 100;

  return (
    <div>
      <button
        className={style.btnBackToBuy}
        type="button"
        onClick={() => {
          closeModal();
          handleBuyNowClick();
        }}
      >
        <svg className={style.backToBuy}>
          <use xlinkHref={`${sprite}#arrow-long-left`} />
        </svg>
        Return to shopping
      </button>

      <div className={style.yourOrder}>
        <h3 className={style.titleOrder}>Your order:</h3>
        <div className={style.thumbOrder}>
          <CustomScrollWrapper>
            <ul className={style.productCartList}>
              {products.map((item) => {
                const productTotalPrice =
                  parseFloat(item.product.price) * item.quantity;
                return (
                  <li className={style.productCartItem} key={item.product._id}>
                    <img
                      className={style.productCartPhoto}
                      src={item.product.photo}
                      alt={item.product.productName}
                    />
                    <div className={style.productOrderInfo}>
                      <h3 className={style.productOrder}>
                        {item.product.productName}
                      </h3>
                      <p className={style.productOrder}>x{item.quantity}</p>
                      <p className={style.totalOrderPrice}>
                        {productTotalPrice.toFixed(2)} UAH
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </CustomScrollWrapper>
        </div>

        <PromocodeForm onApplyPromocode={handleApplyPromocode} />

        <div className={style.totalBlock}>
          {discount !== 0 && (
            <div className={style.calculeteDiscount}>
              <p className={style.firstTotal}>{totalPrice.toFixed(2)} UAH</p>
              <p className={style.discount}>{discountTotal.toFixed(2)} UAH</p>
            </div>
          )}
          <p className={style.totalOrder}>
            Total Price{' '}
            <span>
              {discount !== 0
                ? (totalPrice - discountTotal).toFixed(2)
                : totalPrice.toFixed(2)}{' '}
              UAH
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderProducts;
