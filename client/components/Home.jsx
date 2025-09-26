/*
 * File name: Home.jsx
 * Student's Name: Manoj Kumar
 * Student ID: 301433020
 * Date: September 26, 2025
 * Description: Home page component with hero section, mission statement, and navigation cards
 */

// ===== IMPORT STATEMENTS =====
import React from 'react';
import { Link } from 'react-router-dom';

// ===== HOME PAGE COMPONENT =====
export default function Home() {
    // ===== CALL-TO-ACTION BUTTON STYLES =====
    const primaryCallToActionButtonStyle = {
        display: 'inline-block',
        padding: '12px 24px',
        margin: '0 10px',
        backgroundColor: '#3498db',
        color: 'white',
        textDecoration: 'none',
        borderRadius: '25px',
        fontSize: '1rem',
        fontWeight: '500',
        border: 'none',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        boxShadow: '0 4px 8px rgba(52, 152, 219, 0.3)'
    };

    const secondaryCallToActionButtonStyle = {
        ...primaryCallToActionButtonStyle,
        backgroundColor: 'transparent',
        color: '#3498db',
        border: '2px solid #3498db'
    };

    return (
        <div className="page-content">
            {/* Hero Section */}
            <div style={{ textAlign: 'center', padding: '4rem 0 2rem 0' }}>
                <h1 style={{ 
                    fontSize: '3.5rem', 
                    color: '#2c3e50', 
                    marginBottom: '1rem',
                    fontWeight: 'bold',
                    lineHeight: '1.2'
                }}>
                    Hello, I'm Manoj
                </h1>
                <h2 style={{ 
                    fontSize: '1.5rem', 
                    color: '#3498db', 
                    marginBottom: '2rem',
                    fontWeight: '300'
                }}>
                    Welcome to My Digital Portfolio
                </h2>
                <p style={{ 
                    fontSize: '1.2rem', 
                    color: '#7f8c8d', 
                    maxWidth: '700px', 
                    margin: '0 auto 3rem auto',
                    lineHeight: '1.6'
                }}>
                    Explore my work, discover my skills, and let's connect to build something amazing together.
                </p>

                {/* Call-to-Action Buttons */}
                <div style={{ marginBottom: '4rem' }}>
                    <Link 
                        to="/About" 
                        style={primaryCallToActionButtonStyle}
                        onMouseEnter={(e) => {
                            e.target.style.backgroundColor = '#2980b9';
                            e.target.style.transform = 'translateY(-2px)';
                            e.target.style.boxShadow = '0 6px 12px rgba(52, 152, 219, 0.4)';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.backgroundColor = '#3498db';
                            e.target.style.transform = 'translateY(0)';
                            e.target.style.boxShadow = '0 4px 8px rgba(52, 152, 219, 0.3)';
                        }}
                    >
                        Learn About Me
                    </Link>
                    <Link 
                        to="/project" 
                        style={secondaryCallToActionButtonStyle}
                        onMouseEnter={(e) => {
                            e.target.style.backgroundColor = '#3498db';
                            e.target.style.color = 'white';
                            e.target.style.transform = 'translateY(-2px)';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.backgroundColor = 'transparent';
                            e.target.style.color = '#3498db';
                            e.target.style.transform = 'translateY(0)';
                        }}
                    >
                        View My Projects
                    </Link>
                </div>
            </div>

            {/* Mission Statement Section */}
            <div style={{ 
                backgroundColor: '#f8f9fa', 
                padding: '3rem 2rem', 
                borderRadius: '15px',
                margin: '2rem 0',
                border: '1px solid #e9ecef'
            }}>
                <h3 style={{ 
                    color: '#2c3e50', 
                    fontSize: '2rem', 
                    textAlign: 'center', 
                    marginBottom: '2rem',
                    fontWeight: 'bold'
                }}>
                    My Mission
                </h3>
                <p style={{ 
                    fontSize: '1.1rem', 
                    color: '#34495e', 
                    textAlign: 'center', 
                    maxWidth: '800px', 
                    margin: '0 auto',
                    lineHeight: '1.7',
                    fontStyle: 'italic'
                }}>
                    "To leverage technology and creativity to solve complex problems, deliver exceptional user experiences, 
                    and make a meaningful impact in everything I do. I believe in continuous learning, collaboration, 
                    and the power of innovation to drive positive change."
                </p>
            </div>

            {/* Quick Navigation Section */}
            <div style={{ 
                marginTop: '3rem', 
                padding: '2rem', 
                backgroundColor: '#ffffff', 
                borderRadius: '15px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
            }}>
                <h3 style={{ 
                    color: '#2c3e50', 
                    textAlign: 'center', 
                    marginBottom: '2rem',
                    fontSize: '1.8rem'
                }}>
                    Explore My Portfolio
                </h3>
                <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '1.5rem',
                    marginTop: '2rem'
                }}>
                    <Link to="/About" style={{ textDecoration: 'none' }}>
                        <div style={{ 
                            padding: '1.5rem', 
                            backgroundColor: '#ecf0f1', 
                            borderRadius: '10px',
                            textAlign: 'center',
                            border: '2px solid transparent',
                            transition: 'all 0.3s ease',
                            cursor: 'pointer'
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.borderColor = '#3498db';
                            e.target.style.transform = 'translateY(-3px)';
                            e.target.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.1)';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.borderColor = 'transparent';
                            e.target.style.transform = 'translateY(0)';
                            e.target.style.boxShadow = 'none';
                        }}>
                            <h4 style={{ color: '#2c3e50', marginBottom: '0.5rem' }}>About Me</h4>
                            <p style={{ color: '#7f8c8d', margin: 0 }}>My story, background & experience</p>
                        </div>
                    </Link>
                    <Link to="/Services" style={{ textDecoration: 'none' }}>
                        <div style={{ 
                            padding: '1.5rem', 
                            backgroundColor: '#ecf0f1', 
                            borderRadius: '10px',
                            textAlign: 'center',
                            border: '2px solid transparent',
                            transition: 'all 0.3s ease',
                            cursor: 'pointer'
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.borderColor = '#2ecc71';
                            e.target.style.transform = 'translateY(-3px)';
                            e.target.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.1)';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.borderColor = 'transparent';
                            e.target.style.transform = 'translateY(0)';
                            e.target.style.boxShadow = 'none';
                        }}>
                            <h4 style={{ color: '#2c3e50', marginBottom: '0.5rem' }}>Services</h4>
                            <p style={{ color: '#7f8c8d', margin: 0 }}>What I can do for you</p>
                        </div>
                    </Link>
                    <Link to="/project" style={{ textDecoration: 'none' }}>
                        <div style={{ 
                            padding: '1.5rem', 
                            backgroundColor: '#ecf0f1', 
                            borderRadius: '10px',
                            textAlign: 'center',
                            border: '2px solid transparent',
                            transition: 'all 0.3s ease',
                            cursor: 'pointer'
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.borderColor = '#e74c3c';
                            e.target.style.transform = 'translateY(-3px)';
                            e.target.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.1)';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.borderColor = 'transparent';
                            e.target.style.transform = 'translateY(0)';
                            e.target.style.boxShadow = 'none';
                        }}>
                            <h4 style={{ color: '#2c3e50', marginBottom: '0.5rem' }}>Projects</h4>
                            <p style={{ color: '#7f8c8d', margin: 0 }}>My work & achievements</p>
                        </div>
                    </Link>
                    <Link to="/contact" style={{ textDecoration: 'none' }}>
                        <div style={{ 
                            padding: '1.5rem', 
                            backgroundColor: '#ecf0f1', 
                            borderRadius: '10px',
                            textAlign: 'center',
                            border: '2px solid transparent',
                            transition: 'all 0.3s ease',
                            cursor: 'pointer'
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.borderColor = '#f39c12';
                            e.target.style.transform = 'translateY(-3px)';
                            e.target.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.1)';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.borderColor = 'transparent';
                            e.target.style.transform = 'translateY(0)';
                            e.target.style.boxShadow = 'none';
                        }}>
                            <h4 style={{ color: '#2c3e50', marginBottom: '0.5rem' }}>Contact Me</h4>
                            <p style={{ color: '#7f8c8d', margin: 0 }}>Let's connect & collaborate</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}