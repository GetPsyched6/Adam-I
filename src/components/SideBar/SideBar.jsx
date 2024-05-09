import React, { useState } from 'react';
import DownArrow from '../../assets/fonts/down-arrow-svgrepo-com.svg';
import './SideBar.css';

function SideBar() {
  const [DropDown1, SetDropDown1] = useState(false);
  const [DropDown2, SetDropDown2] = useState(false);
  const HandleEnter = () => {
    SetDropDown1(true);
  };
  const HandleLeave = () => {
    SetDropDown1(false);
    SetDropDown2(false);
  };
  const HandleEnter2 = () => {
    SetDropDown2(true);
  };

  return (
    <div className="sidebar">
      <h5>Investor’s guide to Nigeria</h5>
      <div className="wrapper">
        <div className="sub_wrapper" onMouseLeave={HandleLeave}>
          <div onMouseEnter={HandleEnter} className="heading">
            <span>Investment Opportunities</span>
            <img
              src={DownArrow}
              className={`image ${DropDown1 ? 'show' : 'hide'}`}
              alt="down"
              height="40"
              width="40"
            />
          </div>
          <hr />
          <div className={`link ${DropDown1 ? 'show' : 'hide'}`}>
            <a href="/home" className="sublink">
              <span className="verticalBar" />
              <p>Infrastructure</p>
            </a>
            <a href="/home" className="sublink">
              <span className="verticalBar" />
              <p>Extractive Industries</p>
            </a>
            <a href="/home" className="sublink">
              <span className="verticalBar" />
              <p>Manufacturing</p>
            </a>
            <a href="/home" className="sublink">
              <span className="verticalBar" />
              <p>Pharmacuticals</p>
            </a>
            <a href="/home" className="sublink">
              <span className="verticalBar" />
              <p>Automotive Industry</p>
            </a>
            <a href="/home" className="sublink">
              <span className="verticalBar" />
              <p>Services</p>
            </a>
            <a href="/home" className="sublink">
              <span className="verticalBar" />
              <p>Agriculture</p>
            </a>
            <a href="/home" className="sublink">
              <span className="verticalBar" />
              <p>Education</p>
            </a>
          </div>
        </div>
        <div className="sub_wrapper">
          <a href="/home" className="">
            <p className="heading">Opportunities in states</p>
          </a>
          <hr />
        </div>
        <div className="sub_wrapper" onMouseLeave={HandleLeave}>
          <div onMouseEnter={HandleEnter2} className="heading">
            <span>Free Trade Zones</span>
            <img
              src={DownArrow}
              className={`image ${DropDown2 ? 'show' : 'hide'}`}
              alt="down"
              height="25"
              width="25"
            />
          </div>
          <hr />
          <div className={`link ${DropDown2 ? 'show' : 'hide'}`}>
            <a href="/home" className="sublink">
              <span className="verticalBar" />
              <p>Available Business Incentives</p>
            </a>
            <a href="/home" className="sublink">
              <span className="verticalBar" />
              <p>Activities Permitted in Exports</p>
            </a>
            <a href="/home" className="sublink">
              <span className="verticalBar" />
              <p>Firm Characteristics in SEZo</p>
            </a>
          </div>
        </div>
        <div className="sub_wrapper">
          <a href="/home" className="">
            <p className="heading">Statistics</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
