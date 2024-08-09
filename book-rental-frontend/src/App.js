// src/App.js
import React from 'react';

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import AdminDashboard from './components/AdminDashboard';
import OwnerDashboard from './components/OwnerDashboard';
import RenterDashboard from './components/RenterDashboard';
import Header from './components/Header'; 
import Login from './components/Login';
import Register from './components/Register';



function App() {
  return ( 
    <Router>
      <Routes>
      <Route path="/" element={<Header />} />
        
        <Route path="/admin" element={<AdminDashboard />} />

        <Route path="/owner" element={<OwnerDashboard/>} />
        <Route path="/renter" element={<RenterDashboard/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
      </Routes>
    </Router>
  );  
 
}


export default App;
