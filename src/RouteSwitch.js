import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./components/homepage/HomePage";
import ProductDetails from "./components/product/ProductDetails";
import { CategoryPage } from "./components/category/CategoryPage";
import Cart from "./components/cart/Cart";

const RouteSwitch = () => {
  const [cart, setCart] = useState(() => {
    if (JSON.parse(localStorage.getItem("cart") !== null)) {
      return JSON.parse(localStorage.getItem("cart"));
    }
    return [];
  });

  const [favorites, setFavorites] = useState(() => {
    if (JSON.parse(localStorage.getItem("wishlist") !== null)) {
      return JSON.parse(localStorage.getItem("wishlist"));
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("wishlist", JSON.stringify(favorites));
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
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
      </Routes>
    </BrowserRouter>
  );
};
export default RouteSwitch;
