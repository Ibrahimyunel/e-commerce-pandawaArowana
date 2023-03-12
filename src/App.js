import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Navbar from './Navbar';
import Home from './components/Home';
import Registration from './components/Registration';
import Login from './components/Login';
import { AuthProvider } from './context/AuthProvider';
import Upload from './components/Upload';
import Contact from './components/Contact';
import NoPage from './components/NoPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path='upload' element={<Upload />} />
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
