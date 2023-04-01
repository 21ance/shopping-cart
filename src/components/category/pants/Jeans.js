import { CategoryTitle, CategoryLink } from "../CategoryPage";

const Jeans = () => {
  return (
    <div className="category">
      <CategoryTitle title="Jeans" />
      <CategoryLink categoryName="Tapered" />
      <CategoryLink categoryName="Skinny" />
      <CategoryLink categoryName="Slim" />
      <CategoryLink categoryName="Regular" />
      <CategoryLink categoryName="Loose" />
    </div>
  );
};

export default Jeans;
