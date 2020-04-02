import React, { useCallback, useState, useEffect } from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import Link from 'next/link';
import Router from 'next/router';
import { Form, Input, Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { SIGN_UP_ROUTE_INDEX, LOG_IN_REQUEST, LOAD_USER_REQUEST } from '../reducers/user';
import { beanColor } from '../public/palette';
import '../public/base.css';
import '../public/style.css';
import 'antd/dist/antd.css';

export default function MainPage() {
  const dispatch = useDispatch();
  const { justSignedUp, me, isLoggingIn, logInErrorReason } = useSelector((state) => state.user);

  useEffect(() => {
    if (!me) {
      dispatch({
        type: LOAD_USER_REQUEST,
      });
    }
  }, []);
  useEffect(() => {
    dispatch({
      type: SIGN_UP_ROUTE_INDEX,
    });
  }, [justSignedUp]);
  useEffect(() => {
    if (me) {
      Router.push('/friendList');
    }
  });

  const onFinish = useCallback(
    (values) => {
      console.log('Success:', values);
      dispatch({
        type: LOG_IN_REQUEST,
        data: values,
      });
      if (me) {
        Router.push('/friendList');
      }
    },
    [dispatch]
  );
  const onFinishFailed = useCallback((errorInfo) => {
    console.log('Failed:', errorInfo);
  }, []);

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 8 },
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
    labelCol: { span: 3, offset: 12 },
  };

  return (
    <>
      <Head>
        <title>Vanilla Talk!</title>
      </Head>
      <Container>
        <FormContainer>
          <H1>Vanilla Talk!</H1>
          <FormContainer50>
            <Form
              {...layout}
              name="login"
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <Form.Item
                label="ID"
                name="userId"
                rules={[{ required: true, message: 'ID를 입력해주세요!' }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="비밀번호"
                name="userPassword"
                rules={[{ required: true, message: '비밀번호를 입력해주세요!' }]}
              >
                <Input.Password />
              </Form.Item>
              <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit" loading={isLoggingIn}>
                  로그인
                </Button>
                <Button htmlType="button">
                  <Link href="/signUpPage">
                    <a>회원가입</a>
                  </Link>
                </Button>
              </Form.Item>
            </Form>
            {logInErrorReason ?? (
              <p style={{ color: 'red', textAlign: 'center' }}>{logInErrorReason}</p>
            )}
          </FormContainer50>
        </FormContainer>
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: table;
`;
const H1 = styled.h1`
  text-align: center;
  font-family: 'bm_hanna_pro';
  color: ${beanColor};
  font-size: 2em;
  padding-bottom: 25px;
`;
const FormContainer = styled.div`
  display: table-cell;
  vertical-align: middle;
`;
const FormContainer50 = styled.div`
  width: 50%;
  margin: 0 auto;
`;
