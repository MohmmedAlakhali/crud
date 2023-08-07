import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './screen/Dashboard';
import Login from './screen/Login';
import Register from './screen/Register';


function App() {
  return (
    <div>
    <BrowserRouter>

      <Routes>
      <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>

    </BrowserRouter>
    </div>
  );
}

export default App;
