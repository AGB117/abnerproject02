import { Fragment } from "react";
import Head from "next/head";
import OrderPage from "@/components/orderpage/OrderPage";

function Order(props) {
  return (
    <Fragment>
      <Head>
        <title>Burger Place | Order</title>
        <link rel="icon" type="image/x-icon" href="/favicon.png" />
      </Head>
      <OrderPage />
    </Fragment>
  );
}

export default Order;
