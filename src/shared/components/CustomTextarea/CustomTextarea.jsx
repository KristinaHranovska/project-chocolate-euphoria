import { useField, ErrorMessage, Field } from 'formik';
import style from './CustomTextarea.module.scss';

const CustomTextarea = ({ ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className={style.formGroup}>
      <Field
        as="textarea"
        className={`${style.formInput} ${style.formTextarea} ${meta.touched && meta.error ? style.error : ''}`}
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

export default CustomTextarea;
