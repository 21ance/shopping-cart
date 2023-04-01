import { Link } from "react-router-dom";
import { MdFavoriteBorder, MdOutlineShoppingBag } from "react-icons/md";

const Header = (props) => {
  const { cart, favorites } = props;
  return (
    <header>
      <div className="left-side">
        <Link to="/" className="remove-link-style white-font">
          <span className="header-title">MEN CLOTHING</span>
        </Link>
        <span className="header-left-divider">|</span>
        <nav className="header-nav">
          <ul>
            <HeaderLink title="NEW ARRIVAL" link="new_arrival" />
            <HeaderLink title="TOP" link="casual" />
            <HeaderLink title="BOTTOM" link="linen" />
            <HeaderLink title="SHOES" link="sneakers" />
          </ul>
        </nav>
      </div>
      <div className="right-side">
        <span className="header-icon">
          <MdFavoriteBorder />
          <span className="icon-counter">{favorites.length}</span>
        </span>
        <span className="header-icon">
          <MdOutlineShoppingBag />
          <span className="icon-counter">{cart.length}</span>
        </span>
      </div>
    </header>
  );
};

const HeaderLink = (props) => {
  const { title, link } = props;
  return (
    <Link to={`/categories/${link}`} className="remove-link-style white-font">
      <li>{title}</li>
    </Link>
  );
};

export default Header;
