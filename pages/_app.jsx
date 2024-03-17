import "./../styles/global.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./Layout";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
