import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './BasicInformation.module.css';
import NavBar from '../../components/Navbar/Navbar';
import InputBox from '../../components/InputBox/InputBox';
import Button from '../../components/Button/Button';

function BasicInformation() {
  const navigate = useNavigate();

  const handleSubmit = event => {
    event.preventDefault();
    navigate('/contactregister');
  };

  const [formData, setFormData] = React.useState({
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
  });

  const handleChange = event => {
    const { name, value } = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <>
      <NavBar />
      <div className={styles.wrapper}>
        <div className={styles.image_wrapper}>
          <div className={styles.title_wrapper}>
            <h2>Company Registration</h2>
            <h5>Basic Information (1 of 2)</h5>
          </div>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.input_group}>
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
                name="businesstype"
                onChange={event => {
                  handleChange(event);
                }}
                value={formData.businesstype}
                size="large"
              />
            </div>

            <div className={styles.input_group}>
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

            <div className={styles.input_group}>
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

            <div className={styles.input_group}>
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
            <div className={styles.input_group}>
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

            <div className={styles.input_group} />
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

            <div className={styles.login_link}>
              Have an account? <a href="/login">Login</a>
            </div>
            <Button isSubmit text="Next" />
          </form>
          <div className={styles.about_wrapper}>
            <div className={styles.aboutus}>© 2023 - Invest Africa :: Powered by Adam-i Japan</div>
            <div className={styles.invest}>
              Shaping tomorrow together, Invest in Africa&apos;s potential.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BasicInformation;
