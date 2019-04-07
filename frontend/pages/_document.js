import Document, { Head, Main, NextScript } from "next/document";
// Import styled components ServerStyleSheet
import { ServerStyleSheet } from "styled-components";

import GlobalStyle from "../components/GlobalStyle";

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    // Step 1: Create an instance of ServerStyleSheet
    const sheet = new ServerStyleSheet();

    // Step 2: Retrieve styles from components in the page
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    );

    // Step 3: Extract the styles as <style> tags
    const styleTags = sheet.getStyleElement();

    // Step 4: Pass styleTags as a prop
    return { ...page, styleTags };
  }

  render() {
    return (
      <html>
        <Head>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          {/* Step 5: Output the styles in the head  */}
          {this.props.styleTags}
        </Head>
        <body>
          <GlobalStyle />
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

// import Document, { Head, Main, NextScript } from "next/document";
// import { ServerStyleSheet } from "styled-components";

// export default class SiteDocument extends Document {
//   render() {
//     const sheet = new ServerStyleSheet();
//     const main = sheet.collectStyles(<Main />);
//     const styleTags = sheet.getStyleElement();
//     return (
//       <html>
//         <Head>
//           <meta charSet="utf-8" />
//           <meta
//             name="viewport"
//             content="initial-scale=1.0, width=device-width"
//           />
//           {styleTags}
//         </Head>
//         <body>
//           <div className="root">{main}</div>
//           <NextScript />
//         </body>
//       </html>
//     );
//   }
// }
