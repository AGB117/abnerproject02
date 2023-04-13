import MenuItems from "./MenuItems";
import classes from "./MenuItemList.module.css";
import { Fragment, useState } from "react";

function MenuItemList(props) {
  //react state fro separating menu items by category
  const [category, setCategory] = useState("burgers");

  function filterBurgersHandler() {
    setCategory((cat) => (cat = "burger"));
    console.log(category);
  }

  function filterFriesHandler() {
    setCategory((cat) => (cat = "fries"));
    console.log(category);
  }
  return (
    <Fragment>
      <div className={`${classes.menuItems}`}>
        <h1>Enjoy our menu!</h1>
        <button onClick={filterBurgersHandler}>Burgers</button>
        <button onClick={filterFriesHandler}>Fries</button>
        <p style={{ fontSize: "20px" }}>{category}</p>
        <ul
          className={`${classes.container} ${classes.grid} ${classes.grid3Cols}`}
        >
          {props.menuItems.map((menuItem) => (
            <MenuItems
              key={menuItem.id}
              id={menuItem.id}
              description={menuItem.description}
              price={menuItem.price}
              name={menuItem.name}
              image={menuItem.image}
              calories={menuItem.calories}
              category={menuItem.category}
            />
          ))}
        </ul>
      </div>
    </Fragment>
  );
}
export default MenuItemList;
