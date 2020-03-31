import React, { useCallback, useEffect } from 'react';
import Head from 'next/head';
import Router from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { Form, Input, Button, Checkbox } from 'antd';
import { SIGN_UP_REQUEST } from '../reducers/user';
import { beanColor } from '../public/palette';
import '../public/base.css';
import '../public/style.css';
import 'antd/dist/antd.css';

export default function SignUpPage() {
  const dispatch = useDispatch();
  const { isSigningUp, me, signUpErrorReason } = useSelector((state) => state.user);
  useEffect(() => {
    console.log(me);
    if (me !== null) {
      alert('회원가입 성공!');
      Router.push('/');
    }
  }, [me && me.id]);
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 8 },
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
    labelCol: { span: 3, offset: 12 },
  };
  const onFinish = useCallback(
    (values) => {
      dispatch({
        type: SIGN_UP_REQUEST,
        data: values,
      });
    },
    [dispatch, SIGN_UP_REQUEST]
  );

  const onFinishFailed = useCallback((errorInfo) => {
    console.log('Failed:', errorInfo);
  }, []);

  return (
    <>
      <Head>
        <title>Welcome to Vanilla Talk!</title>
      </Head>
      <Container>
        <FormContainer>
          <H1>Welcome to Vanilla Talk!</H1>
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
                hasFeedback
              >
                <Input />
              </Form.Item>
              {signUpErrorReason && <p>{signUpErrorReason}</p>}
              <Form.Item
                label="닉네임"
                name="userNickname"
                rules={[{ required: true, message: '닉네임을 입력해주세요!' }]}
                hasFeedback
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="비밀번호"
                name="userPassword"
                rules={[{ required: true, message: '비밀번호를 입력해주세요.' }]}
                hasFeedback
              >
                <Input.Password />
              </Form.Item>
              <Form.Item
                label="비밀번호 확인"
                name="userPasswordCheck"
                dependencies={['userPassword']}
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: '비밀번호를 한번 더 입력해주세요.',
                  },
                  ({ getFieldValue }) => ({
                    validator(rule, value) {
                      if (!value || getFieldValue('userPassword') === value) {
                        return Promise.resolve();
                      }
                      // eslint-disable-next-line prefer-promise-reject-errors
                      return Promise.reject('비밀번호가 일치하지 않습니다.');
                    },
                  }),
                ]}
                style={{ marginBottom: '0px' }}
              >
                <Input.Password />
              </Form.Item>
              <Form.Item
                {...tailLayout}
                name="userTerm"
                valuePropName="checked"
                rules={[
                  {
                    required: true,
                    message: '동의는 필수입니다.',
                  },
                ]}
              >
                <Checkbox>말썽 부리지 않을것을 약속합니다.</Checkbox>
              </Form.Item>
              <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit" loading={isSigningUp}>
                  회원가입
                </Button>
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
