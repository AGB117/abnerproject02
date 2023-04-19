import {
  CurrencyCircleDollar,
  Flame,
  ChatCenteredText,
} from "@phosphor-icons/react";
import classes from "./MenuItems.module.css";
import Card from "../ui/Card";

function MenuItemList(props) {
  return (
    <li>
      <Card>
        <div>
          <img className={classes.image} src={props.image}></img>
        </div>
        <p className={classes.name}>{props.name}</p>
        <div>
          <div className={classes.itemLine}>
            <ChatCenteredText
              className={classes.descriptionIcon}
              size={30}
              color=" #4dabf7"
              weight="regular"
            />
            <p className={classes.description}>{props.description}</p>
          </div>

          <div className={classes.itemLine}>
            <Flame
              className={classes.caloriesIcon}
              size={30}
              color=" #4dabf7"
              weight="regular"
            />
            <span className={classes.calories}>
              <span className={classes.caloriesNumber}>{props.calories}</span>
              Calories
            </span>
          </div>

          <div className={classes.itemLine}>
            <CurrencyCircleDollar
              className={classes.dollarIcon}
              size={30}
              color=" #4dabf7"
              weight="regular"
            />

            <p className={classes.price}>{props.price}</p>
          </div>
        </div>
      </Card>
    </li>
  );
}

export default MenuItemList;
