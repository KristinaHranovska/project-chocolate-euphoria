import {
  increaseQuantity,
  decreaseQuantity,
  deleteProduct,
} from '@redux/cart/cartSlice';

import style from './ProductCart.module.scss';
import { icons as sprite } from 'shared/icons';
import { useDispatch, useSelector } from 'react-redux';
import CustomScrollWrapper from 'shared/components/CustomScrollWrapper/CustomScrollWrapper';

const ProductCart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.products);

  const handleIncrease = (productId) => {
    dispatch(increaseQuantity(productId));
  };

  const handleDecrease = (productId) => {
    dispatch(decreaseQuantity(productId));
  };

  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
  };

  return (
    <>
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
                      <button
                        className={style.quantityBtn}
                        type="button"
                        onClick={() => handleDecrease(item.product._id)}
                      >
                        <svg className={style.iconQuantity}>
                          <use xlinkHref={`${sprite}#minus`}></use>
                        </svg>
                      </button>
                      <span className={style.quantityValue}>
                        {item.quantity}
                      </span>
                      <button
                        className={style.quantityBtn}
                        type="button"
                        onClick={() => handleIncrease(item.product._id)}
                      >
                        <svg className={style.iconQuantity}>
                          <use xlinkHref={`${sprite}#plus`} />
                        </svg>
                      </button>
                    </div>
                    <p>Total: {productTotalPrice.toFixed(2)} UAH</p>
                  </div>
                  <button
                    type="button"
                    className={style.productCartCan}
                    onClick={() => handleDelete(item.product._id)}
                  >
                    <svg className={style.iconCan}>
                      <use xlinkHref={`${sprite}#can`}></use>
                    </svg>
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </CustomScrollWrapper>
    </>
  );
};

export default ProductCart;
