import "../styles/globals.scss";
import "../styles/abstracts/_variables.scss";
import Head from "next/head";

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Portfolio David</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
