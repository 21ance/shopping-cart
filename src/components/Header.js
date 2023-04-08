import { Link } from "react-router-dom";
// import { MdFavoriteBorder } from "react-icons/md";
import { MdOutlineShoppingBag } from "react-icons/md";

const Header = (props) => {
  const { cart, headerClass } = props;
  // const { cart, favorites, headerClass } = props;
  return (
    <header className={headerClass}>
      <div className="left-side">
        <Link to="/" className="remove-link-style">
          <span className="header-title">MEN CLOTHING</span>
        </Link>
        <span className="header-left-divider">|</span>
        <nav className="header-nav">
          <HeaderLink title="NEW ARRIVAL" link="/new_arrival" />
          <HeaderLink title="TOPS" link="/casual" />
          <HeaderLink title="PANTS" link="/linen" />
          <HeaderLink title="SHOES" link="/sneakers" />
        </nav>
      </div>
      <div className="right-side">
        {/* <HeaderLink
          link={`/cart`}
          icon={<MdFavoriteBorder />}
          object={favorites}
        /> */}
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
    <Link to={`${link}`} className="remove-link-style">
      {title !== "" ? (
        <span>{title}</span>
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
