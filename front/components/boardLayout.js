/* eslint-disable no-restricted-globals */
import React, { useEffect, useCallback, useState } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { Layout, Menu, Avatar, Button } from 'antd';
import { UserOutlined, CheckOutlined, CloseOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import 'antd/dist/antd.css';
import '../public/base.css';
import '../public/style.css';
import { LOAD_USER_REQUEST, LOG_OUT_REQUEST, ACCEPT_FRIEND_REQUEST } from '../reducers/user';

const { Header, Content, Sider } = Layout;
const { Submenu } = Menu;

export default function BoardLayout(children) {
  const dispatch = useDispatch();
  const [currentUrl, setCurrentUrl] = useState('');
  const { me } = useSelector((state) => state.user);

  useEffect(() => {
    setCurrentUrl(Router.router.pathname);
    console.log(me);
    if (!me) {
      dispatch({
        type: LOAD_USER_REQUEST,
      });
      if (!me) {
        location.href = '/';
      }
    }
  });

  const onClickLogout = useCallback(() => {
    dispatch({
      type: LOG_OUT_REQUEST,
    });
  }, [dispatch, LOG_OUT_REQUEST]);
  const onClickAcceptFriend = useCallback((userId) => {
    dispatch({
      type: ACCEPT_FRIEND_REQUEST,
      data: {
        userId: me.userId,
        friendId: userId,
      },
    });
  }, []);

  return (
    <Layout style={{ height: '100%', overflow: 'hidden' }}>
      <Header className="header">
        <Logo>
          <Link href="/">
            <A>
              <H2>Vanilla Talk!</H2>
            </A>
          </Link>
        </Logo>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[currentUrl]}>
          <Menu.Item key="/friendList">
            <Link href="/friendList">
              <a>채팅</a>
            </Link>
          </Menu.Item>
          <Menu.Item key="/findFriend">
            <Link href="/findFriend">
              <a>친구 찾기</a>
            </Link>
          </Menu.Item>
          <Menu.Item key="/changeUserInfo">
            <Link href="/changeUserInfo">
              <a>정보 수정</a>
            </Link>
          </Menu.Item>
          <Menu.Item key="4" onClick={onClickLogout}>
            로그아웃
          </Menu.Item>
        </Menu>
      </Header>
      <Layout>
        {currentUrl === '/friendList' ? (
          <Sider width={220} className="site-layout-background" breakpoint="lg" collapsedWidth="0">
            <Menu
              mode="inline"
              defaultSelectedKeys={['open']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%', borderRight: 0, top: 0 }}
            >
              {me.Askfriend !== null &&
                me.AskFriend.map((data) => {
                  if (data.AskFriends.UserUserId === me.userId) {
                    return (
                      <Menu.Item
                        key={data.AskFriends.id}
                        inlineCollapsed={false}
                        style={{
                          height: '75px',
                          textOverflow: 'clip',
                        }}
                        disabled
                      >
                        <span style={{ color: '#787878' }}>
                          ID: {data.AskFriends.AskFriendUserId}
                        </span>
                        <br />
                        <Button
                          size="small"
                          type="primary"
                          onClick={() => onClickAcceptFriend(data.AskFriends.AskFriendUserId)}
                        >
                          <CheckOutlined />
                          수락
                        </Button>
                        <Button size="small">
                          <CloseOutlined />
                          거절
                        </Button>
                      </Menu.Item>
                    );
                  }
                  return null;
                })}
              <Menu.Item key="open">
                <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
                &nbsp;광 장
              </Menu.Item>
              {me.Friend !== null
                ? me.Friend.map((data) => (
                    <Menu.Item key="data.userId">
                      <Avatar>{data.nickname[0]}</Avatar> {data.nickname}
                    </Menu.Item>
                  ))
                : '친구가 아직 없네요..ㅠㅠ'}
            </Menu>
          </Sider>
        ) : null}
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
