import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import Card from "../ui/Card";
import classes from "./OrderPage.module.css";
import { restaurantMenu } from "@/store/menu";

function OrderPage(props) {
  const dispatch = useDispatch();

  //handlers
  const addToCartHandler = (item) => {
    dispatch(cartActions.addItemCart());
    dispatch(cartActions.pushCartItem(item));
    dispatch(cartActions.calculateTotalPriceCart());
  };

  const removeToCartHandler = (item) => {
    dispatch(cartActions.removeItemCart());
    dispatch(cartActions.deleteCartItem(item));
    dispatch(cartActions.calculateTotalPriceCart());
  };
  //Selectors

  const cartItemsArr = useSelector((state) => state.cart.cartItems);
  const totalpricesincart = useSelector((state) => state.cart.totalCartPrice);

  console.log(cartItemsArr); //prints twitce becuae adding make 2 actions

  return (
    <Fragment>
      <div className={classes.orderItems}>
        {restaurantMenu.map((item) => (
          <Card>
            <div key={item.id} className={classes.img}>
              <img alt="item picture" src={item.image} />
              <div>{item.name}</div>
              <div>{item.price}</div>
              <button onClick={() => addToCartHandler(item)}>add item</button>
              <button onClick={() => removeToCartHandler(item)}>
                remove item
              </button>
              <p>{totalpricesincart.toFixed(2)}</p>
            </div>
          </Card>
        ))}
      </div>
    </Fragment>
  );
}
export default OrderPage;

/*code for adding + nad - buttons to add centain quantity of items to the cart
/////
//Handlers
  const addItemHandler = () => {
    if (quantityItems >= 10) {
      return;
    }
    dispatch(cartActions.addItem());
  };

  const removeItemHandler = () => {
    if (quantityItems <= 0) {
      return;
    }
    dispatch(cartActions.removeItem());
  };
/////


<button onClick={removeItemHandler}>-</button>
 <p>{quantityItems}</p>
 <button onClick={addItemHandler}>+</button>



 const quantityItems = useSelector((state) => state.cart.totalMenuItems); //total of that item to push to cart

  const numberCartItems = useSelector((state) => state.cart.totalCartItems); //total items in cart
*/
