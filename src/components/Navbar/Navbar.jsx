import React from 'react';
import './Navbar.css';

const navStyles = {
  backgroundColor: 'white',
  color: 'black',
  padding: '10px 20px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const logoStyles = {
  fontSize: '15px',
  fontWeight: '600',
};

const navLinksStyles = {
  display: 'flex',
};

const linkStyles = {
  textDecoration: 'none',
  color: 'black',
  margin: '0 15px',
  fontWeight: '600',
  fontSize: '15px',
};

function NavBar() {
  return (
    <nav style={navStyles}>
      <div className="logo" style={logoStyles}>
        YourLogo
      </div>
      <div className="nav-links" style={navLinksStyles}>
        <a href="/home" style={linkStyles}>
          Home
        </a>
        <a href="/about" style={linkStyles}>
          About Us
        </a>
        <a href="/countries" style={linkStyles}>
          Countries
        </a>
        <a href="why" style={linkStyles}>
          Why Africa
        </a>
        <a href="/login" style={linkStyles}>
          Login
        </a>
      </div>
    </nav>
  );
}

export default NavBar;
