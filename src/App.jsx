import Categories from "./components/categories/Categories";
import Header from "./components/header/Header";
import Pizza from "./components/pizza/Pizza";
import Sort from "./components/sort/Sort";

function App() {
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
            <Pizza title="Чизбургер пицца" price={600} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;