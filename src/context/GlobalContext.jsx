import { createContext, useContext, useEffect, useState } from "react";
import { products } from "../data";

const GlobalContext = createContext();
export const GlobalProvider = ({ children }) => {
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    setProductsData(products);
  }, []);
  console.log(productsData);

  // const fetchData = () => {

  // }

  return (
    <GlobalContext.Provider value={{ productsData, setProductsData }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobal = () => useContext(GlobalContext);
