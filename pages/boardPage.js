import React from 'react';
import Head from 'next/head';
import BoardLayout from '../components/boardLayout';

export default function boardPage() {
  const userName = '김성수짱';
  return (
    <BoardLayout>
      <Head>
        <title>{userName}님, 안녕하세요!</title>
      </Head>
      <p>저는 로그인 직후 오는 페이지 입니다 !!!!!!!!!!!!!!!</p>
    </BoardLayout>
  );
}
