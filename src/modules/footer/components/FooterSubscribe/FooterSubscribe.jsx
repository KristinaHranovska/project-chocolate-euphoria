import { Field, Form, Formik } from 'formik';
import toast from 'react-hot-toast';
import { TfiEmail } from 'react-icons/tfi';
import style from './FooterSubscribe.module.scss';
import { formatRegex } from 'modules/footer/helper/constants';
import { Button } from 'shared/components';

const FooterSubscribe = () => {
  const validate = (values) => {
    const errors = {};
    const formattedSubscribe = values.subscribe.trim().toLowerCase();

    if (!formattedSubscribe) {
      errors.subscribe = 'The field cannot be empty';
    } else if (!formatRegex.test(formattedSubscribe)) {
      errors.subscribe = 'Invalid email format';
    }

    return errors;
  };

  const handleSubmit = (values, actions) => {
    const formattedSubscribe = values.subscribe.trim().toLowerCase();

    if (!formattedSubscribe) {
      toast.error('The field cannot be empty!');
      return;
    } else if (!formatRegex.test(formattedSubscribe)) {
      toast.error('Invalid email format!');
      return;
    }

    toast.success('Successfully subscribed!');
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ subscribe: '' }}
      validate={validate}
      onSubmit={handleSubmit}
    >
      {({ errors, touched, handleBlur }) => (
        <Form className={style.formSubscribe}>
          <Field
            className={`${style.inputSubscribe} ${errors.subscribe && touched.subscribe ? style.invalid : ''}`}
            type="text"
            name="subscribe"
            placeholder="Enter your email address"
            onBlur={handleBlur}
          />
          <TfiEmail className={style.iconEmail} />
          {errors.subscribe && touched.subscribe && (
            <div className={style.error}>{errors.subscribe}</div>
          )}
          <Button
            title={'Subscribe'}
            className={style.btnSubscribe}
            type="submit"
          />
        </Form>
      )}
    </Formik>
  );
};

export default FooterSubscribe;
