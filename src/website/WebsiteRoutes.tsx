// import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import AboutUs from './pages/about/AboutUs';
import Home from './pages/home/Home';

import Account from './pages/account/createAccount/Account';
import Login from './pages/account/login/Login';
import UserSignup from './pages/account/usersignup/UserSignup';
import TeamSignup from './pages/account/teamsignup/TeamSignup';
import { FC, useState } from 'react';
const WebsiteRoutes: FC = () => {
  return (
    <>
      {/* <BrowserRouter> */}
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/account" element={<Account />} />
          <Route path="/login" element={<Login />} />
          <Route path="/usersignup" element={<UserSignup />} />
          <Route path="/teamsignup" element={<TeamSignup />} />
        </Routes>
        {/* <Footer /> */}
      {/* </BrowserRouter> */}
    </>
  );
};

export default WebsiteRoutes;
