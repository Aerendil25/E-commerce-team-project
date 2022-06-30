import { Link } from "react-router-dom";
import { useGlobal } from "../context/GlobalContext";
const HamburgerModal = () => {
  const { hamburgerShow } = useGlobal();
  return (
    <div className={hamburgerShow && "sidebar-overlay show"}>
      <div className="sidebar">
        <button className="sidebar-close">
          <i class="fa-solid fa-xmark"></i>
        </button>
        <div className="sidebar-links">
          <div>
            <Link to="/" className="sidebar-link">
              <i class="fa-solid fa-house-chimney"></i>
              home
            </Link>
          </div>
          <div>
            <Link to="/products" className="sidebar-link">
              <i class="fa-solid fa-couch"></i>
              products
            </Link>
          </div>
          <div>
            <Link to="/about" className="sidebar-link">
              <i class="fa-solid fa-book-open"></i>
              about
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HamburgerModal;
