import { createContext, useContext, useState } from "react";
import { products } from "../data";

const GlobalContext = createContext();
export const GlobalProvider = ({ children }) => {
  const [productsData, setProductsData] = useState(products);
  const [productsInCart, setProductsInCart] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isCart, setIsCart] = useState(false);

  const handleAddToCart = (product, e) => {
    e.preventDefault();
    let found = productsData.find((data) => data.id === product.id);
    found
      ? setProductsInCart([...productsInCart, product])
      : setProductsInCart([...productsInCart]);

    setIsCart(!isCart);
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
        handleCloseCart
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobal = () => useContext(GlobalContext);
