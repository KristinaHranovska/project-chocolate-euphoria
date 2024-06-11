import { useSelector } from 'react-redux';
import CustomScrollWrapper from 'shared/components/CustomScrollWrapper/CustomScrollWrapper';
import { scrollToElementById } from 'helpers/scrollToElementById';

import style from './OrderProducts.module.scss';
import { icons as sprite } from 'shared/icons';

const OrderProducts = ({ closeModal }) => {
  const products = useSelector((state) => state.cart.products);
  const totalPrice = products.reduce(
    (acc, item) => acc + parseFloat(item.product.price) * item.quantity,
    0
  );
  const handleBuyNowClick = () => {
    scrollToElementById('ourProducts');
  };
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

      <CustomScrollWrapper>
        <ul className={style.productCartList}>
          {products.map((item) => {
            const productTotalPrice =
              parseFloat(item.product.price) * item.quantity;
            return (
              <li className={style.productCartItem} key={item.product._id}>
                <div className={style.productCartStyle}>
                  <img
                    className={style.productCartPhoto}
                    src={item.product.photo}
                    alt={item.product.productName}
                  />
                  <div className={style.productCartInfo}>
                    <h3 className={style.productCartName}>
                      {item.product.productName}
                    </h3>
                    <div className={style.quantity}>
                      <p className={style.quantityValue}>{item.quantity}</p>
                    </div>

                    <p>Total: {productTotalPrice.toFixed(2)} UAH</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </CustomScrollWrapper>
      <p className={style.total}>Total Price: {totalPrice.toFixed(2)} UAH</p>
    </div>
  );
};

export default OrderProducts;
