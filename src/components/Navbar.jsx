import { Link } from "react-router-dom";
// import Products from "../components/Products";
// import Home from "../components/Home";
// import About from "../components/About";
export default function Navbar() {
  return (
    <nav class="navbar page">
      <div class="nav-center">
        <div>
          <button class="toggle-nav">
            <i class="fas fa-bars"></i>
          </button>
          <ul class="nav-links">
            <li>
              <Link to="/home" class="nav-link">
                home
                {/* <Home /> */}
              </Link>
            </li>
            <li>
              <Link to="/products" class="nav-link">
                products
                {/* <Products /> */}
              </Link>
            </li>
            <li>
              <Link to="/about" class="nav-link">
                about
                {/* <About /> */}
              </Link>
            </li>
          </ul>
        </div>
        <img
          src="https://vanilla-js-store.netlify.app/images/logo-black.svg"
          class="nav-logo"
          alt="logo"
        />
        <div class="toggle-container">
          <button class="toggle-cart">
            <i class="fas fa-shopping-cart"></i>
          </button>
          <span class="cart-item-count">1</span>
        </div>
      </div>
    </nav>
  );
}
