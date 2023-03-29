import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/homepage/Header";
import HomePage from "./components/homepage/HomePage";
import ProductDetails from "./components/product/ProductDetails";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products/:itemCode" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  );
};
export default RouteSwitch;
