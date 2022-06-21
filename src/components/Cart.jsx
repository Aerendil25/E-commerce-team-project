export default function Cart() {
    return (
      <div class="cart-overlay">
        <aside class="cart">
          <button class="cart-close">
            <i class="fas fa-times"></i>
          </button>
          <header>
            <h3 class="text-slanted">your bag</h3>
          </header>
          <div class="cart-items"></div>
          <footer>
            <h3 class="cart-total text-slanted">total : $12.99</h3>
            <button class="cart-checkout btn">checkout</button>
          </footer>
        </aside>
      </div>
    );
  }
  