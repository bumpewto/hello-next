import App, { Container } from "next/app";
import { ThemeProvider } from "styled-components";
import Router from "next/router";
import { initGA, logPageView } from "../seo/utils.ga";

import GlobalStyle from "../styles/_styles";

import theme from "../styles/_theme";
import Layout from "../modules/Layout";

export default class MyApp extends App {
  componentDidMount() {
    initGA();
    logPageView();
    Router.router.events.on("routeChangeComplete", logPageView);
  }
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
        </ThemeProvider>

        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Container>
    );
  }
}
