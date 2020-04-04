/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useCallback, useState, useRef } from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { useSelector, useDispatch } from 'react-redux';
import { Comment, Avatar, Tooltip, Form, Input, Button } from 'antd';
import { SendOutlined } from '@ant-design/icons';
import BoardLayout from '../components/boardLayout';
import { setCurrentPage } from '../reducers/user';

export default function friendList() {
  const dispatch = useDispatch();
  const { TextArea } = Input;
  const { me } = useSelector((state) => state.user);
  const chatArea = useRef();

  useEffect(() => {
    dispatch(setCurrentPage('/friendList'));
  }, []);

  const onLoadChatArea = useCallback(() => {
    chatArea.current.scroll({
      behavior: 'smooth',
      top: chatArea.current.offsetHeight * 3,
    });
  }, [chatArea]);

  return (
    <BoardLayout>
      <ChatWrapper>
        <ChatArea onLoad={onLoadChatArea} ref={chatArea}>
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
          <TextArea rows={1} className="noresize" style={{ marginBottom: '10px' }} />
          <Button htmlType="submit" type="primary">
            <SendOutlined />
          </Button>
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
  overflow: hidden;
`;
const ChatArea = styled.div`
  width: 90%;
  height: 75%;
  position: absolute;
  top: 0px;
  overflow-y: scroll;
  scroll-behavior: smooth;
`;

const Chat = styled.p`
  line-height: 1.2em;
  padding: 10px;
  word-break: keep-all;
`;

const InputArea = styled.div`
  width: 90%;
  position: absolute;
  bottom: 5%;
  height: 20%;
  overflow: hidden;
`;
