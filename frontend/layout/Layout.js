import styled from "styled-components";
import Hero from "../components/Hero";
import Head from "next/head";

const Layout = ({ title, hero }) => (
  <>
    <Head>
      <title>{title}</title>
    </Head>
    <Hero>{hero}</Hero>
  </>
);

export default Layout;
