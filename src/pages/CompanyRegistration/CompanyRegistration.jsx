import React, { useState } from 'react';
import BasicInformation from './BasicInformation';
// import ContactInformation from './ContactInformation';
import Button from '../../components/Button/Button';

function CompanyRegistration() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    companyname: '',
    businesstype: '',
    nofemployees: '',
    year: '',
    city: '',
    postcode: '',
    industry: '',
    password: '',
    Address: '',
    Country: '',
    contact: '',
    position: '',
    number: '',
    email: '',
    website: '',
  });

  const handleChange = event => {
    const { name, value } = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  // Handle form submission for the entire form
  // const handleSubmit = event => {
  //   event.preventDefault();
  //   // You'll handle form submission here, possibly sending data to a backend
  // };

  const goToNextStep = () => {
    setStep(step + 1);
  };

  // const goToPreviousStep = () => {
  //   setStep(step - 1);
  // };

  return (
    <div>
      {step === 1 && (
        <BasicInformation formData={formData} handleChange={handleChange} nextStep={goToNextStep} />
      )}
      {/* {step === 2 && (
        <ContactInformation
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          previousStep={goToPreviousStep}
        />
      )} */}
    </div>
  );
}

export default CompanyRegistration;
