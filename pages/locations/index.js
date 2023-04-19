import { Fragment } from "react";
import Head from "next/head";
import LocationsList from "@/components/Locations/LocationsList";

function Locations(props) {
  return (
    <Fragment>
      <Head>
        <title>Burger Place | Locations</title>
      </Head>
      <LocationsList />
    </Fragment>
  );
}

export default Locations;
