import React from 'react';

export default function Services() {
  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '2rem',
  };

  const headerStyle = {
    textAlign: 'center',
    marginBottom: '3rem',
    borderBottom: '3px solid #3498db',
    paddingBottom: '1rem'
  };

  const servicesGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '2rem',
    marginBottom: '3rem'
  };

  const serviceCardStyle = {
    backgroundColor: '#ffffff',
    borderRadius: '15px',
    boxShadow: '0 6px 20px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    border: '1px solid #ecf0f1'
  };

  const serviceImageStyle = {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    backgroundColor: '#ecf0f1'
  };

  const serviceImagePlaceholderStyle = {
    width: '100%',
    height: '200px',
    backgroundColor: '#3498db',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '3rem',
    color: 'white',
    background: 'linear-gradient(135deg, #3498db, #2ecc71)'
  };

  const serviceContentStyle = {
    padding: '1.5rem'
  };

  const serviceTitleStyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: '1rem'
  };

  const serviceDescriptionStyle = {
    fontSize: '1rem',
    lineHeight: '1.6',
    color: '#34495e',
    marginBottom: '1rem'
  };

  const featureListStyle = {
    listStyle: 'none',
    padding: 0,
    margin: '1rem 0'
  };

  const featureItemStyle = {
    padding: '0.3rem 0',
    fontSize: '0.9rem',
    color: '#34495e',
    borderLeft: '3px solid #3498db',
    paddingLeft: '1rem',
    marginBottom: '0.5rem'
  };

  const priceStyle = {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: '#3498db',
    marginTop: '1rem'
  };

 
  const services = [
    {
      id: 1,
      title: "Web Development",
      description: "Custom web applications built with modern technologies. From responsive websites to complex web platforms, I create solutions that are fast, secure, and user-friendly.",
      features: [
        "Responsive Design & Mobile Optimization",
        "React, Angular, Vue.js Development",
        "Backend API Development (Node.js, .NET)",
        "Database Design & Integration",
        "E-commerce Solutions",
        "Performance Optimization"
      ],
      imagePath: "/service-web.jpg",
      imageAlt: "Web Development Service",
      icon: "💻"
    },
    {
      id: 2,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android. Creating engaging mobile experiences with modern frameworks and best practices.",
      features: [
        "Cross-Platform Apps (React Native, Flutter)",
        "Native iOS & Android Development",
        "UI/UX Design Implementation",
        "API Integration & Backend Services",
        "App Store Deployment",
        "Maintenance & Updates"
      ],
      imagePath: "/service-mobile.jpg",
      imageAlt: "Mobile App Development Service",
      icon: "📱"
    },
    {
      id: 3,
      title: "DevOps & Cloud Services",
      description: "Streamline your development workflow with CI/CD pipelines, cloud infrastructure setup, and automated deployment solutions for scalable applications.",
      features: [
        "CI/CD Pipeline Setup (GitHub Actions, Azure DevOps)",
        "Cloud Infrastructure (AWS, Azure, Google Cloud)",
        "Docker Containerization",
        "Kubernetes Orchestration",
        "Monitoring & Logging Solutions",
        "Security Implementation"
      ],
      imagePath: "/service-devops.jpg",
      imageAlt: "DevOps and Cloud Services",
      icon: "☁️"
    },
   
  ];

  return (
    <div className="page-content">
      <div style={containerStyle}>
        <header style={headerStyle}>
          <h1 style={{ fontSize: '3rem', color: '#2c3e50', margin: 0 }}>
            My Services
          </h1>
          <p style={{ 
            fontSize: '1.2rem', 
            color: '#7f8c8d', 
            marginTop: '1rem',
            maxWidth: '700px',
            margin: '1rem auto 0'
          }}>
            Professional development services. 
            From concept to deployment, I provide comprehensive solutions for your technology needs.
          </p>
        </header>

        <div style={servicesGridStyle}>
          {services.map((service) => (
            <div 
              key={service.id}
              style={serviceCardStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.1)';
              }}
            >
              {/* Service Image */}
              <img 
                src={service.imagePath} 
                alt={service.imageAlt}
                style={serviceImageStyle}
                onError={(e) => {
                  // Fallback to placeholder if image doesn't exist
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div 
                style={{...serviceImagePlaceholderStyle, display: 'none'}}
                className="service-image-placeholder"
              >
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '4rem', marginBottom: '0.5rem' }}>
                    {service.icon}
                  </div>
                  <div style={{ fontSize: '1rem', opacity: '0.9' }}>
                    {service.title}
                  </div>
                </div>
              </div>

              <div style={serviceContentStyle}>
                <h2 style={serviceTitleStyle}>{service.title}</h2>
                <p style={serviceDescriptionStyle}>{service.description}</p>

                <h4 style={{ 
                  color: '#2c3e50', 
                  marginBottom: '0.5rem',
                  fontSize: '1rem'
                }}>
                  What's Included:
                </h4>
                <ul style={featureListStyle}>
                  {service.features.map((feature, index) => (
                    <li key={index} style={featureItemStyle}>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div style={priceStyle}>
                  {service.pricing}
                </div>
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </div>
  );
}
