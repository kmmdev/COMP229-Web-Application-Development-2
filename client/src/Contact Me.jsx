import React from 'react';

export default function Contact() {
  const containerStyle = {
    maxWidth: '1000px',
    margin: '0 auto',
    padding: '2rem',
  };

  const headerStyle = {
    textAlign: 'center',
    marginBottom: '3rem',
    borderBottom: '3px solid #3498db',
    paddingBottom: '1rem'
  };

  const contactGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
    marginBottom: '3rem'
  };

  const contactPanelStyle = {
    backgroundColor: '#ffffff',
    borderRadius: '15px',
    boxShadow: '0 6px 20px rgba(0, 0, 0, 0.1)',
    padding: '2rem',
    border: '1px solid #ecf0f1',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease'
  };

  const panelHeaderStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    marginBottom: '1.5rem',
    paddingBottom: '1rem',
    borderBottom: '2px solid #ecf0f1'
  };

  const iconStyle = {
    fontSize: '2rem',
    width: '60px',
    height: '60px',
    backgroundColor: '#3498db',
    color: 'white',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0
  };

  const panelTitleStyle = {
    fontSize: '1.3rem',
    fontWeight: 'bold',
    color: '#2c3e50',
    margin: 0
  };

  const contactInfoStyle = {
    fontSize: '1rem',
    color: '#34495e',
    lineHeight: '1.6',
    margin: '0.5rem 0'
  };

  const linkStyle = {
    color: '#3498db',
    textDecoration: 'none',
    fontWeight: '500',
    transition: 'color 0.3s ease'
  };

  const formStyle = {
    backgroundColor: '#f8f9fa',
    borderRadius: '15px',
    padding: '2rem',
    marginTop: '2rem',
    border: '1px solid #e9ecef'
  };

  const inputStyle = {
    width: '100%',
    padding: '12px',
    margin: '0.5rem 0',
    border: '2px solid #ecf0f1',
    borderRadius: '8px',
    fontSize: '1rem',
    boxSizing: 'border-box',
    transition: 'border-color 0.3s ease'
  };

  const textareaStyle = {
    ...inputStyle,
    minHeight: '120px',
    resize: 'vertical'
  };

  const buttonStyle = {
    backgroundColor: '#3498db',
    color: 'white',
    padding: '12px 30px',
    border: 'none',
    borderRadius: '25px',
    fontSize: '1rem',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 8px rgba(52, 152, 219, 0.3)'
  };

  return (
    <div className="page-content">
      <div style={containerStyle}>
        <header style={headerStyle}>
          <h1 style={{ fontSize: '3rem', color: '#2c3e50', margin: 0 }}>
            Contact Me
          </h1>
          <p style={{ 
            fontSize: '1.2rem', 
            color: '#7f8c8d', 
            marginTop: '1rem',
            maxWidth: '600px',
            margin: '1rem auto 0'
          }}>
            Ready to bring your project to life? Let's connect and discuss how I can help you achieve your goals.
          </p>
        </header>

        <div style={contactGridStyle}>
          {/* Email Panel */}
          <div 
            style={contactPanelStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.1)';
            }}
          >
            <div style={panelHeaderStyle}>
              <div style={iconStyle}>📧</div>
              <h3 style={panelTitleStyle}>Email</h3>
            </div>
            <div style={contactInfoStyle}>
              <a 
                href="mailto:your.email@example.com" 
                style={linkStyle}
                onMouseEnter={(e) => e.target.style.color = '#2980b9'}
                onMouseLeave={(e) => e.target.style.color = '#3498db'}
              >
                your.email@example.com
              </a>
            </div>
            <div style={{...contactInfoStyle, fontSize: '0.9rem', color: '#7f8c8d'}}>
              Professional inquiries and project discussions
            </div>
          </div>

          {/* Phone Panel */}
          <div 
            style={contactPanelStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.1)';
            }}
          >
            <div style={panelHeaderStyle}>
              <div style={iconStyle}>📞</div>
              <h3 style={panelTitleStyle}>Phone</h3>
            </div>
            <div style={contactInfoStyle}>
              <a 
                href="tel:+1234567890" 
                style={linkStyle}
                onMouseEnter={(e) => e.target.style.color = '#2980b9'}
                onMouseLeave={(e) => e.target.style.color = '#3498db'}
              >
                +1 (234) 567-8900
              </a>
            </div>
            <div style={{...contactInfoStyle, fontSize: '0.9rem', color: '#7f8c8d'}}>
              Available Mon-Fri, 9AM-6PM EST
            </div>
          </div>                     
        </div>

        <div style={formStyle}>
          <h3 style={{ 
            textAlign: 'center', 
            color: '#2c3e50', 
            marginBottom: '1.5rem',
            fontSize: '1.5rem'
          }}>
            Send Me a Message
          </h3>
          <form>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
              <input 
                type="text" 
                placeholder="Your Name" 
                style={inputStyle}
                onFocus={(e) => e.target.style.borderColor = '#3498db'}
                onBlur={(e) => e.target.style.borderColor = '#ecf0f1'}
              />
              <input 
                type="email" 
                placeholder="Your Email" 
                style={inputStyle}
                onFocus={(e) => e.target.style.borderColor = '#3498db'}
                onBlur={(e) => e.target.style.borderColor = '#ecf0f1'}
              />
            </div>
            <input 
              type="text" 
              placeholder="Subject" 
              style={inputStyle}
              onFocus={(e) => e.target.style.borderColor = '#3498db'}
              onBlur={(e) => e.target.style.borderColor = '#ecf0f1'}
            />
            <textarea 
              placeholder="Your Message" 
              style={textareaStyle}
              onFocus={(e) => e.target.style.borderColor = '#3498db'}
              onBlur={(e) => e.target.style.borderColor = '#ecf0f1'}
            ></textarea>
            <div style={{ textAlign: 'center', marginTop: '1rem' }}>
              <button 
                type="submit" 
                style={buttonStyle}
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
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
