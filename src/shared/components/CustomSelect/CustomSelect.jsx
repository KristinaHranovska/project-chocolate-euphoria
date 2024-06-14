import { useFormikContext } from 'formik';
import Select from 'react-select';
import style from './CustomSelect.module.scss';
import customStyles from 'helpers/customStyles';

const CustomSelect = ({ label, options, isDisabled, ...props }) => {
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
        placeholder={label}
        isDisabled={isDisabled}
        isClearable
      />
    </div>
  );
};

export default CustomSelect;
