import { Fragment } from "react";
import classes from "./AboutUsPage.module.css";

function AboutUsPage() {
  return (
    <Fragment>
      <div className={classes.aboutUsContainer}>
        <div className={`${classes.grid} ${classes.grid2cols}`}>
          <div className={classes.imageContainer}>
            <img src="/city.webp"></img>
          </div>
          <div className={classes.storyContainer}>
            <h1>This is our story</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Molestias aut, repellat ipsum facere voluptate dicta obcaecati
              deserunt nobis suscipit eaque?Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Molestias aut, repellat ipsum facere
              voluptate dicta obcaecati deserunt nobis suscipit eaque? Lorem,
              ipsum dolor sit amet consectetur adipisicing elit. Molestias aut,
              repellat ipsum facere voluptate dicta obcaecati deserunt nobis
              suscipit eaque?Lorem, ipsum dolor sit amet consectetur adipisicing
              elit. Molestias aut, repellat ipsum facere voluptate dicta
              obcaecati deserunt nobis suscipit eaque?
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
export default AboutUsPage;
