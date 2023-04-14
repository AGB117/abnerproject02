import MenuItems from "./MenuItems";
import classes from "./MenuItemList.module.css";
import { Fragment, useEffect, useState } from "react";

function MenuItemList(props) {
  //react state fro separating menu items by category
  const [category, setCategory] = useState("burgers");

  function filterBurgersHandler() {
    // useEffect()
    setCategory((cat) => (cat = "burgers"));
    // props.onChangeCategory(category);
    // console.log(category);
  }

  function filterFriesHandler() {
    // useEffect()
    setCategory((cat) => (cat = "fries"));
    // props.onChangeCategory(category);
    // console.log(category);
  }

  useEffect(() => {
    props.onChangeCategory(category);
  }, [category]);

  return (
    <Fragment>
      <div className={`${classes.menuItems}`}>
        <h1>Enjoy our menu!</h1>
        <div className={classes.btnContainer}>
          <button
            className={`${classes.btnCategoryActive}`}
            onClick={filterBurgersHandler}
            value="burger"
            key="b"
          >
            Burgers
          </button>
          <button
            className={classes.btnCategoryInactive}
            onClick={filterFriesHandler}
            value="fries"
            key="f"
          >
            Fries
          </button>
        </div>
        {/* <p style={{ fontSize: "20px" }}>{category}</p> */}
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
