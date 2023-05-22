import { useSelector } from "react-redux";
import classes from "./CartModal.module.css";
import { Fragment, useState } from "react";
import { X } from "@phosphor-icons/react";

function CartModal({ cartModalChild }) {
  const cart = useSelector((state) => state.cart);
  const totalItemsInCart = cart.cartItems.length;

  //cartModalChild closes and opens the carmodalcontrolled in the mainNav component
  //cartModalScroll has a state that detects is the carmodal is opened or closed

  return (
    <Fragment>
      <div className={classes.modal}>
        <div className={classes.modalContainer}>
          <div className={classes.modalCloseButton}>
            <button className={classes.closeButton} onClick={cartModalChild}>
              <X size={40} />
            </button>
          </div>
          <div className={classes.itemsList}>
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
          <button className={classes.orderButton}>Submit</button>
        </div>
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
