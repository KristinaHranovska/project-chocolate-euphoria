import { Button } from 'shared/components';
import OrderAdressForm from '../OrderAdressForm/OrderAdressForm';
import OrderUserForm from '../OrderUserForm/OrderUserForm';

import style from './OrderForm.module.scss';
import { Form, Formik } from 'formik';
import {
  contactFormValidationSchema,
  orderFormInitialValues,
} from 'modules/order/helpers';
import { useDispatch, useSelector } from 'react-redux';
import { orderList } from 'modules/order/helpers/orderList';
import { removeAllProducts } from '@redux/cart/cartSlice';
import toast from 'react-hot-toast';
import { postOrder } from 'modules/order/api/orderApi';

const OrderForm = ({ closeModal }) => {
  const products = useSelector((state) => state.cart.products);
  const totalPrice = products.reduce(
    (acc, item) => acc + parseFloat(item.product.price) * item.quantity,
    0
  );
  const dispatch = useDispatch();

  const handleSubmit = async (values, actions) => {
    try {
      const order = orderList(products);
      const message = { userContact: values, order, totalPrice };

      await postOrder(message);

      actions.resetForm();
      dispatch(removeAllProducts());
      closeModal();

      toast.success(
        'We have already received your wonderful order and are starting to pack it ❤️'
      );
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div>
      <Formik
        initialValues={orderFormInitialValues}
        validationSchema={contactFormValidationSchema}
        onSubmit={handleSubmit}
      >
        <Form className={style.formOrder}>
          <OrderUserForm />
          <OrderAdressForm />

          <Button
            type="submit"
            title={'Checkout'}
            className={style.btnOrangeStyle}
          />
        </Form>
      </Formik>
    </div>
  );
};

export default OrderForm;
