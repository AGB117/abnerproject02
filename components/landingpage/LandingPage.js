import { Fragment } from "react";
import classes from "./LandingPage.module.css";

function LandingPage() {
  return (
    <Fragment>
      <div className={classes.landing}>
        <p>big picture with offers and showcasing food</p>

        <p> preview of the menu items</p>

        <p>Testimonials</p>
      </div>
    </Fragment>
  );
}
export default LandingPage;
