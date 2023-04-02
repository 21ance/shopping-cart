import { MdOutlineShoppingBag, MdShoppingCartCheckout } from "react-icons/md";

const Cart = (props) => {
  const { cart, setCart } = props;

  console.log(cart);
  return (
    <main className="cart-page">
      <div className="page-title">
        <MdOutlineShoppingBag />
        <h1>My Cart</h1>
      </div>
      <section className="cart-items"></section>
      <section className="checkout-container">
        <div className="promo-code">
          <span>Enter Promo Code</span>
          <input type="text" placeholder="Promo Code" />
          <button type="button">Submit</button>
        </div>
        <CheckoutDetails
          title="Shipping cost"
          details="Free"
          extraClass="padding-top"
        />
        <CheckoutDetails title="Discount" details="$0" />
        <CheckoutDetails
          title="Estimated Total:"
          details="$3.99"
          extraClass="total"
        />
        <button className="button-checkout">
          <MdShoppingCartCheckout /> Checkout
        </button>
      </section>
    </main>
  );
};

const CheckoutDetails = (props) => {
  const { title, details, extraClass } = props;
  return (
    <div className={`checkout-details ${extraClass}`}>
      <span>{title}</span>
      <span>{details}</span>
    </div>
  );
};

export default Cart;
