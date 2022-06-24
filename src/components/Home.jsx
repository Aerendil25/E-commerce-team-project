import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
      <div className="background"></div>
      {/* <div className="flex"> */}
        <div className="home-children">
          <h1>Rest, Relax, Unwind</h1>
          <h3>Embrace your choices - we do</h3>
          <Link to="/products" id="home-btn">
            Show now
          </Link>
        </div>
        <div className="home-children2">/featured</div>
      {/* </div> */}

      
    </div>
  );
}
