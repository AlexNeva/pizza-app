import React from "react";
import classes from "./categories.module.scss";

const Categories = () => {
  const [activeCategory, setActiveCategory] = React.useState(0);

  const changeCategory = (idx) => {
    setActiveCategory(idx);
  };

  const categories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  return (
    <ul className={classes.categories}>
      {categories.map((category, index) => (
        <li
          key={category}
          className={
            index === activeCategory ? classes.itemActive : classes.item
          }
          onClick={() => changeCategory(index)}
        >
          {category}
        </li>
      ))}
    </ul>
  );
};

export default Categories;
