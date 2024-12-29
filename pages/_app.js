import "../styles/globals.scss";
import "../styles/_variables.scss";
import Head from "next/head";

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/logo.ico" />
        <link rel="preconnect" href="https://fonts.bunny.net" />
        <link
          href="https://fonts.bunny.net/css?family=inter:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i|nanum-pen-script:400"
          rel="stylesheet"
        />
        <title>Stevenoot David</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
