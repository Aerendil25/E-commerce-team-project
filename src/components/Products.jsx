import Product from "./Product";
import Hero from "./Hero";
export default function Products() {
  return (
    <div>
      <Hero />
      <div class="sidebar-overlay">
        <aside class="sidebar">
          <button class="sidebar-close">
            <i class="fas fa-times"></i>
          </button>
          <ul class="sidebar-links">
            <li>
              <a href="index.html" class="sidebar-link">
                <i class="fas fa-home fa-fw"></i>
                home
              </a>
            </li>
            <li>
              <a href="products.html" class="sidebar-link">
                <i class="fas fa-couch fa-fw"></i>
                products
              </a>
            </li>
            <li>
              <a href="about.html" class="sidebar-link">
                <i class="fas fa-book fa-fw"></i>
                about
              </a>
            </li>
          </ul>
        </aside>
      </div>

      <section class="products">
        <div class="filters">
          <div class="filters-container">
            <form class="input-form">
              <input type="text" class="search-input" placeholder="search..." />
            </form>
            <h4>Company</h4>
            <article class="companies">
              <button class="company-btn">all</button>
              <button class="company-btn">ikea</button>
            </article>
            <h4>Price</h4>
            <form class="price-form">
              <input
                type="range"
                class="price-filter"
                min="0"
                value="50"
                max="100"
              />
            </form>
            <p class="price-value"></p>
          </div>
        </div>
        <div class="products-container">
          <Product />
        </div>
      </section>
    </div>
  );
}
