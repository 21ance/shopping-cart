import { Link, NavLink, useLocation, useParams } from "react-router-dom";
import Shirts from "./Shirt";
import ProductPreview from "../product/ProductPreview";
import { useEffect } from "react";
import db from "../../data/db";

const CategoryPage = () => {
  const { categoryType } = useParams();
  const location = useLocation();
  const data = db[categoryType].results;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [categoryType]);

  return (
    <div className="category-container">
      <aside className="category-list">
        <Shirts />
      </aside>
      <main className="product-display">
        {/* {location.pathname} */}
        {data.map((item) => {
          return (
            <Link
              key={item.code}
              to={`${location.pathname}/${item.code}`}
              // state={{ item }}
              className="remove-link-style dark-font"
            >
              <ProductPreview
                name={item.name}
                // defaultImage={item.articles[0].logoPicture[0].baseUrl}
                // hoveredImage={item.images[0].baseUrl}
                defaultImage={item.images[0].baseUrl}
                price={item.price.value}
              />
            </Link>
          );
        })}
      </main>
    </div>
  );
};

const CategoryTitle = (props) => {
  const { title } = props;
  return <span className="title">{title}</span>;
};

const CategoryLink = (props) => {
  const { categoryName, data } = props;

  return (
    <NavLink
      to={`/categories/${categoryName.toLowerCase()}`}
      className={({ isActive }) =>
        (isActive ? "link-active" : "link") + " category-link remove-link-style"
      }
      state={{ data }}
    >
      <span>{categoryName}</span>
    </NavLink>
  );
};

export { CategoryPage, CategoryTitle, CategoryLink };
