import { createContext, useContext, useState } from "react";
import { products } from "../data";

const GlobalContext = createContext();
export const GlobalProvider = ({ children }) => {
  const [productsData, setProductsData] = useState(products);
  const [productsInCart, setProductsInCart] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isCart, setIsCart] = useState(false);
  const [filteredProductsData, setFilteredProductsData] = useState([
    ...products,
  ]);
  const [selectedProduct, setSelectedProduct] = useState({})
  const uniqueProductsInCart = Array.from(new Set(productsInCart));
  const [rangeValue, setRangeValue] = useState("");

  const handleAddToCart = (product, e) => {
    e.preventDefault();
    let found = productsData.find((data) => data.id === product.id);
    found
      ? setProductsInCart([...productsInCart, product])
      : setProductsInCart([...productsInCart]);

    setIsCart(!isCart);
  };

  const handleDeleteFromCart = (product, e) => {
    e.preventDefault();
    let foundIndex = productsInCart.findIndex((data) => data.id === product.id);
    console.log(foundIndex);
    productsInCart.splice(foundIndex, 1);

    setIsCart(!isCart);
  };

  const handleProductsByBrand = (e) => {
    const filteredProductsData = productsData.filter(
      (item) =>
        item.fields.company.charAt(0).toUpperCase() +
          item.fields.company.slice(1) ===
        e.target.innerText
    );
    setFilteredProductsData(filteredProductsData);
  };

  const handleSearch = (e) => {
    const filterData = productsData.filter((product) =>
      product.fields.name.includes(e.target.value)
    );
    setFilteredProductsData(filterData);
  };

  const handleAllProducts = () => {
    setFilteredProductsData([...products]);
  };

  const handleRange = () => {
    // const rangeProducts = productsData.filter(product => product.fields.price >= rangeValue && product)
    // console.log(rangeProducts);
  };
  console.log(rangeValue);

  return (
    <GlobalContext.Provider
      value={{
        productsData,
        setProductsData,
        isLoading,
        setIsLoading,
        handleAddToCart,
        productsInCart,
        setProductsInCart,
        isCart,
        setIsCart,
        handleRange,
        handleProductsByBrand,
        filteredProductsData,
        handleAllProducts,
        handleSearch,
        selectedProduct,
        setSelectedProduct,
        uniqueProductsInCart,
        handleDeleteFromCart,
        rangeValue,
        setRangeValue,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobal = () => useContext(GlobalContext);
