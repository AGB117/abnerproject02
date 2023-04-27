import Head from "next/head";
import { Fragment } from "react";
import ContactUsFrom from "../../components/contactusform/ContactUsForm";

function ContactUs(props) {
  return (
    <Fragment>
      <Head>
        <title>Burger Place | Contact Us</title>
        <link rel="icon" type="image/x-icon" href="/favicon.png" />
      </Head>
      <ContactUsFrom />
    </Fragment>
  );
}

export default ContactUs;
