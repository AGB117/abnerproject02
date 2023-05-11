import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cart-slice";

function OrderPage() {
  const dispatch = useDispatch();

  const addItemHandler = () => {
    dispatch(cartActions.addItem());
  };

  const quantityItems = useSelector((state) => state.cart.totalItems);
  //example
  //useselectors ar efor displaying the number we want on the page
  // const addItemHander=()=>{
  //   dispatch(cartActions.addItem{herecouldgothepriceoftheitem
  //this value would be stored in a payload field, not optional
  //})
  // }
  return (
    <Fragment>
      <h1>Order here!!</h1>

      <p> this is our menu</p>
      <button onClick={addItemHandler}>additem</button>
      <p>items in your cart = {quantityItems}</p>
    </Fragment>
  );
}
export default OrderPage;
