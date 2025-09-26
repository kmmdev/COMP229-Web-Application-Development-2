import React from 'react';

export default function About() {
  const containerStyle = {
    maxWidth: '900px',
    margin: '0 auto',
    padding: '3rem 2rem',
    backgroundColor: '#d8d5ddff',
    borderRadius: '15px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    marginTop: '2rem'
  };

  const headerStyle = {
    textAlign: 'center',
    marginBottom: '3rem',
    borderBottom: '3px solid #3498db',
    paddingBottom: '1rem'
  };

  const profileSection = {
    display: 'flex',
    alignItems: 'center',
    gap: '3rem',
    marginBottom: '3rem',
    flexWrap: 'wrap'
  };

  const imageContainerStyle = {
    flex: '0 0 250px',
    textAlign: 'center'
  };

  const imageStyle = {
    width: '250px',
    height: '250px',
    borderRadius: '50%',
    objectFit: 'cover',
    border: '5px solid #3498db',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#ecf0f1'
  };

  const placeholderImageStyle = {
    ...imageStyle,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '4rem',
    color: '#7f8c8d',
    backgroundColor: '#ecf0f1'
  };

  const contentStyle = {
    flex: '1',
    minWidth: '300px'
  };

  const nameStyle = {
    fontSize: '2.5rem',
    color: '#2c3e50',
    marginBottom: '0.5rem',
    fontWeight: 'bold'
  };

  const titleStyle = {
    fontSize: '1.3rem',
    color: '#3498db',
    marginBottom: '1.5rem',
    fontWeight: '500'
  };

  const paragraphStyle = {
    fontSize: '1.1rem',
    lineHeight: '1.7',
    color: '#34495e',
    textAlign: 'justify'
  };

  const skillsSection = {
    marginTop: '3rem',
    padding: '2rem',
    backgroundColor: '#f8f9fa',
    borderRadius: '10px',
    border: '1px solid #e9ecef'
  };

  const skillsTitle = {
    fontSize: '1.5rem',
    color: '#2c3e50',
    marginBottom: '1rem',
    textAlign: 'center'
  };

  const skillsList = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '1rem',
    listStyle: 'none',
    padding: 0,
    margin: 0
  };

  const skillItem = {
    padding: '0.5rem 1rem',
    backgroundColor: '#ffffff',
    borderRadius: '20px',
    textAlign: 'center',
    color: '#2c3e50',
    border: '2px solid #3498db',
    fontSize: '0.95rem'
  };

  return (
    <div className="page-content">
      <div style={containerStyle}>
        <header style={{ ...headerStyle, marginTop: '2rem' }}>
          <h1 style={{ fontSize: '3rem', color: '#2c3e50', margin: 0 }}>
            About Me
          </h1>
        </header>

        <div style={profileSection}>
          <div style={imageContainerStyle}>
            <div style={placeholderImageStyle}>
              MK
            </div>
            <p style={{ 
              marginTop: '1rem', 
              fontSize: '0.9rem', 
              color: '#7f8c8d',
              fontStyle: 'italic'
            }}>
            </p>
          </div>

          <div style={contentStyle}>
            <h2 style={nameStyle}>
              Manoj Kumar
            </h2>
            <h3 style={titleStyle}>
              Software Engineer
            </h3>
            <p style={paragraphStyle}>
              I am a dedicated professional with a passion for technology and innovation. 
              With a strong background in IT industry, I bring a unique blend of 
              technical expertise and creative problem-solving skills to every project I undertake. 
              My commitment to continuous learning and professional growth drives me to stay 
              current with industry trends and best practices. I thrive in collaborative 
              environments and enjoy working with teams to deliver exceptional results that 
              exceed expectations.
            </p>
          </div>
        </div>

        {/* Resume Download Section */}
        <div style={{
          marginTop: '3rem',
          textAlign: 'center',
          padding: '2rem',
          backgroundColor: '#3498db',
          color: 'white',
          borderRadius: '10px'
        }}>
          <h3 style={{ 
            margin: '0 0 1rem 0', 
            fontSize: '1.5rem',
            fontWeight: 'bold'
          }}>
            Download My Resume
          </h3>
          <p style={{ 
            margin: '0 0 1.5rem 0', 
            fontSize: '1rem',
            opacity: '0.9'
          }}>
            Get a comprehensive overview of my experience, skills, and qualifications.
          </p>
          <a
            href="/resume.pdf"
            download="Manoj_Kumar_Resume.pdf"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '12px 24px',
              backgroundColor: 'white',
              color: '#3498db',
              textDecoration: 'none',
              borderRadius: '25px',
              fontSize: '1rem',
              fontWeight: '600',
              border: '2px solid white',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = 'transparent';
              e.target.style.color = 'white';
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'white';
              e.target.style.color = '#3498db';
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
            }}
          >
            <span></span>
            Download PDF Resume
          </a>
          <div style={{
            marginTop: '1rem',
            fontSize: '0.85rem',
            opacity: '0.8'
          }}>
            <p style={{ margin: 0 }}>
            </p>
          </div>
        </div>    

      </div>
    </div>
  );
}
