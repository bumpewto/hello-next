import Hero from "../components/Hero";
import Head from "next/head";

const Layout = ({ title, hero, content }) => (
  <>
    <Head>
      <title>{title}</title>
    </Head>
    <Hero>{hero}</Hero>
    <section>{content}</section>
  </>
);

export default Layout;
