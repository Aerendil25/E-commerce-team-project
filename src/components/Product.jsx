import { useGlobal } from "../context/GlobalContext";
import { Link } from "react-router-dom";

export default function Product({ product }) {
  const { handleAddToCart, setSelectedProduct, isLoading } = useGlobal();
  return (
    <div>
      {isLoading ? (
        "Loading..."
      ) : (
        <article className="product">
          <div className="product-container">
            <div className="product-icons">
              <Link to="/productDetails">
                <i
                  className="fa-solid fa-magnifying-glass-plus product-icon"
                  onClick={() => {
                    setSelectedProduct(product);
                  }}
                ></i>
              </Link>
              <i
                className="fa-solid fa-cart-plus product-icon product-cart-btn"
                onClick={(e) => handleAddToCart(product, e)}
              ></i>
            </div>
            <img
              className="product-img img"
              src={product.fields.image[0].url}
              alt="Not available"
            />
          </div>
          <footer className="footer">
            <h4 className="product-name">{product.fields.name}</h4>
            <p className="product-price">${product.fields.price / 100}</p>
          </footer>
        </article>
      )}
    </div>
  );
}
