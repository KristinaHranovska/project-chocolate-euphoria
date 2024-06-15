import { Field, Form, Formik } from 'formik';
import toast from 'react-hot-toast';
import { TfiEmail } from 'react-icons/tfi';
import style from './FooterSubscribe.module.scss';
import {
  formatRegex,
  initialValuesSubscribe,
} from 'modules/footer/helper/constants';
import { Button } from 'shared/components';
import { postSubscribe } from 'modules/footer/api/subscribeApi';

const FooterSubscribe = () => {
  const validate = (values) => {
    const errors = {};
    const formattedSubscribe = values.email.trim().toLowerCase();

    if (!formattedSubscribe) {
      errors.email = 'The field cannot be empty';
    } else if (!formatRegex.test(formattedSubscribe)) {
      errors.email = 'Invalid email format';
    }

    return errors;
  };

  const handleSubmit = async (values, actions) => {
    try {
      const formattedSubscribe = values.email.trim().toLowerCase();

      if (!formattedSubscribe) {
        toast.error('The field cannot be empty!');
        return;
      } else if (!formatRegex.test(formattedSubscribe)) {
        toast.error('Invalid email format!');
        return;
      }

      await postSubscribe({ email: formattedSubscribe });

      toast.success('Successfully subscribed!');
      actions.resetForm();
    } catch (error) {
      throw new Error(error.response.status);
    }
  };

  return (
    <div data-aos="fade-left" data-aos-easing="linear" data-aos-duration="1000">
      <Formik
        initialValues={initialValuesSubscribe}
        validate={validate}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, handleBlur }) => (
          <Form className={style.formSubscribe}>
            <Field
              className={`${style.inputSubscribe} ${errors.email && touched.email ? style.invalid : ''}`}
              type="text"
              name="email"
              placeholder="Enter your email address"
              onBlur={handleBlur}
            />
            <TfiEmail className={style.iconEmail} />
            {errors.email && touched.email && (
              <div className={style.error}>{errors.email}</div>
            )}
            <Button
              title={'Subscribe'}
              className={style.btnSubscribe}
              type="submit"
            />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FooterSubscribe;
