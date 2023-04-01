const ProductPreview = (props) => {
  const { defaultImage, hoveredImage, name, price } = props;
  return (
    <article className="product-preview">
      <img
        loading="lazy"
        src={defaultImage}
        alt={name}
        onMouseOver={(e) => {
          if (hoveredImage === undefined) return;
          e.target.src = hoveredImage;
        }}
        onMouseOut={(e) => {
          if (hoveredImage === undefined) return;
          e.target.src = defaultImage;
        }}
      />
      <h3>{name}</h3>
      <span className="product-price">${price}</span>
    </article>
  );
};

export default ProductPreview;
