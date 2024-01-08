import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Login from "../pages/login/Login";
import About from "../pages/about/About";
import Details from "../pages/details/Details";
import Home from "../pages/home/Home";
import PrivateRouter from "./PrivateRouter";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route>
          <Route path="/login" element={<Login />} />

          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/about" element={<PrivateRouter />}>
            <Route path="" element={<About />} />
          </Route>

          {/* <Route exact path="/home" element={<Home />} /> */}
          <Route path="/home" element={<PrivateRouter />}>
            <Route path="" element={<Home />} />
          </Route>

          <Route path="/details" element={<Details />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
