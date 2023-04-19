import { Link } from "react-router-dom";
import Casual from "../../images/categories/casual.jpg";
import Hoodie from "../../images/categories/hoodie.avif";
import Jeans from "../../images/categories/jeans.avif";
import Boots from "../../images/categories/boots.jpg";
import ShowMore from "./ShowMore";

const TopCategories = () => {
  return (
    <section className="section-top-categories">
      <h2>TOP CATEGORIES</h2>
      <div className="categories-container">
        <Link to={`/casual`} className="remove-link-style">
          <Category title="Casual" backgroundImage={Casual} />
        </Link>
        <Link to={`/hoodies`} className="remove-link-style">
          <Category title="Hoodies" backgroundImage={Hoodie} />
        </Link>
        <Link to={`/tapered`} className="remove-link-style">
          <Category title="Jeans" backgroundImage={Jeans} />
        </Link>
        <Link to={`/boots`} className="remove-link-style">
          <Category title="Boots" backgroundImage={Boots} />
        </Link>
      </div>
      <ShowMore link="casual" />
    </section>
  );
};

const Category = (props) => {
  const { backgroundImage, title } = props;
  return (
    <article
      className="category"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(" +
          backgroundImage +
          ") ",
      }}
      onMouseOver={(e) => {
        e.target.style.backgroundImage = "url(" + backgroundImage + ") ";
      }}
      onMouseOut={(e) => {
        e.target.style.backgroundImage =
          "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(" +
          backgroundImage +
          ") ";
      }}
    >
      <h3>{title}</h3>
    </article>
  );
};

export default TopCategories;
