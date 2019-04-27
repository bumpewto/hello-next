import Head from "next/head";
import dynamic from "next/dynamic";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Layout = ({ title, children }) => (
    <>
        <Head />
        <Navbar />
        {children}
        <Footer />
    </>
);

export default Layout;
