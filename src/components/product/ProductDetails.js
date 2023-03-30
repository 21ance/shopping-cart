import { useState } from "react";
import { useLocation } from "react-router-dom";
import ProductImageSlider from "./ProductImageSlider";
// import Counter from "../Counter";

const ProductDetails = () => {
  const location = useLocation();
  const item = location.state.item;
  const [mainImage, setMainImage] = useState(item.images[0].baseUrl);
  // const [quantity, setQuantity] = useState(0);
  const [size, setSize] = useState("Select Size");

  function handleMouseOver(e) {
    setMainImage(e.target.src);
  }

  function handleMouseOut() {
    setMainImage(item.images[0].baseUrl);
  }

  return (
    <main className="product-details">
      <article className="product-images">
        <ProductImageSlider
          mainImage={item.images[0].baseUrl}
          imageList={item.galleryImages}
          handleMouseOver={handleMouseOver}
          handleMouseOut={handleMouseOut}
        />
        <img src={mainImage} alt="main_image" className="main-image" />
      </article>
      <aside className="product-rightside">
        <h3>{item.name}</h3>
        <span className="product-price">${item.price.value}</span>
        <select
          name="Size"
          id="productSize"
          onChange={(e) => setSize(e.target.value)}
          value={size}
        >
          <option>Select Size</option>
          {item.variantSizes
            .sort((a, b) => (a.orderFilter > b.orderFilter ? 1 : -1))
            .map((size) => {
              return (
                <option key={size.filterCode} value={size.filterCode}>
                  {size.filterCode}
                </option>
              );
            })}
        </select>
        {/* <Counter isTitle={true} quantity={quantity} setQuantity={setQuantity} /> */}
        <button className="button-add-bag">ADD TO BAG</button>
      </aside>
    </main>
  );
};

export default ProductDetails;
