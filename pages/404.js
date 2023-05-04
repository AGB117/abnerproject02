import React, { Fragment } from "react";
import Link from "next/link";

const styling = {
  container: {
    display: "flex",
    width: "100vw",
    height: "50vh",
    flexWrap: "wrap",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    textAlign: "center",
    justifyItems: "center",
    alignItems: "center",
  },
  button: {
    color: "#e7f5ff",
    backgroundColor: "#4dabf7",
    border: "none",
    borderRadius: "1rem",
    fontSize: "2rem",
    padding: "1rem 1.5rem",
  },
};
// onMouseOver="this.style.color='red'"
// onMouseOut="this.style.color='green'"

function errorPage() {
  return (
    <Fragment>
      <div style={styling.container}>
        <h1 style={{ marginBottom: "5rem" }}>This page does not exist</h1>

        <Link href="/">
          <button style={styling.button}>Return home</button>
        </Link>
      </div>
    </Fragment>
  );
}

export default errorPage;
