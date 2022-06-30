import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Categories,
  Sort,
  PizzaSkeleton,
  Pizza,
  Search,
  Pagination,
} from "../../components";
import { setPagesCount } from "../../redux/slices/filtersSlice";
import classes from "./home.module.scss";

const Home = () => {
  const { categoryId, sort } = useSelector((state) => state.filter);
  const { currentPage } = useSelector((state) => state.filter.pagination);

  const dispatch = useDispatch();

  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [searchValue, setSearchValue] = React.useState("");

  React.useEffect(() => {
    setIsLoading(true);
    const sortBy = sort.sortType.replace("-", "");
    const order = sort.sortType.includes("-") ? "desc" : "asc";
    const category = categoryId ? `category=${categoryId}` : "";
    const search = searchValue ? `title=${searchValue}&` : "";

    axios
      .get(
        `https://62b208e0c7e53744afc67927.mockapi.io/items?${search}${category}&sortBy=${sortBy}&order=${order}&page=${currentPage}&limit=8`
      )
      .then((res) => {
        const { items, count } = res.data;
        setItems(items);
        dispatch(setPagesCount(Math.ceil(count / 8)));
        setIsLoading(false);
      });

    window.scrollTo(0, 0);
  }, [sort.sortType, categoryId, currentPage, searchValue]);
  return (
    <>
      <Search value={searchValue} setValue={setSearchValue} />
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
