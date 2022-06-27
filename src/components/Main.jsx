import Navbar from "./Navbar";
import Products from "./Products";
import Home from "./Home";
import About from "./About";
import Cart from "./Cart";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Main = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Main;
