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
          id="contact"
          label="Main Person of Contact*"
          required
          name="contact"
          onChange={event => {
            handleChange(event);
          }}
          value={formData.personOfContact}
          size="large"
        />
        <InputBox
          id="position"
          label="Position*"
          required
          name="position"
          onChange={event => {
            handleChange(event);
          }}
          value={formData.position}
          size="large"
        />
      </div>
      <div className={styles.input_group}>
        <InputBox
          id="number"
          label="Phone Number*"
          required
          name="number"
          onChange={event => {
            handleChange(event);
          }}
          value={formData.phoneNumber}
        />
        <InputBox
          id="email"
          label="Email"
          required
          name="email"
          onChange={event => {
            handleChange(event);
          }}
          value={formData.email}
        />
      </div>
      <div className={styles.input_group}>
        <InputBox
          id="website"
          label="Company Website*"
          required
          name="website"
          onChange={event => {
            handleChange(event);
          }}
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
