import { Field, useFormikContext, ErrorMessage } from 'formik';
import { useState, useEffect } from 'react';
import uaCities from 'shared/data/uaCities';

import style from './OrderAdressForm.module.scss';

const OrderAdressForm = () => {
  const { values } = useFormikContext();

  const [cities, setCities] = useState([]);

  useEffect(() => {
    if (values.selectRegion) {
      const selectedRegionCities =
        uaCities.find((region) => region.name === values.selectRegion)
          ?.cities || [];
      setCities(
        selectedRegionCities.map((city) => ({
          value: city.name,
          label: city.name,
        }))
      );
    } else {
      setCities([]);
    }
  }, [values.selectRegion]);

  const regionOptions = uaCities.map((region) => ({
    value: region.name,
    label: region.name,
  }));

  return (
    <>
      <h3>Enter the delivery address:</h3>

      <Field as="select" name="selectRegion">
        <option value="">Choose a region</option>
        {regionOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Field>

      <Field as="select" name="selectCity">
        <option value="">Choose a city</option>
        {cities.map((city) => (
          <option key={city.value} value={city.value}>
            {city.label}
          </option>
        ))}
      </Field>

      <div>
        <Field
          as="textarea"
          name="comment"
          maxLength="150"
          placeholder="Enter your comment"
        />
        <ErrorMessage
          className={style.errorSpan}
          name="comment"
          component="span"
        />
      </div>
    </>
  );
};

export default OrderAdressForm;
