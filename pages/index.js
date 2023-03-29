import { Fragment } from "react";
import Head from "next/head";
import LandingPage from "../components/landingpage/LandingPage";
//

function HomePage() {
  return (
    <Fragment>
      <Head>
        <title>Restaurant Name</title>
        <meta name="description" content="website for restaurant" />
      </Head>
      <LandingPage />
    </Fragment>
  );
}

export default HomePage;
