import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import Card from "../ui/Card";
import classes from "./OrderPage.module.css";
import { restaurantMenu } from "@/store/menu";

function OrderPage(props) {
  //temporary test
  const currentState = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const addToCartHandler = (item) => {
    dispatch(cartActions.addItemCart(item));
    console.log(currentState);
  };

  return (
    <Fragment>
      <div className={classes.orderItems}>
        {restaurantMenu.map((item) => (
          <div key={item.id} className={classes.centerItems}>
            <Card>
              <img
                alt="item picture"
                src={item.image}
                className={classes.img}
              />
              <div className={classes.name}>{item.title}</div>
              <div className={classes.price}>${item.price}</div>
              <div className={classes.buttonsContainer}>
                <div>
                  <button
                    className={classes.orderButton}
                    onClick={() => addToCartHandler(item)}
                  >
                    Add item
                  </button>
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </Fragment>
  );
}
export default OrderPage;
