import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/homepage/Header";
import HomePage from "./components/homepage/HomePage";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};
export default RouteSwitch;
