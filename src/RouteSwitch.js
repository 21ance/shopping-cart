import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/homepage/Header";
import Cover from "./components/homepage/Cover";
import PopularProducts from "./components/PopularProducts";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Header />
      <Cover />
      <PopularProducts />
      {/* <Routes><Route /></Routes> */}
    </BrowserRouter>
  );
};

export default RouteSwitch;
