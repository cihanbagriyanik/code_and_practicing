import Main from "./pages/Main";
import NewProduct from "./pages/NewProduct";
import ProductList from "./pages/ProductList";
import About from "./pages/About";
import Navbar from "./components/Navbar";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  return (
    <Router className="bg-light app">
      <Navbar />

      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/newproduct" element={<NewProduct />} />
        <Route path="/productlist" element={<ProductList />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
