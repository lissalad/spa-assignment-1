import { namesAndCategories } from "../data";

export default function Buttons({ setCategory }) {
  console.log(namesAndCategories);

  return (
    <div id="buttons">
      <button className="button" onClick={() => setCategory("All")}>
        All
      </button>

      {namesAndCategories.map((cat, i) => (
        <button
          key={i}
          className="button"
          onClick={() => setCategory(cat.name)}
        >
          {cat.name}
        </button>
      ))}
    </div>
  );
}
