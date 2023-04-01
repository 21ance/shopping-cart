import { Link, NavLink, useLocation, useParams } from "react-router-dom";
import Shirts from "./tops/Shirt";
import Hoodies from "./tops/Hoodies";
import Trousers from "./pants/Trousers";
import Jeans from "./pants/Jeans";
import Shoes from "./shoes/Shoes";
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
        <NavLink
          to={`/categories/new_arrival`}
          className={({ isActive }) =>
            (isActive ? "link-active" : "link") + " solo-link remove-link-style"
          }
        >
          <CategoryTitle title="New Arrival" />
        </NavLink>
        <Shirts />
        <Hoodies />
        <Trousers />
        <Jeans />
        <Shoes />
      </aside>
      <main className="product-display">
        <h1 className="page-title">{categoryType}</h1>
        {data.map((item) => {
          return (
            <Link
              key={item.code}
              to={`${location.pathname}/${item.code}`}
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
  const { categoryName } = props;

  return (
    <NavLink
      to={`/categories/${categoryName.toLowerCase()}`}
      className={({ isActive }) =>
        (isActive ? "link-active" : "link") + " category-link remove-link-style"
      }
    >
      <span>{categoryName}</span>
    </NavLink>
  );
};

export { CategoryPage, CategoryTitle, CategoryLink };
