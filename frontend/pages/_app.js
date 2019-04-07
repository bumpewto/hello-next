import App, { Container } from "next/app";
import Layout from "../layout/Layout";
import GlobalStyle from "../layout/_styles";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <GlobalStyle />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Container>
    );
  }
}
