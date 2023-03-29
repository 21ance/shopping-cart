import { Link } from "react-router-dom";
import { MdFavoriteBorder, MdOutlineShoppingCart } from "react-icons/md";

const Header = (props) => {
  return (
    <header>
      <div className="left-side">
        <Link to="/" className="remove-link-style white-font">
          <span className="header-title">MEN CLOTHING</span>
        </Link>
        <span className="header-left-divider">|</span>
        <nav className="header-nav">
          <ul>
            <li>NEW ARRIVAL</li>
            <li>TOP</li>
            <li>BOTTOM</li>
            <li>SHOES</li>
          </ul>
        </nav>
      </div>
      <div className="right-side">
        <span className="header-icon">
          <MdFavoriteBorder />
          <span className="icon-counter">0</span>
        </span>
        <span className="header-icon">
          <MdOutlineShoppingCart />
          <span className="icon-counter">0</span>
        </span>
      </div>
    </header>
  );
};

export default Header;
