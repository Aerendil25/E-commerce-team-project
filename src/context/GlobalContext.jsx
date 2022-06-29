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

  const handleSearch = (e) => {
    const filterData = productsData.filter(
      product => product.fields.name.includes(
        e.target.value
      )
    )
    setFilteredProductsData(filterData)
  }

  const handleAllProducts = () => {
    setFilteredProductsData([...products]);
  };

  const handleCloseCart = () => { }

  /* 
    function takes price in integer [ number ] format and converts it to price format by getting the last 2 digits
    as cents [decimals] and adds them to integer part of price
  */
  const formatProductPrice = (price) => {
    let decimalPart = (price % 100) / 100;
    let intPart = Math.floor(price / 100);
    return intPart + decimalPart;
  };

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
        handleAllProducts,
        handleSearch,
        selectedProduct,
        setSelectedProduct,
        formatProductPrice
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobal = () => useContext(GlobalContext);
