import { createContext, useContext, useState } from "react";
import { products } from "../data";

const GlobalContext = createContext();
export const GlobalProvider = ({ children }) => {
  const [productsData, setProductsData] = useState(products);
  let maxPriceDetected = productsData[0].fields.price;
  let minPriceDetected = productsData[0].fields.price;
  for (let product of productsData) {
    if (product.fields.price >= maxPriceDetected) maxPriceDetected = product.fields.price;
    if (product.fields.price <= minPriceDetected) minPriceDetected = product.fields.price;
  }
  const [maxPrice, setMaxPrice] = useState(maxPriceDetected + 1)
  const [minPrice, setMinPrice] = useState(minPriceDetected)
  const [productsInCart, setProductsInCart] = useState([]);
  const [isCart, setIsCart] = useState(false);
  const [filteredProductsData, setFilteredProductsData] = useState([
    ...products,
  ]);
  const [selectedProduct, setSelectedProduct] = useState({});
  const uniqueProductsInCart = Array.from(new Set(productsInCart));
  const [rangeValue, setRangeValue] = useState(99);
  const [hamburgerShow, setHamburgerShow] = useState(false);

  const handleAddToCart = (product, e) => {
    e.preventDefault();
    let found = productsData.find((data) => data.id === product.id);
    found
      ? setProductsInCart([...productsInCart, product])
      : setProductsInCart([...productsInCart]);
    setIsCart(true);
  };

  const handleDeleteFromCart = (product, e) => {
    e.preventDefault();
    let foundIndex = productsInCart.findIndex((data) => data.id === product.id);
    productsInCart.splice(foundIndex, 1);
    setProductsInCart([...productsInCart])
  };

  const handleRemoveFromCart = (productId, e) => {
    e.preventDefault();
    setProductsInCart(
      productsInCart.filter((removed) => removed.id !== productId)
    );
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

  const handlePriceRange = (e) => {
    setRangeValue(e)
    const rangeProducts = productsData.filter(product => product.fields.price <= Math.ceil(Number(e)) * 100)
    setFilteredProductsData(rangeProducts)
  };

  const handleCartClass = () => {
    setIsCart(true)
  }

  return (
    <GlobalContext.Provider
      value={{
        productsData,
        setProductsData,
        handleAddToCart,
        productsInCart,
        setProductsInCart,
        isCart,
        setIsCart,
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
        hamburgerShow,
        setHamburgerShow,
        handleRemoveFromCart,
        handlePriceRange,
        minPrice,
        maxPrice,
        handleCartClass,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobal = () => useContext(GlobalContext);
