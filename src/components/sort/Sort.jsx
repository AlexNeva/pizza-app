import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocationParams } from "../../hooks/useLocationParams";
import { setSort } from "../../redux/slices/filtersSlice";
import classes from "./sort.module.scss";

const Sort = () => {
  const dispatch = useDispatch();
  const [isVisible, setVisible] = React.useState(false);

  const [params, setSearchParams] = useLocationParams();

  const {
    sort: { sortType, order },
  } = useSelector((state) => state.filter);

  const list = [
    { name: "популярности", sortType: "rating", order: "asc" },
    { name: "популярности", sortType: "rating", order: "desc" },
    { name: "цене", sortType: "price", order: "asc" },
    { name: "цене", sortType: "price", order: "desc" },
    { name: "названию", sortType: "title", order: "asc" },
    { name: "названию", sortType: "title", order: "desc" },
  ];

  const arrow = (order) => (order === "asc" ? "↑" : "↓");
  const sortName = list.filter(
    (obj) => obj.sortType === sortType && obj.order === order
  )[0].name;

  const listItemsClickHandler = (index, obj) => {
    dispatch(setSort(obj));
    setVisible(false);
    setSearchParams({ ...params, sortBy: obj.sortType, order: obj.order });
  };

  return (
    <div className={classes.sort}>
      <div className={classes.label}>
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"
          />
        </svg>
        <b>Сортировка по:</b>
        <span onClick={() => setVisible((open) => !open)}>
          {`${arrow(order)} ${sortName}`}
        </span>
      </div>
      {isVisible && (
        <div className={classes.popup}>
          <ul>
            {list.map((obj, index) => (
              <li
                key={obj.name + obj.order}
                className={
                  sortType === obj.sortType && order === obj.order
                    ? classes.active
                    : ""
                }
                onClick={() => listItemsClickHandler(index, obj)}
              >
                {`${arrow(obj.order)} ${obj.name}`}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sort;
