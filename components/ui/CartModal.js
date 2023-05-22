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
          <div className={classes.closeButtonContainer}>
            <button className={classes.closeButton} onClick={cartModalChild}>
              <X size={40} color="#e7f5ff" weight="bold" />
            </button>
          </div>

          <div className={classes.itemsListContainer}>
            {cart.cartItems.map((item) => (
              <div key={Math.random()}>
                <div>
                  {item.name} {`x ${totalItemsInCart} `}
                </div>
              </div>
            ))}
            <p>items in cart: {totalItemsInCart}</p>
            {/* {experimental} */}
            {cart.cartItems.filter((item) => {
              item.id === "m1";
            })}
            {/* {experimental} */}
          </div>
          <div className={classes.submitButtonContainer}>
            <button className={classes.orderButton}>Place Order</button>
          </div>
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
