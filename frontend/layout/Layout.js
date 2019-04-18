// legacy
import Hero from "../components/Hero";
import Head from "next/head";
import SpaceWrapper from "../elements/SpaceWrapper";

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
