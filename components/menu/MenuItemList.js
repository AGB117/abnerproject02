import MenuItems from "./MenuItems";
import classes from "./MenuItemList.module.css";
import { Fragment } from "react";

function MenuItemList(props) {
  return (
    <Fragment>
      <div className={`${classes.menuItems}`}>
        <h1>Enjoy our menu!</h1>
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
            />
          ))}
        </ul>
      </div>
    </Fragment>
  );
}
export default MenuItemList;
