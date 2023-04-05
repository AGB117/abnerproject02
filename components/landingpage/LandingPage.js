import { Fragment } from "react";
import classes from "./LandingPage.module.css";

function LandingPage() {
  return (
    <Fragment>
      <div
        id="hero"
        className={`${classes.hero} ${classes.grid} ${classes.grid2cols}`}
      >
        <div>
          <h1>The best burgers in the city of Orlando!</h1>

          <p>Our burgers are made with 100% angus beef, never frozen!!</p>
        </div>
        <div>
          <img
            className={classes.heroImg}
            src="https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80"
          ></img>
        </div>
      </div>

      <div id="menu" className={classes.menuSection}>
        <h1>Our Menu</h1>
        <div>Cards with burgers</div>
      </div>
    </Fragment>
  );
}
export default LandingPage;
