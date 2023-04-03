const ProductImageSlider = (props) => {
  const { imageList, handleMouseOver, handleMouseOut } = props;
  return (
    <aside className="images-list">
      {imageList.map((image) => {
        return (
          <img
            src={image.url}
            alt="clothe_image"
            key={image.url}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          />
        );
      })}
    </aside>
  );
};

export default ProductImageSlider;
