import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Navbar from './Navbar';
import Home from './pages/Home';
import Registration from './pages/Registration';
import Login from './pages/Login';
import { AuthProvider } from './context/AuthProvider';
import Contact from './pages/Contact';
import NoPage from './pages/NoPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path='contact' element={<Contact />} />
          <Route path='*' element={<NoPage />} />
        </Route>
        <Route path='registration' element={<Registration />} />
        <Route path='login' element={<AuthProvider><Login /></AuthProvider>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
