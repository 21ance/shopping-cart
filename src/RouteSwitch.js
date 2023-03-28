import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>{/* <Route /> */}</Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
