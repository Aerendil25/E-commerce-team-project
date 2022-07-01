import Product from "./Product";
import Hero from "./Hero";
import { useGlobal } from "../context/GlobalContext";
import FilterByBrand from "./FilterByBrand";
import Search from "./Search";
export default function Products() {
  const { productsData, filteredProductsData, setRangeValue, rangeValue } = useGlobal();

  const minimum = productsData.reduce((prev, curr) =>
    prev.fields.price <= curr.fields.price ? prev : curr
  );
  const maximum = productsData.reduce((prev, curr) =>
    prev.fields.price >= curr.fields.price ? prev : curr
  );
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
            <Search />
            <h4>Company</h4>
            <article className="companies">
              <FilterByBrand />
            </article>
            <h4>Price</h4>
            <form className="price-form">
              <input
                onChange={(e) => setRangeValue(e.target.value)}
                type="range"
                className="price-filter"
                value={rangeValue}
                min={minimum.fields.price / 100}
                max={maximum.fields.price / 100}
              />
            </form>
            <p className="price-value"></p>
          </div>
        </div>
        <div className="products-container">
          {filteredProductsData.map((product) => (
            <Product product={product} key={product.id} />
          ))}
        </div>
      </section>
    </div>
  );
}
