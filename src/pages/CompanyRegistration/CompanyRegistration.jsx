import React, { useState } from 'react';
import BasicInformation from './BasicInformation';
import ContactInformation from './ContactInformation';

function CompanyRegistration() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // All form fields initialized here
  });

  const goToNextStep = () => {
    setStep(step + 1);
  };

  const goToPreviousStep = () => {
    setStep(step - 1);
  };

  return (
    <div>
      {step === 1 && (
        <BasicInformation formData={formData} setFormData={setFormData} nextStep={goToNextStep} />
      )}
      {step === 2 && (
        <ContactInformation
          formData={formData}
          setFormData={setFormData}
          previousStep={goToPreviousStep}
        />
      )}
    </div>
  );
}

export default CompanyRegistration;
