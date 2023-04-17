import { Link } from "react-router-dom";
import ProductPreview from "../product/ProductPreview";
import ShowMore from "./ShowMore";
import db from "../../data/db";

const fourItems = db.shortsleeve.results.slice(0, 4);
const PopularProducts = () => {
  return (
    <section className="section-popular-products">
      <h2>POPULAR PRODUCTS</h2>
      <div className="popular-products">
        {fourItems.map((item) => {
          return (
            <Link
              key={item.code}
              to={`/shortsleeve/${item.code}`}
              className="remove-link-style dark-font"
            >
              <ProductPreview
                name={item.name}
                defaultImage={item.articles[0].logoPicture[0].url}
                hoveredImage={item.images[0].url}
                price={item.price.value}
              />
            </Link>
          );
        })}
      </div>
      <ShowMore link="shortsleeve" />
    </section>
  );
};

export default PopularProducts;
