import data from "../data";

export default function ProductList({ category }) {
  return (
    <div id="product-gallery">
      {data
        .filter((item) => {
          return item.category === category || category === "All";
        })
        .map((item) => (
          <div key={item.id} className="item-listing">
            <h1>{item.name}</h1>
            <h2>{item.price}</h2>
            <p>{item.category}</p>
          </div>
        ))}
    </div>
  );
}
