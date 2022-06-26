import Product from "./Product";
import Hero from "./Hero";
import { useGlobal } from "../context/GlobalContext";
export default function Products() {
  const { productsData } = useGlobal();

  return (
    <div>
      <Hero />
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
            {/* Arina's part start */}
            <h4>Price</h4>
            <form class="price-form">
              <input
                type="range"
                class="price-filter"
                min="0"
                max="100"
              />
            </form>
            <p class="price-value"></p>
            {/* Arina's part end */}
          </div>
        </div>
        <div class="products-container">
          {productsData.map((product) =>
            <Product product={product} />
          )}
        </div>
      </section>
    </div>
  );
}
