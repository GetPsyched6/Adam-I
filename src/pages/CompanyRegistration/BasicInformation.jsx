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
          id="companyname"
          label="Company Name*"
          required
          name="companyname"
          onChange={event => {
            handleChange(event.target);
          }}
          value={formData.companyName}
          size="large"
        />
        <InputBox
          id="businesstype"
          label="Business Type*"
          required
          name="businesstype"
          onChange={event => {
            handleChange(event);
          }}
          value={formData.businessType}
          size="large"
        />
      </div>

      <div className={styles.input_group}>
        <InputBox
          id="nofemployees"
          label="Number Of Employees*"
          required
          name="nofemployees"
          onChange={event => {
            handleChange(event);
          }}
          value={formData.numberOfEmployees}
          size="large"
        />
        <InputBox
          id="year"
          label="Year of Establishment*"
          required
          name="year"
          onChange={event => {
            handleChange(event);
          }}
          value={formData.year}
          size="large"
        />
      </div>

      <div className={`${styles.input_group} ${styles.small_inputs}`}>
        <InputBox
          isDropdown
          size="small"
          f
          label="Select Country"
          onChange={event => {
            handleChange(event);
          }}
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
          onChange={event => {
            handleChange(event);
          }}
          value={formData.city}
          size="small"
        />
        <InputBox
          id="postcode"
          label="Post Code"
          required
          name="postcode"
          onChange={event => {
            handleChange(event);
          }}
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
          onChange={event => {
            handleChange(event);
          }}
          value={formData.industry}
          size="large"
        />
      </div>
      <div className={styles.input_group}>
        <InputBox
          id="password"
          label="Account Password*"
          required
          name="password"
          onChange={event => {
            handleChange(event);
          }}
          value={formData.accountPassword}
          size="large"
        />
        <InputBox
          id="confirmpassword"
          label="Confirm Password*"
          required
          name="confirmpassword"
          onChange={event => {
            handleChange(event);
          }}
          value={formData.confirmPassword}
          size="large"
        />
      </div>

      <div className={`${styles.input_group} ${styles.address_box}`}>
        <InputBox
          id="address"
          label="Company Address*"
          required
          isAddress
          name="Address"
          onChange={event => {
            handleChange(event);
          }}
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
