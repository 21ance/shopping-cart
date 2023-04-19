import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import ProductImageSlider from "./ProductImageSlider";
import ExtraDetails from "./ExtraDetails";
import { MdFavoriteBorder, MdFavorite, MdShoppingBag } from "react-icons/md";
import AddedToCart from "../popup/AddedToCart";
import db from "../../data/db";

const ProductDetails = (props) => {
  const location = useLocation();
  const { category, itemCode } = useParams();
  const item = db[category].results.filter((obj) => {
    return obj.code === itemCode;
  });
  const [mainImage, setMainImage] = useState(item[0].images[0].baseUrl);
  const { setCart, favorites, setFavorites } = props;
  const [size, setSize] = useState("Select Size");
  const [message, setMessage] = useState("");
  const [notifStatus, setNotifStatus] = useState(false);
  const [isFavorite, setIsFavorite] = useState(() => {
    return favorites.filter((e) => e.id === item[0].code).length !== 0
      ? true
      : false;
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function handleMouseOver(e) {
    setMainImage(e.target.src);
  }

  function handleMouseOut() {
    setMainImage(item[0].images[0].baseUrl);
  }

  function handleAddToBag() {
    if (size === "Select Size") {
      setMessage("Please select a size before adding to bag");
      return;
    }

    setNotifStatus(true);
    setCart((prev) => {
      if (
        prev.length === 0 ||
        !prev.some((prod) => prod.id === item[0].code && prod.size === size)
      ) {
        return [
          ...prev,
          {
            id: item[0].code,
            name: item[0].name,
            price: item[0].price.value,
            size: size,
            image: item[0].images[0].url,
            quantity: 1,
            url: location.pathname,
          },
        ];
      } else {
        return prev.map((prod) => {
          if (prod.id + prod.size === item[0].code + size) {
            return {
              ...prod,
              quantity: prod.quantity < 10 ? prod.quantity + 1 : 10,
            };
          } else {
            return prod;
          }
        });
      }
    });
  }

  function handleAddToFav() {
    if (favorites.filter((e) => e.id === item[0].code).length === 0) {
      setIsFavorite(true);
      setFavorites((prev) => [
        ...prev,
        {
          id: item[0].code,
          product: item[0].name,
          price: item[0].price.value,
          size: size,
          quantity: 1,
        },
      ]);
    } else {
      setIsFavorite(false);
      setFavorites(
        favorites.filter((fav) => {
          return fav.id !== item[0].code;
        })
      );
    }
  }

  return (
    <main className="product-details">
      <figure className="product-images">
        <ProductImageSlider
          mainImage={item[0].images[0].url}
          imageList={item[0].galleryImages}
          handleMouseOver={handleMouseOver}
          handleMouseOut={handleMouseOut}
        />
        <img src={mainImage} alt="main_image" className="main-image" />
        <span className="add-favorite" onClick={handleAddToFav}>
          {isFavorite ? <MdFavorite /> : <MdFavoriteBorder />}
        </span>
      </figure>
      <aside className="product-rightside">
        <h3>{item[0].name}</h3>
        <span className="product-price">${item[0].price.value}</span>
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
          {item[0].variantSizes
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
        <button className="button-add-bag" onClick={handleAddToBag}>
          <MdShoppingBag /> Add to bag
        </button>
        <ExtraDetails />
      </aside>
      <AddedToCart notifStatus={notifStatus} setNotifStatus={setNotifStatus} />
    </main>
  );
};

export default ProductDetails;
