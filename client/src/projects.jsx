import React from 'react';

export default function Projects() {
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

  const projectsGridStyle = {
    display: 'grid',
    gap: '3rem',
    marginBottom: '2rem'
  };

  const projectCardStyle = {
    backgroundColor: '#ffffff',
    borderRadius: '15px',
    boxShadow: '0 6px 20px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease'
  };

  const projectImageStyle = {
    width: '100%',
    height: '300px',
    objectFit: 'cover',
    backgroundColor: '#ecf0f1'
  };

  const projectImagePlaceholderStyle = {
    width: '100%',
    height: '300px',
    backgroundColor: '#ecf0f1',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '3rem',
    color: '#7f8c8d',
    border: '2px dashed #bdc3c7'
  };

  const projectContentStyle = {
    padding: '2rem'
  };

  const projectTitleStyle = {
    fontSize: '1.8rem',
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: '0.5rem'
  };

  const projectSubtitleStyle = {
    fontSize: '1rem',
    color: '#3498db',
    marginBottom: '1.5rem',
    fontWeight: '500'
  };

  const projectDescriptionStyle = {
    fontSize: '1rem',
    lineHeight: '1.6',
    color: '#34495e',
    marginBottom: '1.5rem'
  };

  const roleOutcomeStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '1.5rem',
    marginTop: '1.5rem'
  };

  const sectionStyle = {
    padding: '1rem',
    backgroundColor: '#f8f9fa',
    borderRadius: '8px',
    border: '1px solid #e9ecef'
  };

  const sectionTitleStyle = {
    fontSize: '1rem',
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: '0.5rem'
  };

  const sectionContentStyle = {
    fontSize: '0.9rem',
    color: '#34495e',
    lineHeight: '1.5'
  };

  const techStackStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
    marginTop: '1rem'
  };

  const techTagStyle = {
    padding: '0.3rem 0.8rem',
    backgroundColor: '#3498db',
    color: 'white',
    borderRadius: '15px',
    fontSize: '0.8rem',
    fontWeight: '500'
  };

  const projects = [
    {
      id: 1,
      title: "Mobile Banking App Prototype",
      subtitle: "Mobile Development & Security Focus",
      description: "A secure mobile banking application prototype featuring account management, transaction history, fund transfers, and biometric authentication. Emphasis on security, user experience, and compliance with banking regulations.",
      role: "Mobile App Developer and Security Specialist, handling app architecture, security implementation, biometric integration, and compliance testing.",
      outcome: "Created fully functional prototype with bank-level security features. Passed security audit with zero vulnerabilities and achieved 95% user satisfaction in testing.",
      technologies: ["React Native", "Firebase", "Biometric Auth", "Encryption", "REST API"],
      imageAlt: "Mobile Banking App Screenshots",
      imagePath: "/project1.jpg"
    },
    {
      id: 2,
      title: "Task Management Dashboard",
      subtitle: "React & API Integration Project",
      description: "An intuitive project management tool designed to streamline team collaboration and productivity. Features include task assignment, progress tracking, deadline management, and real-time notifications with a clean, user-friendly interface.",
      role: "Frontend Developer and UI/UX Designer, responsible for creating responsive components, API integration, and designing the user experience workflow.",
      outcome: "Increased team productivity by 35% and reduced project completion time by 25%. Implemented real-time updates improving team communication efficiency.",
      technologies: ["React", "REST API", "CSS3", "JavaScript", "Chart.js"],
      imageAlt: "Task Management Dashboard Interface",
      imagePath: "/project2.jpg"
    },
    {
      id: 3,
      title: "Azure DevOps to GitHub Migration",
      subtitle: "Enterprise DevOps Migration & Automation",
      description: "Led a comprehensive migration of enterprise development workflows from Azure DevOps to GitHub Enterprise. This project involved migrating repositories, build pipelines, work items, and establishing new CI/CD processes using GitHub Actions. Ensured zero downtime during transition and maintained development velocity throughout the migration process.",
      role: "DevOps Migration Lead responsible for migration strategy planning, repository transfers, pipeline conversions, team training, and establishing new GitHub workflows and security policies.",
      outcome: "Successfully migrated 200+ repositories and 200+ pipelines with zero data loss. Reduced build times by 30% and improved developer productivity by 25%. Trained 100+ team members on new GitHub workflows.",
      technologies: ["GitHub Actions", "Azure DevOps", "PowerShell", "YAML", "Git", "Docker"],
      imageAlt: "DevOps Migration Dashboard",
      imagePath: "/project3.jpg"
    }
  ];

  return (
    <div className="page-content">
      <div style={containerStyle}>
        <header style={headerStyle}>
          <h1 style={{ fontSize: '3rem', color: '#2c3e50', margin: 0 }}>
            My Projects
          </h1>
          <p style={{ 
            fontSize: '1.2rem', 
            color: '#7f8c8d', 
            marginTop: '1rem',
            maxWidth: '600px',
            margin: '1rem auto 0'
          }}>
            A showcase of my technical skills and professional accomplishments through hands-on projects
          </p>
        </header>

        <div style={projectsGridStyle}>
          {projects.map((project) => (
            <div 
              key={project.id}
              style={projectCardStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.1)';
              }}
            >
              <img 
                src={project.imagePath} 
                alt={project.imageAlt}
                style={projectImageStyle}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div 
                style={{...projectImagePlaceholderStyle, display: 'none'}}
                className="image-placeholder"
              >
                Project Image
                <div style={{
                  position: 'absolute',
                  bottom: '10px',
                  fontSize: '0.8rem',
                  color: '#95a5a6',
                  textAlign: 'center'
                }}>
                  Add {project.imagePath} to public folder
                </div>
              </div>

              <div style={projectContentStyle}>
                <h2 style={projectTitleStyle}>{project.title}</h2>
                <p style={projectSubtitleStyle}>{project.subtitle}</p>
                <p style={projectDescriptionStyle}>{project.description}</p>

                {/* Technology Stack */}
                <div style={techStackStyle}>
                  {project.technologies.map((tech, index) => (
                    <span key={index} style={techTagStyle}>
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Role and Outcome */}
                <div style={roleOutcomeStyle}>
                  <div style={sectionStyle}>
                    <h4 style={sectionTitleStyle}>My Role</h4>
                    <p style={sectionContentStyle}>{project.role}</p>
                  </div>
                  <div style={sectionStyle}>
                    <h4 style={sectionTitleStyle}>Outcome</h4>
                    <p style={sectionContentStyle}>{project.outcome}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
       
      </div>
    </div>
  );
}
