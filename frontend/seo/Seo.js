import Head from "next/head";

const SEO = ({ title, description }) => (
  <Head>
    <title>{title || "Atmo"}</title>
    <meta description={description || ""} />
  </Head>
);
export default SEO;
