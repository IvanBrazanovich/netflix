import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <title>NETFLIX</title>
        </Head>
        <body>
          <Main />
          <div id="cardportal" />
          <NextScript />
        </body>
      </Html>
    );
  }
}
