import { useId } from 'react';
import { Field, ErrorMessage, useField } from 'formik';
import style from './CustomInput.module.scss';

const CustomInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  const id = useId();
  return (
    <div className={style.formGroup}>
      <label className={style.formLabel} htmlFor={id}>
        {label}
        <span className={style.spanRequired}>*</span>
      </label>
      <Field
        className={`${style.formInput} ${meta.touched && meta.error ? style.error : ''}`}
        id={id}
        {...field}
        {...props}
      />
      <ErrorMessage
        name={props.name}
        component="span"
        className={style.errorSpan}
      />
    </div>
  );
};

export default CustomInput;
