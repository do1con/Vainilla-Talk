import React, { useCallback } from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import Link from 'next/link';
import Router from 'next/router';
import { Form, Input, Button, Checkbox } from 'antd';
import { beanColor } from '../public/palette';
import '../public/base.css';
import '../public/style.css';
import 'antd/dist/antd.css';

export default function MainPage() {
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 8 },
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
    labelCol: { span: 3, offset: 12 },
  };
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  const onClickSignUp = useCallback(() => {
    console.log('click sign up');
    Router.push('/boardPage');
  }, []);
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

              <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                <Checkbox>나를 기억해줘!</Checkbox>
              </Form.Item>

              <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                  로그인
                </Button>
                <Link href="/signUpPage">
                  <Button htmlType="button" onClick={onClickSignUp}>
                    회원가입
                  </Button>
                </Link>
              </Form.Item>
            </Form>
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
`;

const FormContainer = styled.div`
  display: table-cell;
  vertical-align: middle;
`;

const FormContainer50 = styled.div`
  width: 50%;
  margin: 0 auto;
`;
