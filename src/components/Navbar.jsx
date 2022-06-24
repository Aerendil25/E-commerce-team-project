import { Link } from "react-router-dom";
// import Products from "../components/Products";
// import Home from "../components/Home";
// import About from "../components/About";
import logo from "../images/logo-black.png";
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
              <Link to="/" class="nav-link">
                home
              </Link>
            </li>
            <li>
              <Link to="/products" class="nav-link">
                products
              </Link>
            </li>
            <li>
              <Link to="/about" class="nav-link">
                about
              </Link>
            </li>
          </ul>
        </div>
        <img src={logo} class="nav-logo" alt="logo" />
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
