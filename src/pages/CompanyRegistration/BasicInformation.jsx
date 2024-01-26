import React from 'react';
import PropTypes from 'prop-types';
import { Tooltip } from 'react-tooltip';
import countryList from 'react-select-country-list';
import styles from './CompanyRegistration.module.css';
import InputBox from '../../components/InputBox/InputBox';

function BasicInformation(props) {
  const { formData, handleChange } = props;
  const countries = countryList().getData();

  return (
    <div className={styles.inputs_wrapper}>
      <div className={styles.input_group}>
        <InputBox
          id="companyName"
          label="Company Name*"
          required
          name="companyName"
          type="text"
          onChange={handleChange}
          value={formData.companyName}
          size="large"
        />
        <InputBox
          id="businessType"
          label="Business Type*"
          required
          name="businessType"
          type="text"
          onChange={handleChange}
          value={formData.businessType}
          size="large"
        />
      </div>

      <div className={styles.input_group}>
        <InputBox
          id="numberOfEmployees"
          label="Number Of Employees*"
          required
          name="numberOfEmployees"
          type="number"
          min="1"
          onChange={handleChange}
          value={formData.numberOfEmployees}
          size="large"
        />
        <InputBox
          id="yearOfEstablishment"
          label="Year of Establishment*"
          required
          name="yearOfEstablishment"
          type="number"
          min="1500"
          max={new Date().getFullYear()}
          onChange={handleChange}
          value={formData.yearOfEstablishment}
          size="large"
        />
      </div>

      <div className={`${styles.input_group} ${styles.small_inputs}`}>
        <InputBox
          id="Country"
          label="Country*"
          isDropdown
          required
          name="country"
          onChange={handleChange}
          value={formData.country}
          size="small"
        >
          {countries.map(country => (
            <option key={country.value} value={country.value} title={country.value}>
              {country.label}
            </option>
          ))}
        </InputBox>
        <InputBox
          id="city"
          label="City*"
          required
          name="city"
          type="text"
          onChange={handleChange}
          value={formData.city}
          size="small"
        />
        <InputBox
          id="postCode"
          label="Post Code"
          name="postCode"
          type="text"
          onChange={handleChange}
          value={formData.postCode}
          size="small"
        />
      </div>

      <div className={styles.input_group}>
        <InputBox
          id="industry"
          label="Industry*"
          required
          name="industry"
          type="text"
          onChange={handleChange}
          value={formData.industry}
          size="large"
        />
      </div>
      <div className={styles.input_group}>
        <InputBox
          id="accountPassword"
          label="Account Password*"
          required
          name="accountPassword"
          type="password"
          tooltip="password-tooltip"
          onChange={handleChange}
          value={formData.accountPassword}
          size="large"
        />
        <InputBox
          id="confirmPassword"
          label="Confirm Password*"
          required
          name="confirmPassword"
          type="password"
          tooltip="password-tooltip"
          onChange={handleChange}
          value={formData.confirmPassword}
          size="large"
        />
        <Tooltip
          id="password-tooltip"
          style={{
            backgroundColor: 'black',
            color: '#fff',
            padding: '1rem 1.5rem 1.5rem',
            borderRadius: '16px',
          }}
          opacity={1}
          role="tooltip"
        >
          <div className={styles.tooltip_wrapper}>
            <p className={styles.tooltip_title}>Password Requirements:</p>
            <ul className={styles.tooltip_list_wrapper}>
              <li>8-60 characters with a mix of letters and numbers</li>
              <li>Must include both upper and lower case letters</li>
            </ul>
          </div>
        </Tooltip>
      </div>

      <div className={`${styles.input_group} ${styles.address_box}`}>
        <InputBox
          id="companyAddress"
          label="Company Address*"
          required
          isAddress
          name="companyAddress"
          onChange={handleChange}
          value={formData.companyAddress}
          size="large"
        />
      </div>
    </div>
  );
}

BasicInformation.propTypes = {
  formData: PropTypes.shape({
    companyName: PropTypes.string.isRequired,
    businessType: PropTypes.string.isRequired,
    numberOfEmployees: PropTypes.string.isRequired,
    yearOfEstablishment: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    postCode: PropTypes.string,
    industry: PropTypes.string.isRequired,
    accountPassword: PropTypes.string.isRequired,
    confirmPassword: PropTypes.string.isRequired,
    companyAddress: PropTypes.string.isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default BasicInformation;
