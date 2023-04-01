import { CategoryTitle, CategoryLink } from "../CategoryPage";

const Shirts = () => {
  return (
    <div className="category">
      <CategoryTitle title="Shirts" />
      <CategoryLink categoryName="Casual" />
      <CategoryLink categoryName="Shortsleeve" />
      <CategoryLink categoryName="Longsleeve" />
      <CategoryLink categoryName="Denim" />
      <CategoryLink categoryName="Flannel" />
    </div>
  );
};

export default Shirts;
