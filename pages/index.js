import { Fragment } from "react";
import Head from "next/head";
import LandingPage from "../components/landingpage/LandingPage";

function HomePage() {
  return (
    <Fragment>
      <Head>
        <title>Burger Place | Home</title>
        <meta name="description" content="website for restaurant" />
        <link rel="icon" type="image/x-icon" href="/favicon.png" />
      </Head>
      <LandingPage />
    </Fragment>
  );
}

export default HomePage;
