import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Odtwórz swoje stare zdjęcia twarzy i zachowaj wspomnienia."
          />
          <meta property="og:site_name" content="restorePhotos.io" />
          <meta
            property="og:description"
            content="Odtwórz swoje stare zdjęcia twarzy i zachowaj wspomnienia."
          />
          <meta property="og:title" content="Odtwórz zdjęcia twarzy" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Odtwórz zdjęcia twarzy" />
          <meta
            name="twitter:description"
            content="Odtwórz swoje stare zdjęcia i zachowaj wspomnienia."
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
