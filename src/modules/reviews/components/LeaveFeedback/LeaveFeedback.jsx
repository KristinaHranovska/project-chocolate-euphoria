import { Field, Form, Formik, ErrorMessage } from 'formik';
import toast from 'react-hot-toast';
import useModal from 'hooks/useModal';
import { Button, ModalWindow } from 'shared/components';

import style from './LeaveFeedback.module.scss';
import { FeedbackSchema, initialValuesReview } from 'modules/reviews/helpers';

const LeaveFeedback = () => {
  const feedbackModal = useModal();

  const handleSubmit = (values, actions) => {
    toast.success('We received your excellent feedback ❤️');
    actions.resetForm();
  };

  return (
    <>
      <Button
        onClick={feedbackModal.openModal}
        className={style.btnBorderColor}
        title={'Leave a review'}
      />

      <ModalWindow
        isOpen={feedbackModal.isOpen}
        onRequestClose={feedbackModal.closeModal}
      >
        <h2 className={style.reviewTitle}>
          Leave a review about{' '}
          <span className={style.accentMainTitle}>our chocolate</span>
        </h2>

        <Formik
          initialValues={initialValuesReview}
          validationSchema={FeedbackSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <Form className={style.formReview}>
              <Field
                className={`${style.formInput} ${
                  errors.name && touched.name && style.errorName
                }`}
                type="text"
                name="name"
                placeholder="Name"
              />
              <ErrorMessage
                className={style.errorSpan}
                name="name"
                component="span"
              />
              <Field
                className={`${style.formInput} ${
                  errors.name && touched.name && style.errorName
                }`}
                type="text"
                name="email"
                placeholder="Enter your email"
              />
              <ErrorMessage
                className={style.errorSpan}
                name="name"
                component="span"
              />
              <Field
                className={`${style.formInput} ${
                  errors.name && touched.name && style.errorName
                }`}
                type="text"
                name="phone"
                placeholder="Phone number"
              />
              <ErrorMessage
                className={style.errorSpan}
                name="name"
                component="span"
              />
              <Field
                className={`${style.formInput} ${
                  errors.name && touched.name && style.errorName
                }`}
                as="textarea"
                name="comment"
                placeholder="Enter your review"
              />
              <ErrorMessage
                className={style.errorSpan}
                name="name"
                component="span"
              />

              <Button
                title={'Send'}
                className={style.btnSubscribe}
                type="submit"
              />
            </Form>
          )}
        </Formik>
      </ModalWindow>
    </>
  );
};

export default LeaveFeedback;
