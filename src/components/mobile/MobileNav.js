import { NavLink } from "react-router-dom";
import { MdHome, MdShoppingCart } from "react-icons/md";
import { GiClothes } from "react-icons/gi";

const MobileNav = (props) => {
  const { cart } = props;
  return (
    <nav className="bottom-nav">
      <BottomLink link="/" icon={<MdHome />} text="Home" />
      <BottomLink link="/new_arrival" icon={<GiClothes />} text="Shop" />
      <BottomLink
        link="/cart"
        icon={<MdShoppingCart />}
        text="Cart"
        subtext={cart.length}
      />
    </nav>
  );
};

const BottomLink = (props) => {
  const { icon, text, subtext = "", link } = props;
  return (
    <NavLink
      to={link}
      // className="remove-link-style dark-font"
      className={({ isActive }) =>
        (isActive ? "link-active" : "link") + " remove-link-style dark-font"
      }
    >
      <div className="bottom-link">
        <span>{icon}</span>
        <span>{text}</span>
        {subtext !== "" && <p className="subtext">{subtext}</p>}
      </div>
    </NavLink>
  );
};

export default MobileNav;
