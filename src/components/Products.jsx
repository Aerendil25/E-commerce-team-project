import Product from "./Product";
import Hero from "./Hero";
import { useGlobal } from "../context/GlobalContext";
import FilterByBrand from "./FilterByBrand";
export default function Products() {
  const { productsData, filteredProductsData } = useGlobal();

  return (
    <div>
      <Hero />

      <div className="sidebar-overlay">
        <aside className="sidebar">
          <button className="sidebar-close">
            <i className="fas fa-times"></i>
          </button>
          <ul className="sidebar-links">
            <li>
              <a href="index.html" className="sidebar-link">
                <i className="fas fa-home fa-fw"></i>
                home
              </a>
            </li>
            <li>
              <a href="products.html" className="sidebar-link">
                <i className="fas fa-couch fa-fw"></i>
                products
              </a>
            </li>
            <li>
              <a href="about.html" className="sidebar-link">
                <i className="fas fa-book fa-fw"></i>
                about
              </a>
            </li>
          </ul>
        </aside>
      </div>

      <section className="products">
        <div className="filters">
          <div className="filters-container">
            <form className="input-form">
              <input type="text" className="search-input" placeholder="search..." />

            </form>
            <h4>Company</h4>
            <article className="companies">
              <FilterByBrand />
            </article>
            {/* Arina's part start */}
            <h4>Price</h4>
            <form className="price-form">
              <input
                type="range"
                className="price-filter"
                min="0"
                max="100"
              />
            </form>
            <p className="price-value"></p>
            {/* Arina's part end */}
          </div>
        </div>
        <div className="products-container">
          {filteredProductsData.map((product) =>
            <Product product={product} key={product.id} />
          )}
        </div>
      </section>
    </div>
  );
}
