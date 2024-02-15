/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Tooltip } from 'react-tooltip';
import countryOptions from './sortedCountries';
import styles from './CompanyRegistration.module.css';
import InputBox from '../../components/InputBox/InputBox';

function BasicInformation(props) {
  const { formData, errors, isTouched, handleChange } = props;

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
          message={errors.companyName}
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
          message={errors.businessType}
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
          message={isTouched.numberOfEmployees ? errors.numberOfEmployees : ''}
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
          message={isTouched.yearOfEstablishment ? errors.yearOfEstablishment : ''}
        />
      </div>

      <div className={`${styles.input_group} ${styles.small_inputs}`}>
        <InputBox
          id="country"
          label="Country*"
          isDropdown
          required
          name="country"
          onChange={handleChange}
          value={formData.country}
          size="small"
          message={errors.country}
        >
          {countryOptions.map(country => (
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
          message={errors.city}
        />
        <InputBox
          id="postCode"
          label="Post Code"
          name="postCode"
          type="text"
          onChange={handleChange}
          value={formData.postCode}
          size="small"
          message={errors.postCode}
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
          message={errors.industry}
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
          message={errors.accountPassword}
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
          message={isTouched.confirmPassword ? errors.confirmPassword : ''}
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
              <li>8-128 characters with a mix of letters and numbers</li>
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
          message={errors.companyAddress}
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
  errors: PropTypes.object.isRequired,
  isTouched: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default BasicInformation;
