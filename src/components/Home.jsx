import { Link } from "react-router-dom";
import Featured from "./Featured";

export default function Home() {
  return (
    <div className="home">
      <div className="background"></div>
      <div className="flex">
        <div className="home-children">
          <h1>Rest, Relax, Unwind</h1>
          <h3>Embrace your choices - we do</h3>
          <Link to="/products" className="hero-btn ">
            Show now
          </Link>
        </div>
        <div className="home-children2">
          <h2>Featured</h2>
          <Featured />
          <Link to="/products" className="btn all-products">
            All products
          </Link>
        </div>
      </div>
    </div>
  );
}
