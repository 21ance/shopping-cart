import { CategoryTitle, CategoryLink } from "../CategoryPage";

const Shoes = () => {
  return (
    <div className="category">
      <CategoryTitle title="Shoes" />
      <CategoryLink categoryName="Sneakers" />
      <CategoryLink categoryName="Slippers" />
      <CategoryLink categoryName="Sandals" />
      <CategoryLink categoryName="Boots" />
      <CategoryLink categoryName="Loafers" />
    </div>
  );
};

export default Shoes;
