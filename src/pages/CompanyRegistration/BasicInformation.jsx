import React from 'react';
import PropTypes from 'prop-types';
import styles from './CompanyRegistration.module.css';
import InputBox from '../../components/InputBox/InputBox';

function BasicInformation(props) {
  const { formData, handleChange, nextStep } = props;
  return (
    <div>
      <h2>Banana</h2>
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
    companyAddress: PropTypes.string.isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
};

export default BasicInformation;
