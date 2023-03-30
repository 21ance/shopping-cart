import { useState } from "react";
import { useLocation } from "react-router-dom";
import ProductImageSlider from "./ProductImageSlider";
import ExtraDetails from "./ExtraDetails";
import {
  MdFavoriteBorder,
  MdFavorite,
  MdOutlineShoppingBag,
  MdOutlineLocalShipping,
  MdShoppingBag,
} from "react-icons/md";
// import Counter from "../Counter";

const ProductDetails = (props) => {
  const location = useLocation();
  const item = location.state.item;
  const [mainImage, setMainImage] = useState(item.images[0].baseUrl);

  const { setCart, favorites, setFavorites } = props;
  // const [quantity, setQuantity] = useState(0);
  const [size, setSize] = useState("Select Size");
  const [message, setMessage] = useState("");
  const [isFavorite, setIsFavorite] = useState(() => {
    return favorites.filter((e) => e.id === item.code).length !== 0
      ? true
      : false;
  });

  function handleMouseOver(e) {
    setMainImage(e.target.src);
  }

  function handleMouseOut() {
    setMainImage(item.images[0].baseUrl);
  }

  function handleAddToBag() {
    if (size === "Select Size") {
      setMessage("Please select a size before adding to bag");
      return;
    }
    setCart((prev) => [
      ...prev,
      {
        id: item.code,
        product: item.name,
        price: item.price.value,
        size: size,
        quantity: 1,
      },
    ]);
  }

  function handleAddToFav() {
    if (favorites.filter((e) => e.id === item.code).length === 0) {
      setIsFavorite(true);
      setFavorites((prev) => [
        ...prev,
        {
          id: item.code,
          product: item.name,
          price: item.price.value,
          size: size,
          quantity: 1,
        },
      ]);
    } else {
      setIsFavorite(false);
      setFavorites(
        favorites.filter((fav) => {
          return fav.id !== item.code;
        })
      );
    }
  }

  return (
    <main className="product-details">
      <figure className="product-images">
        <ProductImageSlider
          mainImage={item.images[0].baseUrl}
          imageList={item.galleryImages}
          handleMouseOver={handleMouseOver}
          handleMouseOut={handleMouseOut}
        />
        <img src={mainImage} alt="main_image" className="main-image" />
        <span className="add-favorite" onClick={handleAddToFav}>
          {isFavorite ? <MdFavorite /> : <MdFavoriteBorder />}
        </span>
      </figure>
      <aside className="product-rightside">
        <h3>{item.name}</h3>
        <span className="product-price">${item.price.value}</span>
        <select
          name="Size"
          id="productSize"
          onChange={(e) => {
            setSize(e.target.value);
            setMessage("");
          }}
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
        {message !== "" && <p className="error-message">{message}</p>}
        {/* <Counter isTitle={true} quantity={quantity} setQuantity={setQuantity} /> */}
        <button className="button-add-bag" onClick={handleAddToBag}>
          <MdShoppingBag /> Add to bag
        </button>
        <ExtraDetails />
      </aside>
    </main>
  );
};

export default ProductDetails;
