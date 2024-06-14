import { useEffect, useState } from 'react';
import { useFormikContext } from 'formik';
import uaCities from 'shared/data/uaCities';
import style from './OrderAdressForm.module.scss';
import CustomSelect from 'shared/components/CustomSelect/CustomSelect';
import CustomTextarea from 'shared/components/CustomTextarea/CustomTextarea';

const OrderAdressForm = () => {
  const { values, setFieldValue } = useFormikContext();
  const [cities, setCities] = useState([]);

  useEffect(() => {
    if (values.selectRegion) {
      const selectedRegion = uaCities.find(
        (region) => region.name === values.selectRegion
      );
      const selectedRegionCities = selectedRegion
        ? selectedRegion.cities.map((city) => ({
            value: city.name,
            label: city.name,
          }))
        : [];
      setCities(selectedRegionCities);
      setFieldValue('selectCity', '');
    } else {
      setCities([]);
      setFieldValue('selectCity', '');
    }
  }, [values.selectRegion, setFieldValue]);

  const regionOptions = uaCities.map((region) => ({
    value: region.name,
    label: region.name,
  }));

  return (
    <>
      <h3 className={style.titleDelivery}>Enter the delivery address:</h3>

      <CustomSelect
        label="Choose a region"
        name="selectRegion"
        options={regionOptions}
      />

      <CustomSelect
        label="Choose a city"
        name="selectCity"
        options={cities}
        isDisabled={!values.selectRegion}
      />

      <CustomTextarea
        label="Enter your comment"
        name="comment"
        maxLength="150"
        placeholder="Enter your comment"
      />
    </>
  );
};

export default OrderAdressForm;
