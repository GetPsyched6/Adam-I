import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import BasicInformation from './BasicInformation';
import ContactInformation from './ContactInformation';
import styles from './CompanyRegistration.module.css';
import Alert from '../../components/Alert/Alert';
import Button from '../../components/Button/Button';

function CompanyRegistration() {
  const REGISTRATION_URL = 'http://localhost:9000/companyregister';

  const Navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    companyName: '',
    businessType: '',
    numberOfEmployees: null,
    yearOfEstablishment: null,
    country: '',
    city: '',
    postCode: null,
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

  const alertDuration = 5000;
  const [alert, setAlert] = useState({ message: '', state: '', active: false });

  const toggleAlert = () => {
    setAlert(prevAlert => ({
      ...prevAlert,
      active: !prevAlert.active,
    }));
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async event => {
    event.preventDefault();
    const data = {
      companyName: formData.companyName,
      businessType: formData.businessType,
      numberOfEmployees: Number(formData.numberOfEmployees),
      yearOfEstablishment: Number(formData.yearOfEstablishment),
      country: formData.country,
      city: formData.city,
      postCode: formData.postCode,
      industry: formData.industry,
      accountPassword: formData.accountPassword,
      confirmPassword: formData.confirmPassword,
      companyAddress: formData.companyAddress,
      personOfContact: formData.personOfContact,
      position: formData.position,
      phoneNumber: formData.phoneNumber,
      email: formData.email,
      companyWebsite: formData.companyWebsite,
    };
    try {
      const response = await fetch(REGISTRATION_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      let alertMessage = '';
      let alertState = '';

      if (response.ok) {
        alertMessage = 'Signup successful. Redirecting...';
        alertState = 'success';
        setTimeout(() => {
          Navigate('/');
        }, alertDuration + 1500);
      } else {
        alertMessage = 'Signup failed, please retry.';
        alertState = 'error';
      }

      // !Start Alert with set alert-data.
      setAlert({ message: alertMessage, state: alertState });
      toggleAlert();

      const alertTimeout = setTimeout(() => {
        toggleAlert();
      }, alertDuration);

      return () => clearTimeout(alertTimeout);
      // *catch when unknown error happens
    } catch (error) {
      setAlert({ message: error.toString(), state: 'error' });
      toggleAlert();

      const alertTimeout = setTimeout(() => {
        toggleAlert();
      }, alertDuration);
      return () => clearTimeout(alertTimeout);
    }
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
      <Alert message={alert.message} state={alert.state} isActive={alert.active} />
    </form>
  );
}

export default CompanyRegistration;
