import { Link } from "react-router-dom";
import ProductPreview from "../product/ProductPreview";
import db from "../../data/db";

const fourItems = db.new_arrival.results.slice(0, 4);
const PopularProducts = () => {
  return (
    <section className="section-popular-products">
      <h2>POPULAR PRODUCTS</h2>
      <div className="popular-products">
        {fourItems.map((item) => {
          console.log(item);
          return (
            <Link
              key={item.code}
              to={`/categories/new_arrival/${item.code}`}
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
