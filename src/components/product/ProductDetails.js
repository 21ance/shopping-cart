import { useLocation } from "react-router-dom";

const ProductDetails = () => {
  const location = useLocation();
  const item = location.state.item;
  console.log(item);
  console.log(item.name);
  console.log(item.price.value);
  item.galleryImages.map((image) => {
    return console.log(image.baseUrl);
  });
  item.variantSizes.map((size) => {
    return console.log(size.filterCode);
  });
  return (
    <main>
      <span>Product Details</span>
    </main>
  );
};

export default ProductDetails;
