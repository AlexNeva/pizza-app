import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategoryId } from "../../redux/slices/filterSlice";
import classes from "./categories.module.scss";

const Categories = () => {
  const activeCategory = useSelector((state) => state.filter.categoryId);
  const dispatch = useDispatch();

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
          onClick={() => dispatch(setCategoryId(index))}
        >
          {category}
        </li>
      ))}
    </ul>
  );
};

export default Categories;
