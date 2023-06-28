import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Navbar from './component/navbar';
import Footer from './component/footer';
import Home from './pages/home';
import Login from '../src/pages/register/login';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

      </Routes>
      <Footer />
    </BrowserRouter>

  );
}

export default App;
