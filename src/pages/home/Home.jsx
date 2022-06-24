import React from "react";
import { Categories, Sort, PizzaSkeleton, Pizza } from "../../components";
import classes from "./home.module.scss";

const Home = () => {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    fetch("https://62b208e0c7e53744afc67927.mockapi.io/items")
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
  }, []);
  return (
    <>
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
    </>
  );
};

export default Home;
