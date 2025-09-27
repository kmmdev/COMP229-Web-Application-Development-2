/*
 * File name: server.js
 * Student's Name: Manoj Kumar
 * Student ID: 301546699
 * Date: September 26, 2025
 * Description: Express.js server with EJS templating for portfolio website
 */

// ===== IMPORT STATEMENTS =====
const express = require('express');
const path = require('path');
const morgan = require('morgan');

// ===== EXPRESS APP INITIALIZATION =====
const app = express();
const PORT = process.env.PORT || 3000;

// ===== MIDDLEWARE CONFIGURATION =====
app.use(morgan('combined')); // Logging middleware
app.use(express.static(path.join(__dirname, 'public'))); // Static files
app.use(express.urlencoded({ extended: true })); // Parse form data
app.use(express.json()); // Parse JSON data

// ===== VIEW ENGINE SETUP =====
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// ===== PORTFOLIO DATA =====
const portfolioData = {
  personal: {
    name: 'Manoj Kumar',
    title: 'Software Engineer',
    email: 'kumar.9195m@gmail.com',
    phone: '+1 (234) 567-8900',
    location: 'New York, NY',
    linkedin: 'https://linkedin.com/in/yourprofile',
    github: 'https://github.com/yourusername'
  },
  projects: [
    {
      id: 1,
      title: "Mobile Banking App Prototype",
      subtitle: "Mobile Development & Security Focus",
      description: "A secure mobile banking application prototype featuring account management, transaction history, fund transfers, and biometric authentication. Emphasis on security, user experience, and compliance with banking regulations.",
      role: "Mobile App Developer and Security Specialist, handling app architecture, security implementation, biometric integration, and compliance testing.",
      outcome: "Created fully functional prototype with bank-level security features. Passed security audit with zero vulnerabilities and achieved 95% user satisfaction in testing.",
      technologies: ["React Native", "Firebase", "Biometric Auth", "Encryption", "REST API"]
    },
    {
      id: 2,
      title: "Task Management Dashboard",
      subtitle: "React & API Integration Project",
      description: "An intuitive project management tool designed to streamline team collaboration and productivity. Features include task assignment, progress tracking, deadline management, and real-time notifications with a clean, user-friendly interface.",
      role: "Frontend Developer and UI/UX Designer, responsible for creating responsive components, API integration, and designing the user experience workflow.",
      outcome: "Increased team productivity by 35% and reduced project completion time by 25%. Implemented real-time updates improving team communication efficiency.",
      technologies: ["React", "REST API", "CSS3", "JavaScript", "Chart.js"]
    },
    {
      id: 3,
      title: "Azure DevOps to GitHub Migration",
      subtitle: "Enterprise DevOps Migration & Automation",
      description: "Led a comprehensive migration of enterprise development workflows from Azure DevOps to GitHub Enterprise. This project involved migrating repositories, build pipelines, work items, and establishing new CI/CD processes using GitHub Actions.",
      role: "DevOps Migration Lead responsible for migration strategy planning, repository transfers, pipeline conversions, team training, and establishing new GitHub workflows and security policies.",
      outcome: "Successfully migrated 200+ repositories and 200+ pipelines with zero data loss. Reduced build times by 30% and improved developer productivity by 25%. Trained 100+ team members on new GitHub workflows.",
      technologies: ["GitHub Actions", "Azure DevOps", "PowerShell", "YAML", "Git", "Docker"]
    }
  ],
  services: [
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
      icon: "☁️"
    }
  ]
};

// ===== ROUTE HANDLERS =====

// Home page route
app.get('/', (req, res) => {
  res.render('index', { 
    title: 'Home - Manoj Kumar Portfolio',
    page: 'home',
    data: portfolioData
  });
});

// About page route
app.get('/about', (req, res) => {
  res.render('about', { 
    title: 'About Me - Manoj Kumar Portfolio',
    page: 'about',
    data: portfolioData
  });
});

// Projects page route
app.get('/projects', (req, res) => {
  res.render('projects', { 
    title: 'Projects - Manoj Kumar Portfolio',
    page: 'projects',
    data: portfolioData
  });
});

// Services page route
app.get('/services', (req, res) => {
  res.render('services', { 
    title: 'Services - Manoj Kumar Portfolio',
    page: 'services',
    data: portfolioData
  });
});

// Contact page route
app.get('/contact', (req, res) => {
  res.render('contact', { 
    title: 'Contact Me - Manoj Kumar Portfolio',
    page: 'contact',
    data: portfolioData
  });
});

// Contact form submission
app.post('/contact', (req, res) => {
  const { name, email, subject, message } = req.body;
  
  // Here you would typically save to database or send email
  console.log('Contact form submission:', { name, email, subject, message });
  
  res.render('contact', { 
    title: 'Contact Me - Manoj Kumar Portfolio',
    page: 'contact',
    data: portfolioData,
    success: 'Thank you for your message! I will get back to you soon.'
  });
});

// ===== ERROR HANDLING =====
app.use((req, res) => {
  res.status(404).render('404', { 
    title: 'Page Not Found - Manoj Kumar Portfolio',
    page: '404'
  });
});

// ===== SERVER START =====
app.listen(PORT, () => {
  console.log(`Portfolio server running on http://localhost:${PORT}`);
});