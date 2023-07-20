import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Popraw jakość swoich zdjęć za darmo"
          />
          <meta property="og:site_name" content="Pixelperfect" />
          <meta
            property="og:description"
            content="Popraw jakość swoich zdjęć za darmo."
          />
          <meta property="og:title" content="Popraw jakość swoich zdjęć" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Popraw jakość swoich zdjęć" />
          <meta
            name="twitter:description"
            content="Popraw jakość swoich zdjęć za darmo."
          />
          <meta
            property="og:image"
            content="https://restore-photos.vercel.app/og-image.png"
          />
          <meta
            name="twitter:image"
            content="https://restore-photos.vercel.app/og-image.png"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
