const Counter = (props) => {
  const { quantity, cart, setCart, id } = props;

  function handleIncrease() {
    setCart(
      cart.map((item) => {
        if (item.id === id && quantity < 10) {
          return { ...item, quantity: quantity + 1 };
        } else {
          return item;
        }
      })
    );
  }

  function handleDecrease() {
    setCart(
      cart.map((item) => {
        if (item.id === id && quantity > 1) {
          return { ...item, quantity: quantity - 1 };
        } else {
          return item;
        }
      })
    );
  }

  return (
    <div className="quantity">
      {quantity <= 1 ? (
        <button
          className="quantity-decrease"
          disabled
          onClick={() => handleDecrease()}
        >
          -
        </button>
      ) : (
        <button className="quantity-decrease" onClick={() => handleDecrease()}>
          -
        </button>
      )}
      <span className="quantity-value">{quantity}</span>

      {quantity >= 10 ? (
        <button
          className="quantity-increase"
          disabled
          onClick={() => handleIncrease()}
        >
          +
        </button>
      ) : (
        <button className="quantity-increase" onClick={() => handleIncrease()}>
          +
        </button>
      )}
    </div>
  );
};

export default Counter;
