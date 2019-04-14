import App, { Container } from "next/app";
import { ThemeProvider } from "styled-components";

import Shell from "../shell/Shell";
import GlobalStyle from "../shell/_styles";

import theme from "../styles/_theme";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
        </ThemeProvider>

        <Shell>
          <Component {...pageProps} />
        </Shell>
      </Container>
    );
  }
}
