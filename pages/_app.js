import Layout from "../components/layout/Layout";
import "../styles/globals.css";
import store from "../store";
import { Provider } from "react-redux";
import { Analytics } from "@vercel/analytics/react";

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
        <Analytics />
      </Layout>
    </Provider>
  );
}

export default App;
