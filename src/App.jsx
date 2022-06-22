import React from "react";
import Categories from "./components/categories/Categories";
import Header from "./components/header/Header";
import Pizza from "./components/pizza/Pizza";
import PizzaSkeleton from "./components/pizza/PizzaSkeleton";
import Sort from "./components/sort/Sort";

function App() {
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
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {isLoading
              ? [...new Array(8)].map((_, index) => (
                  <PizzaSkeleton key={index} />
                ))
              : items.map((item) => <Pizza key={item.id} {...item} />)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
