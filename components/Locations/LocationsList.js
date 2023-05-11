import { Fragment } from "react";
import classes from "./LocationsList.module.css";

function LocationsList(props) {
  return (
    <Fragment>
      <div className={classes.locationsContainer}>
        <div className={`${classes.grid} ${classes.grid2cols}`}>
          <div className={classes.locationsColumn}>
            <h1 className={classes.locationsHeading}>Locations</h1>
            <span> 555 Somewhere St Orlando, Florida 33888</span>
            <span>407-863-5555</span>
            <span>burger.place@burger.com</span>
          </div>
          <div className={classes.locationsMap}>
            <iframe
              src="https://www.google.com/maps/d/embed?mid=1nMGEeZRsfMHfZ0UUuc8sItSmijgBt9s&ehbc=2E312F"
              width="640"
              height="500"
            ></iframe>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default LocationsList;
