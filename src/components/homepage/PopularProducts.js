import { Link } from "react-router-dom";
import ProductPreview from "../product/ProductPreview";
import NewArrival from "../../data/men-new-arrival.json";

// console.log(NewArrival.results);
const fourItems = NewArrival.results.slice(0, 4);
console.log(fourItems);
const PopularProducts = () => {
  return (
    <section className="section-popular-products">
      <h2>POPULAR PRODUCTS</h2>
      <div className="popular-products">
        {fourItems.map((item) => {
          return (
            <Link
              key={item.code}
              to={`/products/${item.code}`}
              state={{ item }}
              className="remove-link-style dark-font"
            >
              <ProductPreview
                name={item.name}
                defaultImage={item.articles[0].logoPicture[0].baseUrl}
                hoveredImage={item.images[0].baseUrl}
                price={item.price.value}
              />
            </Link>
          );
        })}
      </div>
      <button className="button-show-more">SHOW MORE</button>
    </section>
  );
};

export default PopularProducts;
