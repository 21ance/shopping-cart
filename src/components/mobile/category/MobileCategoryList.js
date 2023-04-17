import Shirts from "../../category/tops/Shirt";
import Hoodies from "../../category/tops/Hoodies";
import Trousers from "../../category/pants/Trousers";
import Jeans from "../../category/pants/Jeans";
import Shoes from "../../category/shoes/Shoes";

const MobileCategoryList = (props) => {
  const { toggleStatus } = props;

  return (
    <section
      className={toggleStatus ? "mobile-category" : "mobile-category expanded"}
    >
      <Shirts />
      <Hoodies />
      <Trousers />
      <Jeans />
      <Shoes />
    </section>
  );
};

export default MobileCategoryList;
