import axios from "axios";
import React from "react";
import qs from "qs";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  Categories,
  Sort,
  PizzaSkeleton,
  Pizza,
  Search,
  Pagination,
} from "../../components";
import { setFilters, setPagesCount } from "../../redux/slices/filtersSlice";
import classes from "./home.module.scss";
import { fetchItems } from "../../redux/slices/itemsSlice";

const Home = () => {
  const { categoryId, sort, searchValue } = useSelector(
    (state) => state.filter
  );

  const {
    isLoading,
    data: { items, count },
    error,
  } = useSelector((state) => state.items);
  const { currentPage } = useSelector((state) => state.filter.pagination);

  const dispatch = useDispatch();

  const location = useLocation();

  React.useEffect(() => {
    dispatch(fetchItems());

    if (location.search) {
      const params = qs.parse(location.search.replace("?", ""));
      dispatch(setFilters(params));
    }

    window.scrollTo(0, 0);
  }, [
    sort.sortType,
    sort.order,
    categoryId,
    currentPage,
    searchValue,
    location.search,
    dispatch,
  ]);

  return (
    <>
      <Search />
      <div className={classes.top}>
        <Categories />
        <Sort />
      </div>
      <h1 className="pageTitle">Все пиццы</h1>
      <div className={classes.items}>
        {isLoading
          ? [...new Array(8)].map((_, index) => <PizzaSkeleton key={index} />)
          : items.map((item) => <Pizza key={item.id} {...item} />)}
      </div>
      <Pagination />
    </>
  );
};

export default Home;
