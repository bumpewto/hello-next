import App, { Container } from "next/app";
import Shell from "../shell/Shell";
import GlobalStyle from "../shell/_styles";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <GlobalStyle />
        <Shell>
          <Component {...pageProps} />
        </Shell>
      </Container>
    );
  }
}
