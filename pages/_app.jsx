import "./../styles/global.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./Components/Layout";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
