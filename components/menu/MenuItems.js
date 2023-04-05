import classes from "./MenuItems.module.css";
import Card from "../ui/Card";

function MenuItemList(props) {
  return (
    <li>
      <Card>
        <div>
          <img className={classes.image} src={props.image}></img>
        </div>
        <div>
          <p>{props.name}</p>
          <p>{props.description}</p>
          <p>{props.price}</p>
          <p>{props.calories}</p>
        </div>
      </Card>
    </li>
  );
}

export default MenuItemList;
