import { Button } from 'shared/components';
import OrderAdressForm from '../OrderAdressForm/OrderAdressForm';
import OrderUserForm from '../OrderUserForm/OrderUserForm';

import style from './OrderForm.module.scss';
import { Form, Formik } from 'formik';
import {
  contactFormValidationSchema,
  orderFormInitialValues,
} from 'modules/order/helpers';

const OrderForm = ({ closeModal }) => {
  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
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
            onClick={() => closeModal()}
          />
        </Form>
      </Formik>
    </>
  );
};

export default OrderForm;
