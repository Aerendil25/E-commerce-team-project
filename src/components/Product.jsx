
export default function Product({ product }) {

  return (
    <article className="product">
      <div className="product-container">
        <img className="product-img img"
          src={product.fields.image[0].url} alt="Not available" />
      </div>
      <footer className="footer">
        <h4 className="product-name">{product.fields.name}</h4>
        <p className="product-price">${formatProductPrice(product.fields.price)}</p>
      </footer>
    </article>
  );
}

/* 
  function takes price in integer [ number ] format and converts it to price format by getting the last 2 digits
  as cents [decimals] and adds them to integer part of price
*/
const formatProductPrice = (price) => {
  let decimalPart = (price % 100) / 100
  let intPart = Math.floor(price / 100)
  return intPart + decimalPart
}
