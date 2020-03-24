import React, { useCallback } from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import { Form, Input, Button, Checkbox } from 'antd';
import { beanColor } from '../public/palette';

const SignUpPage = function () {
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
  }, []);
  return <>hhhhhhhhhhhh</>;
};

export default SignUpPage;

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
