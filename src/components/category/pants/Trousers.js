import { CategoryTitle, CategoryLink } from "../CategoryPage";

const Trousers = () => {
  return (
    <div className="category">
      <CategoryTitle title="Trousers" />
      <CategoryLink categoryName="Linen" />
      <CategoryLink categoryName="Chinos" />
      <CategoryLink categoryName="Joggers" />
      <CategoryLink categoryName="Cargo" />
    </div>
  );
};

export default Trousers;
