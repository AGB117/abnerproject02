import { Fragment } from "react";
import Head from "next/head";
import LandingPage from "../components/landingpage/LandingPage";
import Layout from "@/components/layout/Layout";
//

function HomePage() {
  return (
    <Fragment>
      <Head>
        <title>Burger Place</title>
        <meta name="description" content="website for restaurant" />
      </Head>

      {/* <Layout> */}
      <LandingPage />
      {/* </Layout> */}
    </Fragment>
  );
}

export default HomePage;
