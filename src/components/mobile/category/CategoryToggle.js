import { MdExpandMore } from "react-icons/md";
import { MdExpandLess } from "react-icons/md";

const CategoryToggle = (props) => {
  const { toggleStatus, handleClick } = props;

  return (
    <button className="category-toggle" onClick={() => handleClick()}>
      {toggleStatus ? <MdExpandMore /> : <MdExpandLess />}
    </button>
  );
};

export default CategoryToggle;
