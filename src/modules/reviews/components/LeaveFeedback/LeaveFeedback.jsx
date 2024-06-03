import { useDispatch, useSelector } from 'react-redux';
import { Field, Formik, ErrorMessage, Form } from 'formik';
import toast from 'react-hot-toast';
import useModal from 'hooks/useModal';
import { useId } from 'react';

import { Button, ModalWindow } from 'shared/components';
import { FeedbackSchema } from 'modules/reviews/helpers';
import { clearFormValues, setFormValues } from '@redux/form/formSlice';
import { postReviews } from 'modules/reviews/api/reviewsApi';

import style from './LeaveFeedback.module.scss';
import { icons as sprite } from 'shared/icons';
import {
  imagesTablet1x,
  imagesTablet2x,
  imagesDesktop1x,
  imagesDesktop2x,
  imagesMobile1x,
  imagesMobile2x,
} from 'shared/images';

const LeaveFeedback = () => {
  const feedbackModal = useModal();
  const dispatch = useDispatch();
  const formValues = useSelector((state) => state.form.values);
  const nameId = useId();
  const emailId = useId();
  const phoneId = useId();
  const textId = useId();

  const handleSubmit = async (values, actions) => {
    try {
      await postReviews(values);

      actions.resetForm();
      dispatch(clearFormValues());
      feedbackModal.closeModal();

      toast.success('We received your excellent feedback ❤️');
    } catch (error) {
      toast.error(error.message);
    }
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
        type={'subscribe'}
      >
        <picture>
          <source
            media="(min-width: 1440px)"
            srcSet={`${imagesDesktop1x.popupSubscribe} 1x, ${imagesDesktop2x.popupSubscribe2x} 2x`}
          />
          <source
            media="(min-width: 768px)"
            srcSet={`${imagesTablet1x.popup} 1x, ${imagesTablet2x.popup2x} 2x`}
          />
          <source
            media="(max-width: 767.98px)"
            srcSet={`${imagesMobile1x.popup} 1x, ${imagesMobile2x.popup2x} 2x`}
          />
          <img
            src={imagesDesktop1x.popupSubscribe}
            alt="chocolate subscribe"
            className={`${style.imgSubscribe}`}
          />
        </picture>

        <div className={style.formReview}>
          <h2 className={style.reviewTitle}>
            Leave a review about{' '}
            <span className={style.accentMainTitle}>our chocolate</span>
          </h2>

          <Formik
            initialValues={formValues}
            validationSchema={FeedbackSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched, values, handleChange, handleBlur }) => (
              <Form onChange={() => dispatch(setFormValues(values))}>
                <div className={style.fieldThumb}>
                  <Field
                    className={`${style.formInput} ${
                      errors.name && touched.name && style.errorName
                    }`}
                    type="text"
                    name="name"
                    id={nameId}
                    placeholder=" "
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                  />
                  <label className={style.formLabel} htmlFor={nameId}>
                    Name
                  </label>
                </div>
                <ErrorMessage
                  className={style.errorSpan}
                  name="name"
                  component="span"
                />

                <div className={style.fieldThumb}>
                  <Field
                    className={`${style.formInput} ${
                      errors.email && touched.email && style.errorName
                    }`}
                    type="text"
                    name="email"
                    id={emailId}
                    placeholder=" "
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                  <label className={style.formLabel} htmlFor={emailId}>
                    Enter your email
                  </label>
                </div>
                <ErrorMessage
                  className={style.errorSpan}
                  name="email"
                  component="span"
                />

                <div className={style.fieldThumb}>
                  <Field
                    className={`${style.formInput} ${style.formPhone} ${
                      errors.phone && touched.phone && style.errorName
                    }`}
                    type="text"
                    name="phone"
                    id={phoneId}
                    placeholder=" "
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.phone}
                  />
                  <label
                    className={`${style.formLabel} ${style.formInputPhone}`}
                    htmlFor={phoneId}
                  >
                    Phone number
                  </label>
                  <div className={style.wrapperCode}>
                    <svg className={style.iconFlag}>
                      <use xlinkHref={`${sprite}#flag`} />
                    </svg>
                    <p className={style.codeNaumber}>+380</p>
                  </div>
                </div>

                <ErrorMessage
                  className={style.errorSpan}
                  name="phone"
                  component="span"
                />

                <div className={style.fieldThumb}>
                  <Field
                    className={`${style.formInput} ${style.formTextarea} ${
                      errors.comment && touched.comment && style.errorName
                    }`}
                    as="textarea"
                    name="comment"
                    maxLength="150"
                    id={textId}
                    placeholder=" "
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.comment}
                  />
                  <label className={style.formLabel} htmlFor={textId}>
                    Enter your review
                  </label>
                </div>

                <ErrorMessage
                  className={style.errorSpan}
                  name="comment"
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
        </div>
      </ModalWindow>
    </>
  );
};

export default LeaveFeedback;
