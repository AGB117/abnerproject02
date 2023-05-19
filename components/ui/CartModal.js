import { useSelector } from "react-redux";
import classes from "./CartModal.module.css";
import { Fragment, useState } from "react";
// import "./antiscroll.css";

function CartModal({ cartModalChild }) {
  const cart = useSelector((state) => state.cart);
  const totalItemsInCart = cart.cartItems.length;

  //cartModalChild closes and opens the carmodalcontrolled in the mainNav component
  //cartModalScroll has a state that detects is the carmodal is opened or closed

  return (
    <Fragment>
      <div className={classes.modal}>
        modal content
        <button>order here!!</button>
        <button onClick={cartModalChild}>close modal</button>
        <p>items in cart: {totalItemsInCart}</p>
        {cart.cartItems.map((item) => (
          <div key={Math.random()}>
            <div>{item.name}</div>
          </div>
        ))}
        {cart.cartItems.filter((item) => {
          item.id === "m1";
        })}
      </div>
      <div onClick={cartModalChild} className={classes.backdrop}></div>
    </Fragment>
  );
}
export default CartModal;

// const [cartModalScroll, setCartModalScroll] = useState(false);
// //need to use filter to determine how many of the same item are in the object
// const cartModalScrollHandler = () => {
//   setCartModalScroll(!cartModalScroll);
//   console.log(cartModalScroll);
// };
