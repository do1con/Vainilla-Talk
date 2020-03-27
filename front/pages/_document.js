import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import '../public/base.css';
import '../public/style.css';
import 'antd/dist/antd.css';

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
          <meta name="description" content="Kakao Talk 클론 메신저, SNS" />
          <meta name="keywords" content="Vanilla Talk, 바닐라톡, 바닐라 톡" />
          <link rel="shortcut icon" href="/images/favicon.ico" />
          <link rel="icon" href="/images/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
