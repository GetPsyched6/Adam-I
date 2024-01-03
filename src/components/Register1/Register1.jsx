import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Register1.module.css';
import NavBar from '../Navbar/Navbar';
import InputBox from '../InputBox/InputBox';
import Button from '../Button/Button';

function Register1() {
  const navigate = useNavigate();

  const handleSubmit = event => {
    event.preventDefault();
    navigate('/register-2');
  };

  const [formData, setFormData] = React.useState({
    companyname: '',
    bussinestype: '',
    nofemployees: '',
    year: '',
    city: '',
    postcode: '',
    industry: '',
    password: '',
    Address: '',
    Country: '',
  });

  const handleChange = event => {
    const { name, value } = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <div className={styles.container}>
      <NavBar />
      <div className={styles['sub-container']}>
        <form className={styles.Form} onSubmit={handleSubmit}>
          <h3>Company Registration</h3>
          <h5>Basic Information(1 of 2)</h5>
          <div className={styles['input-group']}>
            <InputBox
              id="companyname"
              label="Company Name*"
              required
              name="companyname"
              onChange={event => {
                handleChange(event);
              }}
              value={formData.companyname}
              size="large"
            />
            <InputBox
              id="businesstype"
              label="Business Type*"
              required
              name="bussinestype"
              onChange={event => {
                handleChange(event);
              }}
              value={formData.bussinestype}
              size="large"
            />
          </div>

          <div className={styles['input-group']}>
            <InputBox
              id="nofemployees"
              label="Number Of Employees*"
              required
              name="nofemployees"
              onChange={event => {
                handleChange(event);
              }}
              value={formData.nofemployees}
              size="large"
            />
            <InputBox
              id="year"
              label="Year of Establishment*"
              required
              name="year"
              onChange={event => {
                handleChange(event);
              }}
              value={formData.year}
              size="large"
            />
          </div>

          <div className={styles['input-group']}>
            <InputBox
              isDropdown
              size="small"
              label="Select Country"
              onChange={event => {
                handleChange(event);
              }}
              value={formData.Country}
            >
              <option value="india">India</option>
              <option value="america">America</option>
              <option value="africa">Africa</option>
              <option value="japan">Japan</option>
              <option value="italy">Italy</option>
            </InputBox>
            <InputBox
              id="city"
              label="City*"
              required
              name="city"
              onChange={event => {
                handleChange(event);
              }}
              value={formData.city}
              size="small"
            />
            <InputBox
              id="postcode"
              label="Post Code"
              required
              name="postcode"
              onChange={event => {
                handleChange(event);
              }}
              value={formData.postcode}
              size="small"
            />
          </div>

          <div className={styles['input-group']}>
            <InputBox
              id="industry"
              label="Industry*"
              required
              name="industry"
              onChange={event => {
                handleChange(event);
              }}
              value={formData.industry}
              size="large"
            />
          </div>
          <div className={styles['input-group']}>
            <InputBox
              id="password"
              label="Account Password*"
              required
              name="password"
              onChange={event => {
                handleChange(event);
              }}
              value={formData.password}
              size="large"
            />
          </div>

          <div className={styles['input-group']} />
          <div>
            <InputBox
              id="address"
              label="Company Address*"
              required
              isAddress
              name="Address"
              onChange={event => {
                handleChange(event);
              }}
              value={formData.Address}
              size="large"
            />
          </div>

          <div className={styles.Login}>
            Have an account? <a href="/login">Login</a>
          </div>
          <Button isSubmit text="Next" />
          <div className={styles.about_company}>
            <div className={styles.aboutus}>© 2023 - Invest Africa :: Powered by Adam-i Japan</div>
            <div className={styles.invest}>
              Shaping tomorrow together, Invest in Africa&apos;s potential.
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register1;
