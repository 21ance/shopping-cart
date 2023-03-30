const Counter = (props) => {
  const { isTitle, quantity, setQuantity } = props;
  return (
    <div className="quantity">
      {isTitle && <span className="quantity-title">Quantity:</span>}
      <span
        className="quantity-decrease"
        onClick={() => setQuantity((prev) => (prev === 0 ? 0 : prev - 1))}
      >
        -
      </span>
      <input
        className="quantity-value"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value < 10 ? e.target.value : 10)}
      />
      <span
        className="quantity-increase"
        onClick={() => setQuantity((prev) => (prev < 10 ? prev + 1 : 10))}
      >
        +
      </span>
    </div>
  );
};

export default Counter;
