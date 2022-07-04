import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocationParams } from "../../hooks/useLocationParams";
import { setCategoryId, setCurrentPage } from "../../redux/slices/filtersSlice";
import classes from "./categories.module.scss";

const Categories = () => {
  const activeCategory = useSelector((state) => state.filter.categoryId);
  const dispatch = useDispatch();

  const [params, setSearchParams] = useLocationParams();

  const categoryClickHandler = (idx) => {
    dispatch(setCategoryId(idx));
    setSearchParams({ ...params, category: idx });
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
          onClick={() => categoryClickHandler(index)}
        >
          {category}
        </li>
      ))}
    </ul>
  );
};

export default Categories;
