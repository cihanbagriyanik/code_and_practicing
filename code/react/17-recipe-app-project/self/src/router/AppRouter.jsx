import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import MyNavbar from "../components/navbar/Navbar";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Details from "../pages/details/Details";
import Login from "../pages/login/Login";

const AppRouter = () => {
  return (
    <Router>
      <MyNavbar />
      <Routes >
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/details" element={<Details />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
