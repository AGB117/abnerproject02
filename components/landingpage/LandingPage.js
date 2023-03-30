import { Fragment } from "react";
import classes from "./LandingPage.module.css";

function LandingPage() {
  return (
    <Fragment>
      <div className={classes.landing}>
        <img
          className={classes.landing}
          src="https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80"
        ></img>

        <h1>
          The best burgers in the city! need to put this ection as a 2 column
          container, right side a picture and left side the best burgers with
          some paragraph.
        </h1>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet nisl
          suscipit adipiscing bibendum est ultricies integer quis. Platea
          dictumst quis.
        </p>

        <h1>Our Menu</h1>
        <div>Cards with burgers</div>
      </div>
    </Fragment>
  );
}
export default LandingPage;
