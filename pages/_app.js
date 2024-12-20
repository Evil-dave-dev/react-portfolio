import "../styles/globals.scss";
import "../styles/abstracts/_variables.scss";
import Head from "next/head";

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/logo.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=PT+Mono&display=swap"
          rel="stylesheet"
        />
        <title>Stevenoot David</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
