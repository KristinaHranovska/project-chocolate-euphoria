import { useDispatch, useSelector } from 'react-redux';
import {
  increaseQuantity,
  decreaseQuantity,
  deleteProduct,
  removeAllProducts,
} from '@redux/cart/cartSlice';
import style from './ProductCart.module.scss';
import { icons as sprite } from 'shared/icons';

const ProductCart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.products);
  const totalPrice = products.reduce(
    (acc, item) => acc + parseFloat(item.product.price) * item.quantity,
    0
  );

  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const handleIncrease = (productId) => {
    dispatch(increaseQuantity(productId));
  };

  const handleDecrease = (productId) => {
    dispatch(decreaseQuantity(productId));
  };

  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
  };
  const handleremoveAll = (productCart) => {
    dispatch(removeAllProducts(productCart));
  };

  return (
    <>
      {products.map((item, index) => {
        const productTotalPrice =
          parseFloat(item.product.price) * item.quantity;

        return (
          <div key={index}>
            <p>{item.product.productName}</p>
            <div className={style.quantity}>
              <h3 className={style.quantityTitle}>Quantity</h3>
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
              <button
                type="button"
                onClick={() => handleDelete(item.product._id)}
              >
                <svg className={style.iconCan} width="27" height="27">
                  <use xlinkHref={`${sprite}#can`}></use>
                </svg>
              </button>
            </div>
            <p>Total: {productTotalPrice.toFixed(2)} UAH</p>
          </div>
        );
      })}
      <button type="button" onClick={() => handleremoveAll(products.product)}>
        Clean Cart
      </button>
      <p>Total Price: {totalPrice.toFixed(2)} UAH</p>
      <p>Total Quantity: {totalQuantity}</p>
    </>
  );
};

export default ProductCart;
