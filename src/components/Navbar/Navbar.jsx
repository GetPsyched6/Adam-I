import React from 'react';
import dd from '../../assets/dd.png';
import i from '../../assets/logo.jpg';
import j from '../../assets/japan.jpg';
import './Navbar.css';

function Navbar2() {
  return (
    <div className="nav">
      <a href="/home" className="logo">
        <img src={i} height={75} width={75} alt="Africa Logo" />
      </a>
      <label htmlFor="menu-bar">
        <input type="checkbox" id="menu-bar" />
        Menu
      </label>
      <nav className="navbar">
        <ul>
          <li>
            <a href="/home">HOME</a>
          </li>
          <li>
            <a href="/about">
              ABOUT <img src={dd} className="Tick" height={24} width={24} alt="dd" />
            </a>
            <ul>
              <li>
                <a href="/company">COMPANY</a>
              </li>
              <li>
                <a href="/facilities">FACILITIES</a>
              </li>
              <li>
                <a href="/people">PEOPLE</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="/africa">WHY AFRICA</a>
          </li>
          <li>
            <a href="/industries">
              INDUSTRIES <img src={dd} className="Tick" height={24} width={24} alt="dd" />
            </a>
            <ul>
              <li>
                <a href="/architecture">ARCHITECTURE</a>
              </li>
              <li>
                <a href="/mining">MINING</a>
              </li>
              <li>
                <a href="/oag">OIL AND GAS</a>
              </li>
              <li>
                <a href="/electrionics">ELECTRICALS</a>
              </li>
              <li>
                <a href="/food">FOOD</a>
              </li>
              <li>
                <a href="/automabile">AUTOMOBILE</a>
              </li>
              <li>
                <a href="/aeronauticals">AERONAUTICALS</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="/countries">
              COUNTRIES <img src={dd} className="Tick" height={24} width={24} alt="dd" />
            </a>
            <ul>
              <li>
                <a href="/nigeria">NIGERIA</a>
              </li>
              <li>
                <a href="/">MORROCO</a>
              </li>
              <li>
                <a href="/">KENYA</a>
              </li>
              <li>
                <a href="/">NAMBIA</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="/">
              JP{' '}
              <span className="j">
                <img src={j} alt="j" />
              </span>
            </a>
          </li>
          <li>
            <a href="/">
              LOGIN <img src={dd} className="Tick" height={24} width={24} alt="dd" />
            </a>
            <ul>
              <li>
                <a href="/">LOGIN</a>
              </li>
              <li>
                <a href="/">COMPANY SIGN UP</a>
              </li>
              <li>
                <a href="/">USER SIGN UP</a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar2;
