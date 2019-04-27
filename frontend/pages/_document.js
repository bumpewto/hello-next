import Document, { Head, Main, NextScript } from "next/document";
import dynamic from "next/dynamic";
import { ServerStyleSheet } from "styled-components";
// import { GTagScript, GTagNoScript } from "../seo/gTag";
// import { RCTag } from "../seo/reCaptcha";
// import { HeapScript } from "../seo/heap";

const GTagScript = dynamic(import("../seo/gTag"));
const GTagNoScript = dynamic(import("../seo/gTag"));
const RCTag = dynamic(import("../seo/reCaptcha"));
const HeapScript = dynamic(import("../seo/heap"));

export default class MyDocument extends Document {
    // Init styled-components
    static getInitialProps({ renderPage }) {
        const sheet = new ServerStyleSheet();
        const page = renderPage(App => props => sheet.collectStyles(<App {...props} />));
        const styleTags = sheet.getStyleElement();
        return { ...page, styleTags };
    }

    render() {
        return (
            <html>
                <Head>
                    <meta lang="en-EN" charSet="utf-8" />
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                    <RCTag />
                    <GTagScript />
                    <HeapScript />
                    {/* Output the styles in the head  */}
                    {this.props.styleTags}
                </Head>
                <body>
                    <GTagNoScript />
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }
}
