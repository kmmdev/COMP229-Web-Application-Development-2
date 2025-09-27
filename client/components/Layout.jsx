/*
 * File name: Layout.jsx
 * Student's Name: Manoj Kumar
 * Student ID: 301433020
 * Date: September 26, 2025
 * Description: Navigation layout component with custom MK logo and responsive menu
 */

// ===== IMPORT STATEMENTS =====
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

// ===== LAYOUT COMPONENT WITH NAVIGATION =====
export default function Layout() {
  // Get current location for active navigation highlighting
  const currentPageLocation = useLocation();

  // ===== NAVIGATION BAR STYLING =====
  const navigationBarStyle = {
    backgroundColor: '#2c3e50',
    padding: '1rem 0',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    position: 'sticky',
    top: '0',
    zIndex: '100'
  };

  const navigationContainerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 1rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap'
  };

  const brandLogoContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    textDecoration: 'none'
  };

  const customMKLogoStyle = {
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

  const portfolioBrandTextStyle = {
    color: '#ecf0f1',
    fontSize: '1.4rem',
    fontWeight: 'bold',
    letterSpacing: '0.5px'
  };

  const navigationLinksListStyle = {
    display: 'flex',
    listStyle: 'none',
    margin: 0,
    padding: 0,
    gap: '1.5rem'
  };

  const navigationLinkStyle = {
    color: '#ecf0f1',
    textDecoration: 'none',
    padding: '0.5rem 1rem',
    borderRadius: '25px',
    transition: 'all 0.3s ease',
    fontSize: '1rem',
    fontWeight: '500',
    border: '2px solid transparent'
  };

  const activeNavigationLinkStyle = {
    ...navigationLinkStyle,
    backgroundColor: '#3498db',
    fontWeight: 'bold',
    border: '2px solid #3498db',
    boxShadow: '0 4px 8px rgba(52, 152, 219, 0.3)'
  };

  return (
    <>
      <nav style={navigationBarStyle}>
        <div style={navigationContainerStyle} className="nav-container">
          <Link to="/" style={brandLogoContainerStyle}>
            <div 
              className="logo-shape"
              style={customMKLogoStyle}
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
            <span style={portfolioBrandTextStyle}>My Portfolio</span>
          </Link>
          <ul style={navigationLinksListStyle} className="nav-links">
            <li>
              <Link 
                to="/" 
                className="nav-link"
                style={currentPageLocation.pathname === '/' ? activeNavigationLinkStyle : navigationLinkStyle}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/About" 
                className="nav-link"
                style={currentPageLocation.pathname === '/About' ? activeNavigationLinkStyle : navigationLinkStyle}
              >
                About Me
              </Link>
            </li>
            <li>
              <Link 
                to="/Services" 
                className="nav-link"
                style={currentPageLocation.pathname === '/Services' ? activeNavigationLinkStyle : navigationLinkStyle}
              >
                Services
              </Link>
            </li>
            <li>
              <Link 
                to="/project" 
                className="nav-link"
                style={currentPageLocation.pathname === '/project' ? activeNavigationLinkStyle : navigationLinkStyle}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                className="nav-link"
                style={currentPageLocation.pathname === '/contact' ? activeNavigationLinkStyle : navigationLinkStyle}
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
