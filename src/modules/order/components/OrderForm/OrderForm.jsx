import { Button } from 'shared/components';
import OrderAdressForm from '../OrderAdressForm/OrderAdressForm';
import OrderUserForm from '../OrderUserForm/OrderUserForm';

import style from './OrderForm.module.scss';
import { Form, Formik } from 'formik';
import {
  contactFormValidationSchema,
  orderFormInitialValues,
} from 'modules/order/helpers';
// import { useDispatch, useSelector } from 'react-redux';
// import { orderList } from 'modules/order/helpers/orderList';
// import { removeAllProducts } from '@redux/cart/cartSlice';

const OrderForm = ({ closeModal }) => {
  // const products = useSelector((state) => state.cart.products);
  // const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    // const order = orderList(products);
    // const message = { values, order };
    // console.log(message);

    actions.resetForm();
    // dispatch(removeAllProducts());
    closeModal();
  };

  return (
    <>
      <Formik
        initialValues={orderFormInitialValues}
        validationSchema={contactFormValidationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <OrderUserForm />
          <OrderAdressForm />

          <Button
            type="submit"
            title={'Checkout'}
            className={style.btnOrangeStyle}
          />
        </Form>
      </Formik>
    </>
  );
};

export default OrderForm;
