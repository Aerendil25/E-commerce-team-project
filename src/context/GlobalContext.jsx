import { createContext, useContext, useEffect, useState } from "react";
import { products } from "../data";

const GlobalContext = createContext();
export const GlobalProvider = ({ children }) => {
  const [productsData, setProductsData] = useState(products);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <GlobalContext.Provider
      value={{ productsData, setProductsData, isLoading, setIsLoading }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobal = () => useContext(GlobalContext);
