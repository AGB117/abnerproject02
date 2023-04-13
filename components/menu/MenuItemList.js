import MenuItems from "./MenuItems";
import classes from "./MenuItemList.module.css";
import { Fragment, useState } from "react";

function MenuItemList(props) {
  //react state fro separating menu items by category
  const [category, setCategory] = useState("burgers");

  function filterBurgersHandler(event) {
    setCategory((cat) => (cat = "burgers"));
    props.onChangeCategory(category);
    // console.log(category);
  }

  function filterFriesHandler(event) {
    setCategory((cat) => (cat = "fries"));
    props.onChangeCategory(category);
    // console.log(category);
  }
  return (
    <Fragment>
      <div className={`${classes.menuItems}`}>
        <h1>Enjoy our menu!</h1>
        <button value={category} onClick={filterBurgersHandler}>
          Burgers
        </button>
        <button value={category} onClick={filterFriesHandler}>
          Fries
        </button>
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
