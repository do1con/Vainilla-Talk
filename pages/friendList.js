/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import moment from 'moment';
import { Comment, Avatar, Tooltip, Form, Input, Button } from 'antd';
import BoardLayout from '../components/boardLayout';

export default function friendList() {
  const userName = '김성수짱';
  const { TextArea } = Input;
  return (
    <BoardLayout>
      <Head>
        <title>{userName}님, 안녕하세요!</title>
      </Head>
      <ChatWrapper>
        <ChatArea>
          <Comment
            author={<a>Han Solo</a>}
            avatar={
              <Avatar
                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                alt="Han Solo"
              />
            }
            content={
              <Chat>
                디자인이 세상에서 제일 어려워. 정말정말 긴 문자정말정말 긴 문자정말정말 긴
                문자정말정말 긴 문자정말정말 긴 문자정말정말 긴 문자정말정말 긴 문자 정말정말 긴
                문자정말정말 긴 문자 정말정말 긴 문자
              </Chat>
            }
            datetime={
              <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                <span>{moment().fromNow()}</span>
              </Tooltip>
            }
          />
          <Comment
            className="ant-comment-me"
            author={<a>Han Solo</a>}
            content={
              <Chat>
                디자인이 세상에서 제일 어려워. 정말정말 긴 문자정말정말 긴 문자정말정말 긴
                문자정말정말 긴 문자정말정말 긴 문자정말정말 긴 문자정말정말 긴 문자 정말정말 긴
                문자정말정말 긴 문자 정말정말 긴 문자
              </Chat>
            }
            avatar={
              <Avatar
                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                alt="Han Solo"
              />
            }
            datetime={
              <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                <span>{moment().fromNow()}</span>
              </Tooltip>
            }
          />
          <Comment
            author={<a>Han Solo</a>}
            avatar={
              <Avatar
                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                alt="Han Solo"
              />
            }
            content={
              <Chat>
                디자인이 세상에서 제일 어려워. 정말정말 긴 문자정말정말 긴 문자정말정말 긴
                문자정말정말 긴 문자정말정말 긴 문자정말정말 긴 문자정말정말 긴 문자 정말정말 긴
                문자정말정말 긴 문자 정말정말 긴 문자
              </Chat>
            }
            datetime={
              <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                <span>{moment().fromNow()}</span>
              </Tooltip>
            }
          />
          <Comment
            className="ant-comment-me"
            author={<a>Han Solo</a>}
            content={
              <Chat>
                디자인이 세상에서 제일 어려워. 정말정말 긴 문자정말정말 긴 문자정말정말 긴
                문자정말정말 긴 문자정말정말 긴 문자정말정말 긴 문자정말정말 긴 문자 정말정말 긴
                문자정말정말 긴 문자 정말정말 긴 문자
              </Chat>
            }
            avatar={
              <Avatar
                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                alt="Han Solo"
              />
            }
            datetime={
              <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                <span>{moment().fromNow()}</span>
              </Tooltip>
            }
          />
          <Comment
            author={<a>Han Solo</a>}
            avatar={
              <Avatar
                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                alt="Han Solo"
              />
            }
            content={
              <Chat>
                디자인이 세상에서 제일 어려워. 정말정말 긴 문자정말정말 긴 문자정말정말 긴
                문자정말정말 긴 문자정말정말 긴 문자정말정말 긴 문자정말정말 긴 문자 정말정말 긴
                문자정말정말 긴 문자 정말정말 긴 문자
              </Chat>
            }
            datetime={
              <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                <span>{moment().fromNow()}</span>
              </Tooltip>
            }
          />
          <Comment
            className="ant-comment-me"
            author={<a>Han Solo</a>}
            content={
              <Chat>
                디자인이 세상에서 제일 어려워. 정말정말 긴 문자정말정말 긴 문자정말정말 긴
                문자정말정말 긴 문자정말정말 긴 문자정말정말 긴 문자정말정말 긴 문자 정말정말 긴
                문자정말정말 긴 문자 정말정말 긴 문자
              </Chat>
            }
            avatar={
              <Avatar
                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                alt="Han Solo"
              />
            }
            datetime={
              <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                <span>{moment().fromNow()}</span>
              </Tooltip>
            }
          />
          <Comment
            author={<a>Han Solo</a>}
            avatar={
              <Avatar
                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                alt="Han Solo"
              />
            }
            content={
              <Chat>
                디자인이 세상에서 제일 어려워. 정말정말 긴 문자정말정말 긴 문자정말정말 긴
                문자정말정말 긴 문자정말정말 긴 문자정말정말 긴 문자정말정말 긴 문자 정말정말 긴
                문자정말정말 긴 문자 정말정말 긴 문자
              </Chat>
            }
            datetime={
              <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                <span>{moment().fromNow()}</span>
              </Tooltip>
            }
          />
          <Comment
            className="ant-comment-me"
            author={<a>Han Solo</a>}
            content={
              <Chat>
                디자인이 세상에서 제일 어려워. 정말정말 긴 문자정말정말 긴 문자정말정말 긴
                문자정말정말 긴 문자정말정말 긴 문자정말정말 긴 문자정말정말 긴 문자 정말정말 긴
                문자정말정말 긴 문자 정말정말 긴 문자
              </Chat>
            }
            avatar={
              <Avatar
                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                alt="Han Solo"
              />
            }
            datetime={
              <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                <span>{moment().fromNow()}</span>
              </Tooltip>
            }
          />
          <Comment
            author={<a>Han Solo</a>}
            avatar={
              <Avatar
                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                alt="Han Solo"
              />
            }
            content={
              <Chat>
                디자인이 세상에서 제일 어려워. 정말정말 긴 문자정말정말 긴 문자정말정말 긴
                문자정말정말 긴 문자정말정말 긴 문자정말정말 긴 문자정말정말 긴 문자 정말정말 긴
                문자정말정말 긴 문자 정말정말 긴 문자
              </Chat>
            }
            datetime={
              <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                <span>{moment().fromNow()}</span>
              </Tooltip>
            }
          />
          <Comment
            className="ant-comment-me"
            author={<a>Han Solo</a>}
            content={
              <Chat>
                디자인이 세상에서 제일 어려워. 정말정말 긴 문자정말정말 긴 문자정말정말 긴
                문자정말정말 긴 문자정말정말 긴 문자정말정말 긴 문자정말정말 긴 문자 정말정말 긴
                문자정말정말 긴 문자 정말정말 긴 문자
              </Chat>
            }
            avatar={
              <Avatar
                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                alt="Han Solo"
              />
            }
            datetime={
              <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                <span>{moment().fromNow()}</span>
              </Tooltip>
            }
          />
        </ChatArea>
        <InputArea>
          <Form.Item>
            <TextArea rows={2} className="noresize" />
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit" type="primary">
              발할라!
            </Button>
          </Form.Item>
        </InputArea>
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
`;
const ChatArea = styled.div`
  width: 90%;
  height: 75%;
  position: absolute;
  top: 0px;
  overflow-y: scroll;
`;

const Chat = styled.p`
  line-height: 1.2em;
  padding: 10px;
  word-break: keep-all;
`;

const InputArea = styled.div`
  width: 90%;
  position: absolute;
  bottom: 15%;
  height: 10%;
`;
