import Layout from "../components/layout/Layout";
import "../styles/globals.css";
// import NewsPage from "./news";
// import HomePage from ".";

function App({ Component, pageProps }) {
  return (
    // <Layout>
    <Component {...pageProps} />
    // </Layout>
  );
}

export default App;
