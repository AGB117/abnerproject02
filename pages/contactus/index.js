import Head from "next/head";
import { Fragment } from "react";
import ContactUsFrom from "../../components/contactusform/ContactUsForm";

function ContactUs(props) {
  return (
    <Fragment>
      <Head>
        <title>Burger Place | Contact Us</title>
      </Head>
      <ContactUsFrom />
    </Fragment>
  );
}

export default ContactUs;
