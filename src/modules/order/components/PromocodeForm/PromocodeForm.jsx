import { ErrorMessage, Field, Form, Formik } from 'formik';
import { Button } from 'shared/components';
import { promocodeSchema } from 'modules/order/helpers/promocodeSchema';
import toast from 'react-hot-toast';
import { postPromocode } from 'modules/order/api/orderApi';
import style from './PromocodeForm.module.scss';

const PromocodeForm = ({ onApplyPromocode }) => {
  const handleSubmit = async (values, actions) => {
    try {
      const response = await postPromocode(values);

      if (response.status === 200) {
        toast.success('Promocode applied successfully!');
        onApplyPromocode(response.data.percent);
      } else {
        toast.error(response.data.message);
      }

      actions.resetForm();
    } catch (error) {
      if (Number(error.message) === 404) {
        toast.error('No promocode found');
      }
    }
  };

  return (
    <>
      <Formik
        initialValues={{ promocode: '' }}
        validationSchema={promocodeSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, values, handleChange, handleBlur }) => (
          <Form className={style.formPromocode}>
            <div className={style.fieldPosition}>
              <Field
                className={`${style.formInput} ${
                  errors.promocode && touched.promocode ? style.error : ''
                }`}
                type="text"
                name="promocode"
                placeholder="Promocode"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.promocode}
              />
              <ErrorMessage
                className={style.errorSpan}
                name="promocode"
                component="span"
              />
            </div>
            <Button
              type="submit"
              title={'Apply'}
              className={style.btnOrangeStyle}
            />
          </Form>
        )}
      </Formik>
    </>
  );
};

export default PromocodeForm;
