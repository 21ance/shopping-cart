import Casual from "../../images/categories/casual.jpg";
import Hoodie from "../../images/categories/hoodie.avif";
import Jeans from "../../images/categories/jeans.avif";
import Shorts from "../../images/categories/shorts.avif";

const TopCategories = () => {
  return (
    <section className="section-top-categories">
      <h2>TOP CATEGORIES</h2>
      <div className="categories-container">
        <Category title="Casual" backgroundImage={Casual} />
        <Category title="Hoodie" backgroundImage={Hoodie} />
        <Category title="Jeans" backgroundImage={Jeans} />
        <Category title="Shorts" backgroundImage={Shorts} />
      </div>
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
