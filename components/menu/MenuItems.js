import {
  CurrencyCircleDollar,
  Flame,
  ChatCenteredText,
} from "@phosphor-icons/react";
import classes from "./MenuItems.module.css";
import Card from "../ui/Card";

function MenuItemList(props) {
  return (
    <div //this is a lis <div>
    >
      <Card>
        <img className={classes.image} src={props.image}></img>
        <p className={classes.name}>{props.name}</p>
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
          <span className={classes.caloriesNumber}>{props.calories}</span>
          <span className={classes.calories}>Calories</span>
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
      </Card>
    </div> //this is a lisr <li>
  );
}

export default MenuItemList;
