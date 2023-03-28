const ProductPreview = (props) => {
  const { image, name, price } = props;
  return (
    <article className="product-preview">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <span>${price}</span>
    </article>
  );
};

export default ProductPreview;
