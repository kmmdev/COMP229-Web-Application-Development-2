/*
 * File name: MainRouter.jsx
 * Student's Name: Manoj Kumar
 * Student ID: [Your Student ID]
 * Date: September 26, 2025
 * Description: Main routing component for portfolio navigation
 */

// ===== IMPORT STATEMENTS =====
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './src/About Me'
import Contact from './src/Contact Me'
import Services from './src/Services'
import Projects from './src/projects'
import Layout from './components/Layout'

// ===== MAIN ROUTER COMPONENT =====
const MainRouter = () => {
     return (
         <div>
              {/* Navigation Layout Component */}
              <Layout/>
              
              {/* Route Definitions for Portfolio Pages */}
              <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route exact path="/About" element={<About />} />
                        <Route exact path="/Services" element={<Services />} />
                        <Route exact path="/project" element={<Projects />} />
                        <Route exact path="/contact" element={<Contact />} />
              </Routes>
         </div>
     )
}
export default MainRouter
