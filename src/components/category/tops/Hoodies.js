import { CategoryTitle, CategoryLink } from "../CategoryPage";

const Shirts = () => {
  return (
    <div className="category">
      <CategoryTitle title="Hoodies" />
      <CategoryLink categoryName="Hoodies" />
      <CategoryLink categoryName="Printed" />
      <CategoryLink categoryName="Sweatshirt" />
    </div>
  );
};

export default Shirts;
