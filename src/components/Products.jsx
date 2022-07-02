import Product from "./Product";
import Hero from "./Hero";
import { useGlobal } from "../context/GlobalContext";
import FilterByBrand from "./FilterByBrand";
import Search from "./Search";
import { useState } from "react";
import Loading from "./Loading";
export default function Products() {
  const {
    filteredProductsData,
    rangeValue,
    handlePriceRange,
    maxPrice
  } = useGlobal();

  const [isLoading, setIsLoading] = useState(true)

  setTimeout(() => {
    setIsLoading(false)
  }, 500)

  return (
    <>
      {
        isLoading ? <Loading /> : <div>
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
                    onChange={(e) => handlePriceRange(e.target.value)}
                    type="range"
                    className="price-filter"
                    value={rangeValue}
                    min={0}
                    max={maxPrice / 100}
                  />
                </form>
                <p className="price-value">Value: ${(rangeValue)}</p>
              </div>
            </div>
            <div className="products-container">
              {filteredProductsData.map((product) => (
                <Product product={product} key={product.id} />
              ))}
            </div>
          </section>
        </div>
      }
    </>
  );
}
