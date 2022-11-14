import Head from "next/head";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Arknights Hub"></meta>
      </Head>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
