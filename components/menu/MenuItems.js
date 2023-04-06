import {
  FireIcon,
  CurrencyDollarIcon,
  ChatBubbleBottomCenterTextIcon,
} from "@heroicons/react/24/outline";
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
            <ChatBubbleBottomCenterTextIcon
              className={classes.descriptionIcon}
            />
            <p className={classes.description}>{props.description}</p>
          </div>

          <div className={classes.itemLine}>
            <CurrencyDollarIcon className={classes.dollarIcon} />

            <p className={classes.price}>{props.price}</p>
          </div>

          <div className={classes.itemLine}>
            <FireIcon className={classes.caloriesIcon} />
            <p className={classes.calories}>{props.calories}</p>
          </div>
        </div>
      </Card>
    </li>
  );
}

export default MenuItemList;
