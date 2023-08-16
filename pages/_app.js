import Layout from "../components/layout/Layout";
import "../styles/globals.css";
import store from "../store/index";
import { Provider } from "react-redux";
import { Analytics } from "@vercel/analytics/react";

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Analytics />
    </Provider>
  );
}

export default App;
