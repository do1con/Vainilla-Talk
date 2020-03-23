import React from 'react';
import styled from 'styled-components';
import { Layout } from 'antd';
import Head from 'next/head';

const { Header, Footer, Content } = Layout;

const MainPage = function () {
  return (
    <>
      <Head>
        <title>Introduce Seongsoo Kim</title>
      </Head>
      <Layout>
        <Header>
          <H1 className="hi">ssKim 안녕하세요 주아</H1>
        </Header>
        <Content>dddddd</Content>
        <Footer>dfsdfsdf</Footer>
      </Layout>
    </>
  );
};

export default MainPage;

const H1 = styled.h1`
  font-family: 'bm_jua';
`;
