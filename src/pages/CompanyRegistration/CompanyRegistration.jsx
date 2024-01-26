import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BasicInformation from './BasicInformation';
import ContactInformation from './ContactInformation';
import styles from './CompanyRegistration.module.css';
import Button from '../../components/Button/Button';

function CompanyRegistration() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    companyName: '',
    businessType: '',
    numberOfEmployees: '',
    yearOfEstablishment: '',
    country: '',
    city: '',
    postCode: '',
    industry: '',
    accountPassword: '',
    confirmPassword: '',
    companyAddress: '',
    personOfContact: '',
    position: '',
    phoneNumber: '',
    email: '',
    companyWebsite: '',
  });

  const handleChange = event => {
    const { name, value } = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  // Handle form submission for the entire form
  const handleSubmit = event => {
    event.preventDefault();
    // You'll handle form submission here, possibly sending data to a backend
  };

  const goToNextStep = () => {
    setStep(2);
    window.scroll(0, 0);
  };

  const goToPreviousStep = () => {
    setStep(1);
    window.scroll(0, 0);
  };

  const loginLink = (
    <div className={styles.login_link}>
      Have an account?{' '}
      <Link to="/login" className={styles.link}>
        Login
      </Link>
    </div>
  );

  return (
    <form onSubmit={handleSubmit} className={styles.wrapper}>
      <div className={styles.blur_wrapper}>
        <h2 className={styles.title}>Company Registration</h2>
        {step === 1 && (
          <div className={styles.basic_info_wrapper}>
            <h5 className={styles.subtitle}>
              Basic Information <span className={styles.page_indicator}>(1 of 2)</span>
            </h5>
            <BasicInformation
              formData={formData}
              handleChange={handleChange}
              nextStep={goToNextStep}
            />
            {loginLink}
            <div className={styles.button_wrapper}>
              <Button text="Next" onClick={goToNextStep} />
            </div>
          </div>
        )}
        {step === 2 && (
          <div className={styles.contact_info_wrapper}>
            <h5 className={styles.subtitle}>
              Contact Information <span className={styles.page_indicator}>(2 of 2)</span>
            </h5>
            <ContactInformation
              formData={formData}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              previousStep={goToPreviousStep}
            />
            {loginLink}
            <div className={styles.button_wrapper}>
              <Button text="Back" onClick={goToPreviousStep} />
              <Button text="Register" isAction isSubmit />
            </div>
          </div>
        )}
        <div className={styles.aboutus}>© 2023 - Invest Africa :: Powered by Adam-i Japan</div>
      </div>
    </form>
  );
}

export default CompanyRegistration;
