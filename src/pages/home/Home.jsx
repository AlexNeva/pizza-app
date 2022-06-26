import React from "react";
import { Categories, Sort, PizzaSkeleton, Pizza } from "../../components";
import classes from "./home.module.scss";

const Home = () => {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [sort, setSort] = React.useState({
    name: "популяности",
    sortType: "rating",
  });
  const [categoryId, setCategoryId] = React.useState(0);

  React.useEffect(() => {
    setIsLoading(true);
    const sortBy = sort.sortType.replace("-", "");
    const order = sort.sortType.includes("-") ? "asc" : "desc";
    const category = categoryId ? `category=${categoryId}` : "";

    fetch(
      `https://62b208e0c7e53744afc67927.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}`
    )
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });

    window.scrollTo(0, 0);
  }, [sort.sortType, categoryId]);
  return (
    <>
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
    </>
  );
};

export default Home;
