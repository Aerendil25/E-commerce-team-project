import { useGlobal } from "../context/GlobalContext";
export default function Cart() {
  const { productsInCart, handleCloseCart } = useGlobal();
  const itemPrice = productsInCart.map((item) => item.fields.price);
  const totalPrice = itemPrice.reduce((acc, item) => (acc += item), 0);
  console.log(totalPrice);

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
            {productsInCart.map((product) => (
              <div>
                <div>{product.fields.name}</div>
                <div>${product.fields.price}</div>
                <button>remove</button>
              </div>
            ))}
          </div>
          <footer>
            <h3 className="cart-total text-slanted">total : ${totalPrice}</h3>
            <button className="cart-checkout btn">checkout</button>
          </footer>
        </aside>
      </div>
    </div>
  );
}
