import Title from "./Title";
import Menu from "./Menu";
import { useState } from "react";
import menu from "./data";
import Category from "./Category";

// const tempCategory = menu.map((item) => item.category);
// const tempSet = new Set(tempCategory);
// const newSet = ["all", ...tempSet];

const allCategories = ["all", ...new Set(menu.map((item) => item.category))];
const App = () => {
  const [showMenu, setShowMenu] = useState(menu);
  const [categories, setCategories] = useState(allCategories);
  const filterItems = (category) => {
    if (category === "all") {
      setShowMenu(menu);
      return;
    }
    const newItem = menu.filter((item) => item.category === category);
    setShowMenu(newItem);
  };

  return (
    <main>
      <section className="menu">
        <Title text={"Our Menu"} />
        <Category categories={categories} filterItems={filterItems} />
        <Menu items={showMenu} />
      </section>
    </main>
  );
};
export default App;
