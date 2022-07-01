import { useGlobal } from "../context/GlobalContext";
import { products } from "../data";

function FilterByBrand() {
  const { handleProductsByBrand, handleAllProducts } = useGlobal();
  
  const capitalized = [...new Set(products.map((product) => product.fields.company))].map((product) => product.charAt(0).toUpperCase() + product.slice(1));

  return (
    <div>
      <button className="company-btn" onClick={handleAllProducts}>All</button>
      {capitalized.map((product) => (
        <button key={product} className="company-btn" onClick={handleProductsByBrand}>
          {product}
        </button>
      ))}
    </div>
  );
}

export default FilterByBrand;
