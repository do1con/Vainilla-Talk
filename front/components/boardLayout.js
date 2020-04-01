import React, { useEffect, useCallback } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { Layout, Menu, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import 'antd/dist/antd.css';
import '../public/base.css';
import '../public/style.css';
import { LOAD_USER_REQUEST, LOG_OUT_REQUEST } from '../reducers/user';

const { Header, Content, Sider } = Layout;

export default function BoardLayout(children) {
  const dispatch = useDispatch();

  const { me } = useSelector((state) => state.user);

  useEffect(() => {
    if (!me) {
      Router.push('/');
    }
  });

  const onClickLogout = useCallback(() => {
    console.log('로그아웃 요청 옴');
    dispatch({
      type: LOG_OUT_REQUEST,
    });
  }, [dispatch, LOG_OUT_REQUEST]);
  return (
    <Layout style={{ height: '100%' }}>
      <Header className="header">
        <Logo>
          <Link href="/">
            <A>
              <H2>Vanilla Talk!</H2>
            </A>
          </Link>
        </Logo>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">
            <Link href="/friendList">채팅</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link href="/findFriend">친구 찾기</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link href="/changeUserInfo">정보 수정</Link>
          </Menu.Item>
          <Menu.Item key="4" onClick={onClickLogout}>
            로그아웃
          </Menu.Item>
        </Menu>
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background" breakpoint="lg" collapsedWidth="0">
          <Menu
            mode="inline"
            defaultSelectedKeys={['open']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
          >
            <Menu.Item key="open">
              <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
              &nbsp;광 장
            </Menu.Item>
            <Menu.Item key="1">
              <Avatar>박</Avatar> 박호석
            </Menu.Item>
            <Menu.Item key="2">
              <Avatar>이</Avatar> 이광민
            </Menu.Item>
            <Menu.Item key="3">
              <Avatar>노</Avatar> 노주선
            </Menu.Item>
            <Menu.Item key="4">
              <Avatar>강</Avatar> 강현우
            </Menu.Item>
            <Menu.Item key="5">
              <Avatar>최</Avatar> 최효훈
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            {children.children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}

const Logo = styled.div`
  width: 127px;
  height: 31px;
  margin: 16px 24px 16px 0;
  float: left;
`;
const H2 = styled.h2`
  font-family: 'bm_hanna_pro';
  color: #ffffff;
  font-size: 1.4em;
  margin-top: -17px;
`;
const A = styled.span`
  cursor: pointer;
`;
