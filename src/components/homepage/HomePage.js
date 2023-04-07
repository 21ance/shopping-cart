import Cover from "./Cover";
import PopularProducts from "./PopularProducts";
import TopCategories from "./TopCategories";
// import Banner from "./Banner";
import AboutUs from "./AboutUs";

const HomePage = () => {
  return (
    <>
      <Cover />
      <PopularProducts />
      {/* <Banner /> */}
      <TopCategories />
      <AboutUs />
    </>
  );
};

export default HomePage;
