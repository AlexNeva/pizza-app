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
  const { currentPage } = useSelector((state) => state.filter.pagination);

  const dispatch = useDispatch();

  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const location = useLocation();

  React.useEffect(() => {
    dispatch(fetchItems());
    setIsLoading(true);

    axios
      .get(
        `https://62b208e0c7e53744afc67927.mockapi.io/items?title=${searchValue}&category=${categoryId}&sortBy=${sort.sortType}&order=${sort.order}&page=${currentPage}&limit=8`
      )
      .then((res) => {
        const { items, count } = res.data;
        setItems(items);
        dispatch(setPagesCount(Math.ceil(count / 8)));
        setIsLoading(false);
        if (location.search) {
          const params = qs.parse(location.search.replace("?", ""));
          dispatch(setFilters(params));
        }
      });

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
