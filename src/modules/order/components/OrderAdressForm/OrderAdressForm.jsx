import { FastField } from 'formik';

import { useState } from 'react';
import CreatableSelect from 'react-select/creatable';
import uaCities from 'shared/data/uaCities';

const OrderAdressForm = () => {
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [cities, setCities] = useState([]);

  const handleRegionChange = (selectedOption) => {
    setSelectedRegion(selectedOption);
    if (selectedOption) {
      const selectedRegionCities =
        uaCities.find((region) => region.name === selectedOption.value)
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
  };

  const regionOptions = uaCities.map((region) => ({
    value: region.name,
    label: region.name,
  }));

  return (
    <>
      <h3>Enter the delivery address:</h3>
      <FastField name="selectRegion">
        <CreatableSelect
          isClearable
          placeholder="Choose a region"
          options={regionOptions}
          onChange={handleRegionChange}
        />
      </FastField>

      {selectedRegion && (
        <FastField name="selectCity">
          <CreatableSelect
            isClearable
            placeholder="Choose a city"
            options={cities}
          />
        </FastField>
      )}
    </>
  );
};

export default OrderAdressForm;
