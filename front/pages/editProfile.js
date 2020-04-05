import React, { useState, useEffect, useCallback, useRef } from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { Input, Select, List, message, Avatar, Spin, Form, Checkbox, Button } from 'antd';
import BoardLayout from '../components/boardLayout';
import {
  SEARCH_FRIEND_REQUEST,
  ASK_FRIEND_REQUEST,
  setCurrentPage,
  EDIT_PROFILE_REQUEST,
} from '../reducers/user';

const { Search } = Input;
const { Option } = Select;
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 8 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
  labelCol: { span: 3, offset: 12 },
};

export default function editProfile() {
  const dispatch = useDispatch();
  const [checkChangePassword, setCheckChangePassword] = useState(false);
  const { me } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(setCurrentPage('/editProfile'));
  }, []);

  const onChangeEditPassword = useCallback(() => {
    console.log(checkChangePassword);
    setCheckChangePassword(!checkChangePassword);
  }, [checkChangePassword, setCheckChangePassword]);
  const onFinishEdit = useCallback(
    (data) => {
      console.log(data);
      dispatch({
        type: EDIT_PROFILE_REQUEST,
        data: {
          ...data,
          userId: me.userId,
        },
      });
    },
    [dispatch]
  );

  return (
    <BoardLayout>
      <Head>
        <title>정보수정 - Vanilla Talk!</title>
      </Head>
      <ChatWrapper>
        <Form {...layout} name="login" initialValues={{ remember: true }} onFinish={onFinishEdit}>
          <Form.Item label="ID" name="userId">
            <Input defaultValue={me.userId} disabled />
          </Form.Item>
          <Form.Item
            label="닉네임"
            name="nickname"
            rules={[{ required: !checkChangePassword, message: '닉네임을 입력해주세요!' }]}
            hasFeedback
          >
            <Input defaultValue={me.nickname} />
          </Form.Item>
          <Form.Item {...tailLayout} name="changePassword" valuePropName="checked">
            <Checkbox onChange={onChangeEditPassword}>비밀번호 변경</Checkbox>
          </Form.Item>
          <Form.Item
            label="기존 비밀번호"
            name="currentPassword"
            rules={[{ required: checkChangePassword, message: '비밀번호를 입력해주세요.' }]}
            hasFeedback
          >
            <Input.Password disabled={!checkChangePassword} />
          </Form.Item>
          <Form.Item
            label="비밀번호"
            name="userPassword"
            rules={[{ required: checkChangePassword, message: '비밀번호를 입력해주세요.' }]}
            hasFeedback
          >
            <Input.Password disabled={!checkChangePassword} />
          </Form.Item>
          <Form.Item
            label="비밀번호 확인"
            name="userPasswordCheck"
            dependencies={['userPassword']}
            hasFeedback
            rules={[
              {
                required: checkChangePassword,
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
            <Input.Password disabled={!checkChangePassword} />
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit" style={{ marginTop: '10px' }}>
              수정
            </Button>
          </Form.Item>
        </Form>
      </ChatWrapper>
    </BoardLayout>
  );
}

const ChatWrapper = styled.div`
  width: 80%;
  height: 80%;
  background-color: #ffffff;
  margin: 0 auto 5%;
  box-shadow: 0px 5px 14px 5px #bbbbbb;
  box-sizing: content-box;
  padding: 5%;
  position: relative;
  overflow-y: scroll;
  overflow-x: hidden;
`;
const HorizontalLine = styled.hr`
  display: block;
  width: 100%;
  height: 1px;
  background-color: #000000;
  margin: 20px 0 20px;
`;
