import React from "react";

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
    <ul className="categories">
      {categories.map((category, index) => (
        <li
          key={category}
          className={index === activeCategory ? "active" : null}
          onClick={() => changeCategory(index)}
        >
          {category}
        </li>
      ))}
    </ul>
  );
};

export default Categories;
