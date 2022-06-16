import Categoies from "./components/Categories";
import Header from "./components/Header";
import PizzaBlock from "./components/PizzaBlock";
import Sorting from "./components/Sorting";
import "./scss/app.scss";
import pizzasArr from "./assets/pizzas.json";
import axios from "axios";
import { useEffect, useState } from "react";
import SkeletonLoader from "./components/Skeleton";

function App() {
  const [state, setState] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://62aa24433b3143855442d35b.mockapi.io/items")
      .then((response) => setState(response.data));
    setIsLoading(false);
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categoies />
            <Sorting />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {isLoading
              ? [...new Array(6)].map((_, index) => (
                  <SkeletonLoader key={index} />
                ))
              : state.map((obj) => <PizzaBlock {...obj} key={obj.id} />)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
