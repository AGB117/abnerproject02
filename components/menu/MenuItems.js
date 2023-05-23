import {
  CurrencyCircleDollar,
  Flame,
  ChatCenteredText,
} from "@phosphor-icons/react";
import classes from "./MenuItems.module.css";
import Card from "../ui/Card";
import { cartActions } from "@/store/cart-slice";
import { useDispatch } from "react-redux";

function MenuItemList(props) {
  const dispatch = useDispatch();

  const addToCartHandler = (item) => {
    dispatch(cartActions.addItemCart());
    dispatch(cartActions.pushCartItem(item));
    dispatch(cartActions.calculateTotalPriceCart());
  };

  return (
    <div>
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
          <div>
            <CurrencyCircleDollar
              className={classes.dollarIcon}
              size={30}
              color=" #4dabf7"
              weight="regular"
            />
          </div>
          <div className={classes.price}>
            <p>{props.price}</p>
          </div>
          <div className={classes.orderButtonPosition}>
            <button
              className={classes.orderButton}
              onClick={() => addToCartHandler(props.item)}
            >
              Add item
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default MenuItemList;
