import MenuItems from "./MenuItems";
import classes from "./MenuItemList.module.css";
import { Fragment, useEffect, useState } from "react";

function MenuItemList(props) {
  //react state fro separating menu items by category
  const [category, setCategory] = useState("burgers");
  const [isBurgerActive, setIsBurgerActive] = useState(true);
  const [isFriesActive, setIsFriesActive] = useState(false);
  const [isDrinksActive, setIsDrinksActive] = useState(false);

  function filterBurgersHandler() {
    setCategory((cat) => (cat = "burgers"));
    setIsBurgerActive((status) => (status = true));
    setIsFriesActive((status) => (status = false));
    setIsDrinksActive((cat) => (cat = false));
  }

  function filterFriesHandler() {
    setCategory((cat) => (cat = "fries"));
    setIsFriesActive((status) => (status = true));
    setIsBurgerActive((status) => (status = false));
    setIsDrinksActive((cat) => (cat = false));
  }

  function filterDrinksHandler() {
    setCategory((cat) => (cat = "drinks"));
    setIsDrinksActive((cat) => (cat = true));
    setIsBurgerActive((status) => (status = false));
    setIsFriesActive((status) => (status = false));
  }

  useEffect(() => {
    props.onChangeCategory(category);
  }, [category, isBurgerActive, isFriesActive, isDrinksActive]);

  return (
    <Fragment>
      <div className={classes.menuItems}>
        <h1>Enjoy our menu!</h1>
        <div className={classes.btnContainer}>
          <button
            className={
              isBurgerActive
                ? classes.btnCategoryActive
                : classes.btnCategoryInactive
            }
            onClick={filterBurgersHandler}
            value="burger"
            key="b"
          >
            Burgers
          </button>
          <button
            className={
              isFriesActive
                ? classes.btnCategoryActive
                : classes.btnCategoryInactive
            }
            onClick={filterFriesHandler}
            value="fries"
            key="f"
          >
            Fries
          </button>
          <button
            className={
              isDrinksActive
                ? classes.btnCategoryActive
                : classes.btnCategoryInactive
            }
            onClick={filterDrinksHandler}
            value="drinks"
            key="d"
          >
            Drinks
          </button>
        </div>
        {/* <div className={classes.center}> */}
        <div //this is a list <ul>
          className={`${classes.container} ${classes.grid} ${classes.grid3Cols}`}
        >
          {props.menuItems.map((menuItem) => (
            <div>
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
            </div>
          ))}
        </div>
      </div>
      {/* </div> */}
    </Fragment>
  );
}
export default MenuItemList;
