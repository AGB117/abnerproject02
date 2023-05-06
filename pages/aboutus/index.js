import { Fragment } from "react";
import Head from "next/head";
import AboutUsPage from "../../components/aboutus/AboutUsPage";

function AboutUs(props) {
  return (
    <Fragment>
      <Head>
        <title>Burger Place | About us</title>
        <link rel="icon" type="image/x-icon" href="/favicon.png" />
      </Head>
      <AboutUsPage />
    </Fragment>
  );
}

export default AboutUs;
