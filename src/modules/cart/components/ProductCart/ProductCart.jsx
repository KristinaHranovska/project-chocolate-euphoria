import {
  increaseQuantity,
  decreaseQuantity,
  deleteProduct,
} from '@redux/cart/cartSlice';

import style from './ProductCart.module.scss';
import { icons as sprite } from 'shared/icons';
import { useDispatch, useSelector } from 'react-redux';

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
              <div className={style.productCartInfo}>
                <p>{item.product.productName}</p>
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
                  <span className={style.quantityValue}>{item.quantity}</span>
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
                <svg className={style.iconCan} width="27" height="27">
                  <use xlinkHref={`${sprite}#can`}></use>
                </svg>
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ProductCart;
