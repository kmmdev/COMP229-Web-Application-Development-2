/*
 * File name: App.tsx
 * Student's Name: Manoj Kumar
 * Student ID: 301433020
 * Date: September 26, 2025
 * Description: Main application component with routing setup
 */

// ===== IMPORT STATEMENTS =====
import { BrowserRouter as Router } from 'react-router-dom';
import MainRouter from '../MainRouter';
//import Contact from './contact'
//import theme from '../theme';
//import { hot } from 'react-hot-loader'

// ===== MAIN APPLICATION COMPONENT =====
const App = () => {
  return (
   <Router>
 
       <MainRouter />

   </Router>
  );
};
 export default App;
