import Document, { Html, Head, Main, NextScript } from 'next/document'


class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
        <Main />
        <NextScript />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s){w._uptime_rum={};w._uptime_rum.uuid='HZ04-D9476B5693D2D398';w._uptime_rum.url='https://rum.uptime.com/rum/record-data';s=document.createElement('script');s.async=1;s.src='https://rum.uptime.com/static/rum/compiled/rum.js';d.getElementsByTagName('head')[0].appendChild(s);})(window,document);`
          }}
        />
        </body>
      </Html>
    )
  }
}

export default MyDocument