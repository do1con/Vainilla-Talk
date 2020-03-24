import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';
import { vanillaColor, beanColor } from '../public/palette';

const MainPage = function () {
  return (
    <>
      <Head>
        <title>Vanilla Talk!</title>
      </Head>
      <Container>
        <H1>Vanilla Talk!</H1>
      </Container>
    </>
  );
};

export default MainPage;

const Container = styled.div`
  width: 100%;
  height: 100vw;
  background-color: ${vanillaColor};
`;

const H1 = styled.h1`
  text-align: center;
  font-family: 'bm_hanna_pro';
  color: ${beanColor};
  padding-top: 300px;
  font-size: 2em;
`;
