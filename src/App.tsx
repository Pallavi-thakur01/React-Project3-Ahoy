import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Login from './pages/Login';
import Passcode from './pages/Passcode';
import Location from './pages/Location';
import { Routes, Route } from "react-router-dom";
 import Dashboard from './pages/Dashboard';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';

function App() {
  return (
    <div className="App">
     

     
      <Routes>
        <Route path="/" element={<Login />}/>
        
          <Route path="passcode" element={<Passcode />} />
          <Route path="location" element={<Location />} />
          
          <Route path="login" element={<Login />} />
          <Route path="dashboard" element={<Dashboard />} />
         
           
      </Routes>
  
       {/* <Login/> */}
       {/* <Passcode/> */}
    </div>
  );
}

export default App;
