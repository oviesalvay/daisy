// import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
// import { lazy } from 'react';
// import AuthenticatedRoute from './utils/authRoute';
import Navbar from '../src/component/navbar';
import Footer from '../src/component/footer';
import Signup from './pages/register/signup';
import Home from '../src/pages/home';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        {/* <Suspense fallback={<Loader />}> */}
        <Routes>
          <Route path="./" element={<Home />} />
          <Route path='signup' element={<Signup />} />

        </Routes>
        {/* </Suspense> */}
        <Footer />
      </BrowserRouter>

    </>
  );
};

export default App
