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
          <script defer src='https://js.stripe.com/v3/'></script>
          {/* rel="stylesheet preload prefetch" as="style" crossorigin="anonymous"
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap"
          type="text/css" */}
          {/* <link
            href='/static/fonts/poppins/Poppins-Black.ttf'
            rel=' preload prefetch'
            crossorigin='anonymous'

            // rel='preload'

            // crossOrigin=''
          />
          <link
            href='/static/fonts/poppins/Poppins-BlackItalic.ttf'
            rel=' preload prefetch'
            crossorigin='anonymous'
            // rel='preload'

            // crossOrigin=''
          />
          <link
            href='/static/fonts/poppins/Poppins-Bold.ttf'
            rel=' preload prefetch'
            crossorigin='anonymous'
            // rel='preload'

            // crossOrigin=''
          />
          <link
            href='/static/fonts/poppins/Poppins-BoldItalic.ttf'
            rel=' preload prefetch'
            crossorigin='anonymous'
            // rel='preload'

            // crossOrigin=''
          />
          <link
            href='/static/fonts/poppins/Poppins-ExtraBold.ttf'
            rel=' preload prefetch'
            crossorigin='anonymous'
            // rel='preload'

            // crossOrigin=''
          />
          <link
            href='/static/fonts/poppins/Poppins-ExtraBoldItalic.ttf'
            rel=' preload prefetch'
            crossorigin='anonymous'
            // rel='preload'

            // crossOrigin=''
          />
          <link
            href='/static/fonts/poppins/Poppins-ExtraLight.ttf'
            rel=' preload prefetch'
            crossorigin='anonymous'
            // rel='preload'

            // crossOrigin=''
          />
          <link
            href='/static/fonts/poppins/Poppins-ExtraLightItalic.ttf'
            rel=' preload prefetch'
            crossorigin='anonymous'
            // rel='preload'

            // crossOrigin=''
          />
          <link
            href='/static/fonts/poppins/Poppins-Italic.ttf'
            rel=' preload prefetch'
            crossorigin='anonymous'
            // rel='preload'

            // crossOrigin=''
          />
          <link
            href='/static/fonts/poppins/Poppins-Light.ttf'
            rel=' preload prefetch'
            crossorigin='anonymous'
            // rel='preload'

            // crossOrigin=''
          />
          <link
            href='/static/fonts/poppins/Poppins-LightItalic.ttf'
            rel=' preload prefetch'
            crossorigin='anonymous'
            // rel='preload'

            // crossOrigin=''
          />
          <link
            href='/static/fonts/poppins/Poppins-Medium.ttf'
            rel=' preload prefetch'
            crossorigin='anonymous'
            // rel='preload'

            // crossOrigin=''
          />
          <link
            href='/static/fonts/poppins/Poppins-MediumItalic.ttf'
            rel=' preload prefetch'
            crossorigin='anonymous'
            // rel='preload'

            // crossOrigin=''
          />
          <link
            href='/static/fonts/poppins/Poppins-Medium.ttf'
            rel=' preload prefetch'
            crossorigin='anonymous'
            // rel='preload'

            // crossOrigin=''
          />
          <link
            href='/static/fonts/poppins/Poppins-MediumItalic.ttf'
            rel=' preload prefetch'
            crossorigin='anonymous'
            // rel='preload'

            // crossOrigin=''
          /> */}
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
