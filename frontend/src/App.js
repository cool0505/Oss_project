import './App.css';
import Login from './pages/Login';
//import SignUp from './pages/SignUp';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/Login' element={<Login/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

//<Route path='/SignUp' element={<SignUp/>} />