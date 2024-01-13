import React from 'react';
import PropTypes from 'prop-types';
import styles from './CompanyRegistration.module.css';
import InputBox from '../../components/InputBox/InputBox';

function ContactInformation(props) {
  const { formData, handleChange, handleSubmit, previousStep } = props;
  return (
    <div>
      <h2>Cartog</h2>
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
  handleSubmit: PropTypes.func.isRequired,
  previousStep: PropTypes.func.isRequired,
};
export default ContactInformation;
