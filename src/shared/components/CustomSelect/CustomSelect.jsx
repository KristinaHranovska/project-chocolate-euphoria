import { useField, useFormikContext } from 'formik';
import Select from 'react-select';
import style from './CustomSelect.module.scss';
import customStyles from 'helpers/customStyles';

const CustomSelect = ({ label, options, isDisabled, ...props }) => {
  const [meta] = useField(props);
  const { setFieldValue } = useFormikContext();

  const handleChange = (selectedOption) => {
    setFieldValue(props.name, selectedOption ? selectedOption.value : '');
  };

  return (
    <div className={style.formGroup}>
      <label className={style.formLabel} htmlFor={props.id || props.name}>
        {label}
      </label>
      <Select
        {...props}
        options={options}
        onChange={handleChange}
        styles={customStyles}
        placeholder={`Choose ${label.toLowerCase()}`}
        isDisabled={isDisabled}
      />
      {meta.touched && meta.error ? (
        <div className={style.error}>{meta.error}</div>
      ) : null}
    </div>
  );
};

export default CustomSelect;
