import './App.css';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/Login' element={<Login/>} />
        <Route path='/Signup' element={<Signup/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App