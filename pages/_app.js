import Layout from "@/Layout/Layout";
import "@/styles/globals.css";
import "@/styles/media.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
// import "@fortawesome/fontawesome-free/css/all.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
