import { useGlobal } from "../context/GlobalContext";
export default function Product({ product }) {
  const { handleAddToCart } = useGlobal();
  return (
    <article className="product">
      <div className="product-container">
        <div className="product-icons">
          <a href="" className="product-icon">
            <i className="fa-solid fa-magnifying-glass-plus"></i>
          </a>
          <a href="" className="product-icon product-cart-btn">
            <i
              className="fa-solid fa-cart-plus"
              onClick={(e) => handleAddToCart(product, e)}
            ></i>
          </a>
        </div>
        <img
          className="product-img img"
          src={product.fields.image[0].url}
          alt="Not available"
        />
      </div>
      <footer className="footer">
        <h4 className="product-name">{product.fields.name}</h4>
        <p className="product-price">
          ${formatProductPrice(product.fields.price)}
        </p>
      </footer>
    </article>
  );
}

/* 
  function takes price in integer [ number ] format and converts it to price format by getting the last 2 digits
  as cents [decimals] and adds them to integer part of price
*/
const formatProductPrice = (price) => {
  let decimalPart = (price % 100) / 100;
  let intPart = Math.floor(price / 100);
  return intPart + decimalPart;
};
