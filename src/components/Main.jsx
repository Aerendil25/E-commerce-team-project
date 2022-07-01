import Navbar from "./Navbar";
import Products from "./Products";
import Home from "./Home";
import About from "./About";
import Cart from "./Cart";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductDetails from "./ProductDetails";
import Loading from "./Loading";
import { useState } from "react";

const Main = () => {

  const [isLoading, setIsLoading] = useState(true)

  setTimeout(() => {
    setIsLoading(false)
  }, 500)

  return (
    <>
      {isLoading ? <Loading /> :
        <BrowserRouter>
          <>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/products" element={<Products />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/productDetails" element={<ProductDetails />} />
            </Routes>
          </>
        </BrowserRouter>
      }
    </>
  );
};

export default Main;
