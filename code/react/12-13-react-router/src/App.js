import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./pages/Home";
import Footer from "./components/Footer";
import MyNavbar from "./components/MyNavbar";
import Teacher from "./pages/Teacher";
import CourseCard from "./pages/CourseCard";
import ContactForm from "./pages/ContactForm";
import CardDetails from "./pages/CardDetails";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <MyNavbar />
      {/* "/" (ana yol) tüm yollara dahil edilmiştir, bu nedenle onu "/" ile
      başlayan diğer yollardan ayırt etmek için exact anahtar kelimesine sahip
      olması gerekir . */}

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/teacher" element={<Teacher />} />
        <Route path="/courses" element={<CourseCard />} />
        <Route path="/courses/:namE" element={<CardDetails />} />

        <Route path="/contact" element={<ContactForm />} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
