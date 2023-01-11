import data from "./data.json";

// every category instance
const allCategories = data.map((obj) => obj.category);

// unique categories
const categorySet = new Set(allCategories);
const categoriesUnique = Array.from(categorySet);

// category histogram
const categoriesWithCounts = data.reduce((obj, cat) => {
  if (obj.hasOwnProperty(cat["category"])) {
    obj[cat["category"]] += 1;
  } else {
    obj[cat["category"]] = 1;
  }
  return obj;
}, {});

const namesAndCategories = categoriesUnique.map((name) => {
  return { name: name, count: categoriesWithCounts[name] };
});

export default data;
export {
  allCategories,
  categoriesUnique,
  categoriesWithCounts,
  namesAndCategories,
};
