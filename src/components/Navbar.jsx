import { Link } from "react-router-dom";
import logo from "../images/logo-black.png";
import { useGlobal } from "../context/GlobalContext";
import HamburgerModal from '../components/HamburgerModal'
export default function Navbar() {
  const { productsInCart, hamburgerShow, setHamburgerShow } = useGlobal();
  return (
    <nav className="navbar page">
      <div className="nav-center">
        <div>
          <button className="toggle-nav" 
          onClick={() => setHamburgerShow(!hamburgerShow)}
          >
            <i className="fas fa-bars">
              {hamburgerShow && <HamburgerModal/>}
              
            </i>
          </button>
          <ul className="nav-links">
            <li>
              <Link to="/" className="nav-link">
                home
              </Link>
            </li>
            <li>
              <Link to="/products" className="nav-link">
                products
              </Link>
            </li>
            <li>
              <Link to="/about" className="nav-link">
                about
              </Link>
            </li>
          </ul>
        </div>
        <img src={logo} className="nav-logo" alt="logo" />
        <div className="toggle-container">
          <Link to="/cart" className="toggle-cart">
            <i className="fas fa-shopping-cart"></i>
          </Link>
          <span className="cart-item-count">{productsInCart.length}</span>
        </div>
      </div>
    </nav>
  );
}
