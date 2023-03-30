import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/homepage/Header";
import HomePage from "./components/homepage/HomePage";
import ProductDetails from "./components/product/ProductDetails";

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
          path="/products/:itemCode"
          element={
            <ProductDetails
              setCart={setCart}
              favorites={favorites}
              setFavorites={setFavorites}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
export default RouteSwitch;
