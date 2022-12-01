import Navbar from "./Navbar";
import Head from "next/head";
function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>NextJs-rest-countries-api</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      {children}
    </div>
  );
}

export default Layout;