import { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import Card from "../ui/Card";
import classes from "./OrderPage.module.css";
import { restaurantMenu } from "@/store/menu";
import MenuItems from "../menu/MenuItems";

function OrderPage(props) {
  const dispatch = useDispatch();

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

  const addToCartHandler = () => {
    dispatch(cartActions.addCartItem(quantityItems));
  };

  //Selectors
  const quantityItems = useSelector((state) => state.cart.totalMenuItems);

  const cartItems = useSelector((state) => state.cart.totalCartItems);

  return (
    <Fragment>
      <div className={classes.orderItems}>
        {restaurantMenu.map((menuItem) => (
          <Card>
            <div className={classes.img}>
              <img alt="item picture" src={menuItem.image} />
              <div>{menuItem.name}</div>
              <div>{menuItem.price}</div>
              <button onClick={removeItemHandler}>-</button>
              <p>{quantityItems}</p>
              <button onClick={addItemHandler}>+</button>
              <p>items in your cart = {cartItems}</p>
              <button onClick={addToCartHandler}>add item</button>
            </div>
          </Card>
        ))}
      </div>

      {/* {restaurantMenu.map((menuItem) => (
        <div>
          <MenuItems
            image={menuItem.image}
            key={menuItem.id}
            id={menuItem.id}
            description={menuItem.description}
            price={menuItem.price}
            name={menuItem.name}
            calories={menuItem.calories}
            category={menuItem.category}
          />
        </div>
      ))} */}

      {/* <div className={classes.orderItems}>
        <Card>
          <h1>cheese burger</h1>

          <p>$10.99</p>
          <button onClick={removeItemHandler}>-</button>
          <p>{quantityItems}</p>
          <button onClick={addItemHandler}>+</button>
          <p>items in your cart = {cartItems}</p>
          <button onClick={addToCartHandler}>add item</button>
        </Card>
      </div> */}
    </Fragment>
  );
}
export default OrderPage;
