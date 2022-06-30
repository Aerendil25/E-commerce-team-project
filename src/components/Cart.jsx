import { useGlobal } from "../context/GlobalContext";
export default function Cart() {
  const {
    productsInCart,
    handleCloseCart,
    uniqueProductsInCart,
    handleAddToCart,
    handleDeleteFromCart,
    handleRemoveFromCart,
  } = useGlobal();
  const itemPrice = productsInCart.map((item) => item.fields.price);
  const totalPrice = itemPrice.reduce((acc, item) => (acc += item), 0);

  return (
    <div>
      <div className="cart-overlay">
        <aside className="cart">
          <button className="cart-close">
            <i className="fas fa-times" onClick={handleCloseCart}></i>
          </button>
          <header>
            <h3 className="text-slanted">your items</h3>
          </header>
          <div className="cart-items">
            {uniqueProductsInCart.map((product) => (
              <div key={product.id} className="cart-item">
                <img
                  className="cart-item-img"
                  src={product.fields.image[0].url}
                  alt="Not available"
                />
                <div>
                  <div className="cart-item-name">{product.fields.name}</div>
                  <div className="cart-item-price">
                    ${product.fields.price / 100}
                  </div>
                  <button
                    className="cart-item-remove-btn"
                    onClick={(e) => handleRemoveFromCart(product.id, e)}
                  >
                    remove
                  </button>
                </div>
                <div>
                  <button
                    onClick={(e) => handleAddToCart(product, e)}
                    className="cart-item-increase-btn"
                  >
                    <i className="fa-solid fa-chevron-up"></i>
                  </button>
                  <p className="cart-item-amount">
                    {productsInCart.filter((p) => p.id === product.id).length}
                  </p>
                  <button
                    onClick={(e) => handleDeleteFromCart(product, e)}
                    className="cart-item-decrease-btn"
                  >
                    <i className="fa-solid fa-chevron-down"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>
          <footer>
            <h3 className="cart-total text-slanted">
              total : ${totalPrice / 100}
            </h3>
            <button className="cart-checkout btn">checkout</button>
          </footer>
        </aside>
      </div>
    </div>
  );
}
