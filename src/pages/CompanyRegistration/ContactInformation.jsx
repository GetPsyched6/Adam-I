import React from 'react';
import PropTypes from 'prop-types';
import styles from './CompanyRegistration.module.css';
import InputBox from '../../components/InputBox/InputBox';

function ContactInformation(props) {
  const { formData, handleChange } = props;
  return (
    <div className={styles.inputs_wrapper}>
      <div className={styles.input_group}>
        <InputBox
          id="personOfContact"
          label="Main Person of Contact*"
          required
          name="personOfContact"
          onChange={handleChange}
          value={formData.personOfContact}
          size="large"
        />
        <InputBox
          id="position"
          label="Position*"
          required
          name="position"
          onChange={handleChange}
          value={formData.position}
          size="large"
        />
      </div>
      <div className={styles.input_group}>
        <InputBox
          id="phoneNumber"
          label="Phone Number*"
          required
          name="phoneNumber"
          onChange={handleChange}
          value={formData.phoneNumber}
        />
        <InputBox
          id="email"
          label="Email"
          required
          name="email"
          onChange={handleChange}
          value={formData.email}
        />
      </div>
      <div className={styles.input_group}>
        <InputBox
          id="companyWebsite"
          label="Company Website*"
          required
          name="companyWebsite"
          onChange={handleChange}
          value={formData.companyWebsite}
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
  handleChange: PropTypes.func.isRequired,
};
export default ContactInformation;
