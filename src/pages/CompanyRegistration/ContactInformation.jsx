/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './CompanyRegistration.module.css';
import InputBox from '../../components/InputBox/InputBox';

function ContactInformation(props) {
  const { formData, errors, handleChange } = props;
  return (
    <div className={styles.inputs_wrapper}>
      <div className={styles.input_group}>
        <InputBox
          id="personOfContact"
          label="Main Person of Contact*"
          required
          name="personOfContact"
          type="text"
          onChange={handleChange}
          value={formData.personOfContact}
          size="large"
          message={errors.personOfContact}
        />
        <InputBox
          id="position"
          label="Their Position*"
          required
          name="position"
          type="text"
          onChange={handleChange}
          value={formData.position}
          size="large"
          message={errors.position}
        />
      </div>
      <div className={styles.input_group}>
        <InputBox
          id="phoneNumber"
          label="Phone Number*"
          required
          name="phoneNumber"
          type="tel"
          onChange={handleChange}
          value={formData.phoneNumber}
          size="large"
          message={errors.phoneNumber}
        />
        <InputBox
          id="email"
          label="Email"
          required
          name="email"
          type="email"
          onChange={handleChange}
          value={formData.email}
          size="large"
          message={errors.email}
        />
      </div>
      <div className={styles.input_group}>
        <InputBox
          id="companyWebsite"
          label="Company Website*"
          required
          name="companyWebsite"
          type="url"
          onChange={handleChange}
          value={formData.companyWebsite}
          size="large"
          message={errors.companyWebsite}
        />
      </div>
    </div>
  );
}

ContactInformation.propTypes = {
  formData: PropTypes.shape({
    personOfContact: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    phoneNumber: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    companyWebsite: PropTypes.string.isRequired,
  }).isRequired,
  errors: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
};
export default ContactInformation;
