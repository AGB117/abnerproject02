import classes from "./MenuItems.module.css";
import Card from "../ui/Card";

function MenuItemList(props) {
  return (
    <li>
      <Card>
        <div>
          <img className={classes.image} src={props.image}></img>
        </div>
        <div className={classes.mealContent}>
          <div className={classes.mealTitle}>{props.name}</div>
          <div className={classes.mealDescription}>{props.description}</div>
          <div>{props.price}</div>
          <div>{props.calories}</div>
        </div>
      </Card>
    </li>
  );
}

export default MenuItemList;
