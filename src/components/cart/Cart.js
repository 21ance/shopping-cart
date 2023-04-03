import { Link } from "react-router-dom";
import { MdOutlineShoppingBag, MdShoppingCartCheckout } from "react-icons/md";
import Counter from "../Counter";

const Cart = (props) => {
  const { cart, setCart } = props;

  function handleRemove(id, size) {
    setCart((prev) => {
      return prev.filter((i) => i.size !== size && i.id !== id);
    });
  }

  function computeTotal() {
    if (cart.length === 0) return 0;
    return cart
      .map((item) => item.price * item.quantity)
      .reduce((prev, next) => prev + next)
      .toFixed(2);
  }

  return (
    <main className="cart-page">
      <div className="page-title">
        <MdOutlineShoppingBag />
        <h1>My Cart</h1>
      </div>
      <section className="cart-items">
        {cart.length === 0 && (
          <span className="cart-empty">Your cart is empty</span>
        )}
        {cart.map((item) => {
          return (
            <article className="cart-item">
              <Link to={item.url} className="remove-link-style">
                <img src={item.image} alt={item.name} />
              </Link>
              <div>
                <h4>{item.name}</h4>
                <span className="item-size">Size: {item.size}</span>
              </div>
              <div>
                <span>Each</span>
                <span>${item.price}</span>
              </div>
              <div>
                <span>Quantity</span>
                <Counter
                  quantity={item.quantity}
                  cart={cart}
                  setCart={setCart}
                  id={item.id}
                />
              </div>
              <div>
                <span>Total</span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </div>
              <div className="item-actions">
                <span
                  className="remove-item"
                  onClick={() => handleRemove(item.id, item.size)}
                >
                  Remove Item
                </span>
              </div>
            </article>
          );
        })}
      </section>
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
          title="Estimated Total"
          details={"$" + computeTotal()}
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
