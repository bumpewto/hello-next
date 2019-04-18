import styled from "styled-components";
import Head from "next/head";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Layout = ({ title, children }) => (
  <>
    <Head>
      <title>{title}</title>
    </Head>
    <Navbar />
    {children}
    <Footer />
  </>
);

export default Layout;
