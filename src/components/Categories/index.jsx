import { useState } from "react";

function Categoies() {
  const [categoryIndex, setCatigoriesIndex] = useState(0);

  const categories = [
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  const handleClick = (i) => {
    setCatigoriesIndex(i);
  };

  return (
    <div className="categories">
      <ul>
        {categories.map((value, i) => {
          return (
            <li
              key={value}
              onClick={() => handleClick(i)}
              className={categoryIndex === i ? "active" : ""}
            >
              {value}
            </li>
          );
        })}

        {/* <li className="active">Все</li>
        <li>Мясные</li>
        <li>Вегетарианская</li>
        <li>Гриль</li>
        <li>Острые</li>
        <li>Закрытые</li> */}
      </ul>
    </div>
  );
}
export default Categoies;
