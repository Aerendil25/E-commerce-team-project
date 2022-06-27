import { useGlobal } from "../context/GlobalContext";
import Product from "../components/Product";
const Featured = () => {
  const { productsData } = useGlobal();
  return (
    <div  className="products-container">
      {productsData.slice(0, 3).map((product) => (
        <Product product={product} key={product.id}/>
      ))}
    </div>
  );
};

export default Featured;
