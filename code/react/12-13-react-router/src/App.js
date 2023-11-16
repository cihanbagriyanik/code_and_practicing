import React from "react";
import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
import MyNavbar from "./components/MyNavbar";
import Teacher from "./pages/Teacher";
import CourseCard from "./pages/CourseCard";
import ContactForm from "./pages/ContactForm";
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

        <Route path="/contact" element={<ContactForm />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
