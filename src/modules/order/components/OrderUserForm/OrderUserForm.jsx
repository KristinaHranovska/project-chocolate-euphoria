import CustomInput from 'shared/components/CustomInput/CustomInput';
import style from './OrderUserForm.module.scss';

const OrderUserForm = () => {
  return (
    <>
      <h3 className={style.titleContacts}>Contacts:</h3>

      <CustomInput
        label="Name"
        name="firstName"
        type="text"
        placeholder="Name"
      />
      <CustomInput
        label="Surname"
        name="lastName"
        type="text"
        placeholder="Surname"
      />
      <CustomInput
        label="Phone number"
        name="phone"
        type="text"
        placeholder="Phone"
      />
      <CustomInput label="Email" name="email" type="text" placeholder="Email" />
    </>
  );
};

export default OrderUserForm;
