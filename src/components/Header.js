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
            <HeaderLink title="NEW ARRIVAL" link="/categories/new_arrival" />
            <HeaderLink title="TOPS" link="/categories/casual" />
            <HeaderLink title="PANTS" link="/categories/linen" />
            <HeaderLink title="SHOES" link="/categories/sneakers" />
          </ul>
        </nav>
      </div>
      <div className="right-side">
        <HeaderLink
          link={`/cart`}
          icon={<MdFavoriteBorder />}
          object={favorites}
        />
        <HeaderLink
          link={`/cart`}
          icon={<MdOutlineShoppingBag />}
          object={cart}
        />
      </div>
    </header>
  );
};

const HeaderLink = (props) => {
  const { title = "", link, icon, object } = props;
  return (
    <Link to={`${link}`} className="remove-link-style white-font">
      {title !== "" ? (
        <li>{title}</li>
      ) : (
        <span className="header-icon">
          {icon}
          <span className="icon-counter">{object.length}</span>
        </span>
      )}
    </Link>
  );
};

export default Header;
