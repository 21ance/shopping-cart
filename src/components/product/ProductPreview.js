const ProductPreview = (props) => {
  const { defaultImage, hoveredImage, name, price } = props;
  return (
    <article className="product-preview">
      <img
        src={defaultImage}
        alt={name}
        onMouseOver={(e) => (e.target.src = hoveredImage)}
        onMouseOut={(e) => (e.target.src = defaultImage)}
      />
      <h3>{name}</h3>
      <span className="product-price">${price}</span>
    </article>
  );
};

export default ProductPreview;
