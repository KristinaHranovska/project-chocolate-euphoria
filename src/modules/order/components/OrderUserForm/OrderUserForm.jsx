import { useId } from 'react';
import style from './OrderUserForm.module.scss';
import { Field, ErrorMessage } from 'formik';

const OrderUserForm = () => {
  const nameId = useId();
  const surnameId = useId();
  const phoneId = useId();

  return (
    <>
      <h3>Contacts:</h3>

      <div className={style.formGroup}>
        <label className={style.formLabel} htmlFor={nameId}>
          Name
        </label>
        <Field type="text" name="firstName" id={nameId} placeholder="Name" />
        <ErrorMessage
          name="firstName"
          component="span"
          className={style.error}
        />
      </div>

      <div className={style.formGroup}>
        <label className={style.formLabel} htmlFor={surnameId}>
          Surname
        </label>
        <Field
          type="text"
          name="lastName"
          id={surnameId}
          placeholder="Surname"
        />
        <ErrorMessage
          name="lastName"
          component="span"
          className={style.error}
        />
      </div>

      <div className={style.formGroup}>
        <label
          className={`${style.formLabel} ${style.formInputPhone}`}
          htmlFor={phoneId}
        >
          Phone number
        </label>
        <Field type="text" name="phone" id={phoneId} placeholder="Phone" />
        <ErrorMessage name="phone" component="span" className={style.error} />
      </div>
    </>
  );
};

export default OrderUserForm;
