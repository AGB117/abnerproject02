import Link from "next/link";
import classes from "./ErrorPage.module.css";
import { Fragment } from "react";

function ErrorPage() {
  return (
    <Fragment>
      <div className={classes.container}>
        <h1>This page does not exist</h1>

        <Link href="/">
          <button className={classes.returnButton}>Return home</button>
        </Link>
      </div>
    </Fragment>
  );
}

export default ErrorPage;
