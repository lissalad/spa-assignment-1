import logo from "./logo.svg";
import "./App.css";
import data, {
  allCategories,
  categoriesUnique,
  categoriesWithCounts,
  namesAndCategories,
} from "./data";
import { useState } from "react";
import Buttons from "./components/Buttons";
import ProductList from "./components/ProductList";

function App() {
  const [category, setCategory] = useState("All");

  return (
    <>
      <h1 id="header">Online Store</h1>
      <main>
        <Buttons setCategory={setCategory} />
        <ProductList category={category} />
      </main>
    </>
  );
}

export default App;
