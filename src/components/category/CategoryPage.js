import { Link, NavLink, useLocation, useParams } from "react-router-dom";
import Shirts from "./tops/Shirt";
import Hoodies from "./tops/Hoodies";
import Trousers from "./pants/Trousers";
import Jeans from "./pants/Jeans";
import Shoes from "./shoes/Shoes";
import ProductPreview from "../product/ProductPreview";
import MobileCategoryList from "../mobile/category/MobileCategoryList";
import CategoryToggle from "../mobile/category/CategoryToggle";
import { useEffect, useRef, useState } from "react";
import db from "../../data/db";

const CategoryPage = () => {
  const { categoryType } = useParams();
  const location = useLocation();
  const data = db[categoryType].results;
  const mainRef = useRef();
  const [toggleStatus, setToggleStatus] = useState(true);

  function handleToggle() {
    setToggleStatus(!toggleStatus);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    mainRef.current.scrollTo(0, 0);
  }, [categoryType]);

  return (
    <div className="category-container">
      <aside className="category-list">
        <Shirts />
        <Hoodies />
        <Trousers />
        <Jeans />
        <Shoes />
      </aside>
      <main className="product-display" ref={mainRef}>
        <div className="page-title">
          <h1>{categoryType}</h1>
          <CategoryToggle
            toggleStatus={toggleStatus}
            handleClick={handleToggle}
          />
        </div>
        <MobileCategoryList toggleStatus={toggleStatus} />
        {data.map((item) => {
          return (
            <Link
              key={item.code}
              to={`${location.pathname}/${item.code}`}
              className="remove-link-style dark-font"
            >
              <ProductPreview
                name={item.name}
                defaultImage={item.articles[0].logoPicture[0].url}
                hoveredImage={item.galleryImages[0].url}
                // hoveredImage={item.images[0].url}
                // defaultImage={item.images[0].url}
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
      to={`/${categoryName.toLowerCase()}`}
      className={({ isActive }) =>
        (isActive ? "link-active" : "") + " category-link remove-link-style"
      }
    >
      <span>{categoryName}</span>
    </NavLink>
  );
};

export { CategoryPage, CategoryTitle, CategoryLink };
