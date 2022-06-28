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

  const handleAddToCart = (product, e) => {
    e.preventDefault();
    let found = productsData.find((data) => data.id === product.id);
    found
      ? setProductsInCart([...productsInCart, product])
      : setProductsInCart([...productsInCart]);

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

  const handleAllProducts = () => {
    setFilteredProductsData([...products]);
  };

  const handleCloseCart =() => {}

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
        handleCloseCart,
        handleProductsByBrand,
        filteredProductsData,
        handleAllProducts
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobal = () => useContext(GlobalContext);
