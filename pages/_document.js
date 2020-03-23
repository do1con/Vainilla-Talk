import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class RootDocument extends Document {
  render() {
    return (
      <Html lang="ko">
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=no"
          />
          <meta name="description" content="프론트엔드 개발자 김성수" />
          <meta name="keywords" content="개발자,리액트 개발자,김성수,프론트엔드" />
          <link rel="shortcut icon" href="/images/favicon.ico" />
          <link rel="icon" href="/images/favicon.ico" />
          <style global jsx>{`
            @font-face {
              font-family: 'bm_jua';
              font-style: normal;
              font-weight: 400;
              src: url('/fonts/BMJUA_otf.otf') format('opentype'),
                url('/fonts/BMJUA_ttf.ttf') format('truetype');
            }

            body {
              font-family: 'bm_jua';
            }
          `}</style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
