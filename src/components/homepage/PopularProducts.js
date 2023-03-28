import ProductPreview from "../product/ProductPreview";
import NewArrival from "../../data/men-new-arrival.json";

console.log(NewArrival.results);
const fourItems = NewArrival.results.slice(5, 9);
const PopularProducts = () => {
  return (
    <section className="section-popular-products">
      <h2>POPULAR PRODUCTS</h2>
      <div className="popular-products">
        {fourItems.map((item) => {
          return (
            <ProductPreview
              key={item.code}
              name={item.name}
              image={item.images[0].baseUrl}
              price={item.price.value}
            />
          );
        })}
      </div>
      <button className="button-show-more">SHOW MORE</button>
    </section>
  );
};

export default PopularProducts;
