import React from 'react';

const navStyles = {
  backgroundColor: 'white',
  color: 'black',
  padding: '25px 20px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  position: 'sticky',
};

const logoStyles = {
  fontSize: '25px',
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
  fontSize: '25px',
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
