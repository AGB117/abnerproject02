import { useSelector } from "react-redux";
import classes from "./CartModal.module.css";
import { Fragment } from "react";

function CartModal(props) {
  const cart = useSelector((state) => state.cart);
  //need to use filter to determine how many of the same item are in the object
  const totalItemsInCart = cart.cartItems.length;

  return (
    <Fragment>
      <div className={classes.modal}>
        modal content
        <button>order here!!</button>
        <button onClick={props.cartModalChild}>close modal</button>
        <p>items in cart: {totalItemsInCart}</p>
        {cart.cartItems.map((item) => (
          <div key={item.id}>
            <div>{item.name}</div>
          </div>
        ))}
        {cart.cartItems.filter((item) => {
          item.id === "m1";
        })}
      </div>
      <div onClick={props.cartModalChild} className={classes.backdrop}></div>
    </Fragment>
  );
}
export default CartModal;
