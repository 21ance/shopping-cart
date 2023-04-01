import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./components/homepage/HomePage";
import ProductDetails from "./components/product/ProductDetails";
import { CategoryPage } from "./components/category/CategoryPage";

const RouteSwitch = () => {
  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    console.log(cart);
    console.log(favorites);
  }, [cart, favorites]);

  return (
    <BrowserRouter>
      <Header cart={cart} favorites={favorites} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="categories/:category/:itemCode"
          element={
            <ProductDetails
              setCart={setCart}
              favorites={favorites}
              setFavorites={setFavorites}
            />
          }
        />
        <Route path="/categories/:categoryType" element={<CategoryPage />} />
      </Routes>
    </BrowserRouter>
  );
};
export default RouteSwitch;
