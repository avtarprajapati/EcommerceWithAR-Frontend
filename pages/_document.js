import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          {/* Roboto font family */}
          <link rel='preconnect' href='https://fonts.gstatic.com' />
          <link
            href='https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap'
            rel='stylesheet'
          />
          {/* Montserrat font family */}
          <link rel='preconnect' href='https://fonts.gstatic.com' />
          <link
            href='https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&display=swap'
            rel='stylesheet'
          />

          <script
            defer
            type='module'
            src='https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js'
          ></script>
          <script
            defer
            // nomodule
            src='https://unpkg.com/@google/model-viewer/dist/model-viewer-legacy.js'
          ></script>
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
