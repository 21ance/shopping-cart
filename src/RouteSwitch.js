import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Cover from "./components/Cover";
const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Header />
      <Cover />
      <Routes>{/* <Route /> */}</Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
