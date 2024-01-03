import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './ForgotPassword.css';

function ForgotPassword() {
  const navigation = useNavigate();
  const [emailDiv, setEmailDiv] = useState(true);
  const [otpDiv, setOtpDiv] = useState(false);
  return (
    <div className="container">
      <h3>Forgot Password</h3>
      {emailDiv && (
        <div className="email">
          <input type="email" className="emails" placeholder="Email" id="email" />
          <p>We will send OTP to this email </p>
          <input
            className="verifyBtn"
            type="button"
            value="Verify"
            onClick={() => {
              setEmailDiv(false);
              setOtpDiv(true);
            }}
          />
          <input
            className="backBtn"
            type="button"
            value="Back"
            onClick={() => navigation('/login')}
          />
        </div>
      )}

      {otpDiv && (
        <div className="otp">
          <input type="password" className="emails" placeholder="OTP" id="otp" />
          <input
            className="otpVerifyBtn"
            type="button"
            value="Verify"
            onClick={() => navigation('/login')}
          />
        </div>
      )}
    </div>
  );
}

export default ForgotPassword;
