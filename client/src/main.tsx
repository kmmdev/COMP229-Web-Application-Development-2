/*
 * File name: main.tsx
 * Student's Name: Manoj Kumar
 * Student ID: 301433020
 * Date: September 26, 2025
 * Description: Application entry point and root rendering
 */

// ===== IMPORT STATEMENTS =====
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// ===== APPLICATION INITIALIZATION AND RENDERING =====
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
