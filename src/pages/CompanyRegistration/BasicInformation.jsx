import React from 'react';
import PropTypes from 'prop-types';
import styles from './CompanyRegistration.module.css';
import InputBox from '../../components/InputBox/InputBox';

function BasicInformation(props) {
  const { formData, handleChange } = props;
  return (
    <div className={styles.inputs_wrapper}>
      <div className={styles.input_group}>
        <InputBox
          id="companyName"
          label="Company Name*"
          required
          name="companyName"
          onChange={handleChange}
          value={formData.companyName}
          size="large"
        />
        <InputBox
          id="businessType"
          label="Business Type*"
          required
          name="businessType"
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
          onChange={handleChange}
          value={formData.numberOfEmployees}
          size="large"
        />
        <InputBox
          id="year"
          label="Year of Establishment*"
          required
          name="year"
          onChange={handleChange}
          value={formData.year}
          size="large"
        />
      </div>

      <div className={`${styles.input_group} ${styles.small_inputs}`}>
        <InputBox
          id="Country"
          isDropdown
          size="small"
          label="Select Country"
          onChange={handleChange}
          value={formData.country}
        >
          <option value="india">India</option>
          <option value="america">America</option>
          <option value="africa">Africa</option>
          <option value="japan">Japan</option>
          <option value="italy">Italy</option>
        </InputBox>
        <InputBox
          id="city"
          label="City*"
          required
          name="city"
          onChange={handleChange}
          value={formData.city}
          size="small"
        />
        <InputBox
          id="postCode"
          label="Post Code"
          required
          name="postCode"
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
          onChange={handleChange}
          value={formData.accountPassword}
          size="large"
        />
        <InputBox
          id="confirmPassword"
          label="Confirm Password*"
          required
          name="confirmPassword"
          onChange={handleChange}
          value={formData.confirmPassword}
          size="large"
        />
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
    year: PropTypes.string.isRequired,
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
