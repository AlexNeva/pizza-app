import React from "react";
import {
  Categories,
  Sort,
  PizzaSkeleton,
  Pizza,
  Search,
  Pagination,
} from "../../components";
import classes from "./home.module.scss";

const Home = () => {
  const [items, setItems] = React.useState([]);
  const [itemsCount, setItemsCount] = React.useState(0);
  const [isLoading, setIsLoading] = React.useState(true);
  const [sort, setSort] = React.useState({
    name: "популяности",
    sortType: "rating",
  });
  const [pageNum, setPageNum] = React.useState(1);
  const [categoryId, setCategoryId] = React.useState(0);

  const [searchValue, setSearchValue] = React.useState("");

  const pagesCount = Math.ceil(itemsCount / 8);

  React.useEffect(() => {
    setIsLoading(true);
    const sortBy = sort.sortType.replace("-", "");
    const order = sort.sortType.includes("-") ? "asc" : "desc";
    const category = categoryId ? `category=${categoryId}` : "";
    const search = searchValue ? `title=${searchValue}&` : "";

    fetch(
      `https://62b208e0c7e53744afc67927.mockapi.io/items?${search}${category}&sortBy=${sortBy}&order=${order}&page=${pageNum}&limit=8`
    )
      .then((res) => res.json())
      .then(({ items, count }) => {
        console.log(items);
        setItems(items);
        setItemsCount(count);
        setIsLoading(false);
      });

    window.scrollTo(0, 0);
  }, [sort.sortType, categoryId, pageNum, searchValue]);
  return (
    <>
      <Search value={searchValue} setValue={setSearchValue} />
      <div className={classes.top}>
        <Categories setCategoryHandler={(id) => setCategoryId(id)} />
        <Sort setSortHandler={(obj) => setSort(obj)} />
      </div>
      <h1 className="pageTitle">Все пиццы</h1>
      <div className={classes.items}>
        {isLoading
          ? [...new Array(8)].map((_, index) => <PizzaSkeleton key={index} />)
          : items.map((item) => <Pizza key={item.id} {...item} />)}
      </div>
      <Pagination pages={pagesCount} setPage={setPageNum} />
    </>
  );
};

export default Home;
