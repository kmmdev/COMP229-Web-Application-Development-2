import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Layout() {
  const location = useLocation();

  const navStyle = {
    backgroundColor: '#2c3e50',
    padding: '1rem 0',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    position: 'sticky',
    top: '0',
    zIndex: '100'
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 1rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap'
  };

  const logoContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    textDecoration: 'none'
  };

  const logoShapeStyle = {
    width: '50px',
    height: '50px',
    background: 'linear-gradient(135deg, #3498db, #2ecc71)',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: 'white',
    boxShadow: '0 4px 12px rgba(52, 152, 219, 0.3)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease'
  };

  const logoTextStyle = {
    color: '#ecf0f1',
    fontSize: '1.4rem',
    fontWeight: 'bold',
    letterSpacing: '0.5px'
  };

  const navLinksStyle = {
    display: 'flex',
    listStyle: 'none',
    margin: 0,
    padding: 0,
    gap: '1.5rem'
  };

  const linkStyle = {
    color: '#ecf0f1',
    textDecoration: 'none',
    padding: '0.5rem 1rem',
    borderRadius: '25px',
    transition: 'all 0.3s ease',
    fontSize: '1rem',
    fontWeight: '500',
    border: '2px solid transparent'
  };

  const activeLinkStyle = {
    ...linkStyle,
    backgroundColor: '#3498db',
    fontWeight: 'bold',
    border: '2px solid #3498db',
    boxShadow: '0 4px 8px rgba(52, 152, 219, 0.3)'
  };

  return (
    <>
      <nav style={navStyle}>
        <div style={containerStyle} className="nav-container">
          <Link to="/" style={logoContainerStyle}>
            <div 
              className="logo-shape"
              style={logoShapeStyle}
              onMouseEnter={(e) => {
                e.target.style.transform = 'scale(1.1) rotate(5deg)';
                e.target.style.boxShadow = '0 6px 20px rgba(52, 152, 219, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1) rotate(0deg)';
                e.target.style.boxShadow = '0 4px 12px rgba(52, 152, 219, 0.3)';
              }}
            >
              MK
            </div>
            <span style={logoTextStyle}>My Portfolio</span>
          </Link>
          <ul style={navLinksStyle} className="nav-links">
            <li>
              <Link 
                to="/" 
                className="nav-link"
                style={location.pathname === '/' ? activeLinkStyle : linkStyle}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/About" 
                className="nav-link"
                style={location.pathname === '/About' ? activeLinkStyle : linkStyle}
              >
                About Me
              </Link>
            </li>
            <li>
              <Link 
                to="/Services" 
                className="nav-link"
                style={location.pathname === '/Services' ? activeLinkStyle : linkStyle}
              >
                Services
              </Link>
            </li>
            <li>
              <Link 
                to="/project" 
                className="nav-link"
                style={location.pathname === '/project' ? activeLinkStyle : linkStyle}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                className="nav-link"
                style={location.pathname === '/contact' ? activeLinkStyle : linkStyle}
              >
                Contact Me
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
