import { useEffect } from "react";
import { Link } from "react-router-dom";

const AddedToCart = (props) => {
  const { notifStatus, setNotifStatus } = props;

  useEffect(() => {
    const timer = setTimeout(() => {
      setNotifStatus(false);
      console.log("test");
    }, 3000);

    return () => clearTimeout(timer);
  });

  return (
    <Link to={"/cart"}>
      <div
        className={
          notifStatus ? "cart-notification" : "cart-notification hidden"
        }
      >
        <span>Successfully added to bag</span>
      </div>
    </Link>
  );
};

export default AddedToCart;
