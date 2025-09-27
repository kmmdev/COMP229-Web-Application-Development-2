/*
 * File name: build.js
 * Student's Name: Manoj Kumar
 * Student ID: 301546699
 * Date: September 26, 2025
 * Description: Build script to generate static HTML from EJS templates
 */

const fs = require('fs');
const path = require('path');
const ejs = require('ejs');

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
        "Performance Optimization & SEO"
      ]
    },
    {
      id: 2,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android. Focus on user experience, performance, and security.",
      features: [
        "React Native & Flutter Development",
        "Native iOS (Swift) & Android (Kotlin)",
        "API Integration & Backend Services",
        "App Store Deployment & Optimization",
        "Security & Authentication Implementation"
      ]
    },
    {
      id: 3,
      title: "DevOps & Cloud Solutions",
      description: "Cloud infrastructure setup, CI/CD pipelines, and DevOps automation to streamline development and deployment processes.",
      features: [
        "AWS, Azure, Google Cloud Platform",
        "Docker & Kubernetes Orchestration",
        "CI/CD Pipeline Setup (GitHub Actions, Jenkins)",
        "Infrastructure as Code (Terraform, ARM)",
        "Monitoring & Logging Solutions"
      ]
    }
  ]
};

// ===== BUILD PAGES =====
const pages = [
  { template: 'index', filename: 'index.html', title: 'Home - Manoj Kumar Portfolio', page: 'home' },
  { template: 'about', filename: 'about.html', title: 'About - Manoj Kumar Portfolio', page: 'about' },
  { template: 'projects', filename: 'projects.html', title: 'Projects - Manoj Kumar Portfolio', page: 'projects' },
  { template: 'services', filename: 'services.html', title: 'Services - Manoj Kumar Portfolio', page: 'services' },
  { template: 'contact', filename: 'contact.html', title: 'Contact - Manoj Kumar Portfolio', page: 'contact' }
];

// Create public directory if it doesn't exist
const publicDir = path.join(__dirname, 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Generate static HTML files
pages.forEach(page => {
  const templatePath = path.join(__dirname, 'views', `${page.template}.ejs`);
  const outputPath = path.join(publicDir, page.filename);
  
  try {
    const template = fs.readFileSync(templatePath, 'utf8');
    const html = ejs.render(template, {
      title: page.title,
      data: portfolioData,
      message: null,
      page: page.page
    }, {
      views: [path.join(__dirname, 'views')],
      filename: templatePath
    });
    
    fs.writeFileSync(outputPath, html);
    console.log(`✅ Generated: ${page.filename}`);
  } catch (error) {
    console.error(`❌ Error generating ${page.filename}:`, error.message);
  }
});

console.log('🎉 Static build complete!');