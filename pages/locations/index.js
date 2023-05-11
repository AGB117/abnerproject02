import { Fragment } from "react";
import Head from "next/head";
// import LocationsList from "../../components/locations/LocationsList";

function Locations(props) {
  return (
    <Fragment>
      <Head>
        <title>Burger Place | Locations</title>
        <link rel="icon" type="image/x-icon" href="/favicon.png" />
      </Head>
      {/* <LocationsList /> */}
    </Fragment>
  );
}

export default Locations;
