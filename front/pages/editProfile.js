import React, { useState, useEffect, useCallback, useRef } from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { Input, Select, List, message, Avatar, Spin } from 'antd';
import BoardLayout from '../components/boardLayout';
import { SEARCH_FRIEND_REQUEST, ASK_FRIEND_REQUEST, setCurrentPage } from '../reducers/user';

const { Search } = Input;
const { Option } = Select;

export default function editProfile() {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [searchSelect, setSearchSelect] = useState('userId');
  const { isSearchingFriend, foundFriendList, me } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(setCurrentPage('/editProfile'));
    if (me) {
      dispatch({
        type: SEARCH_FRIEND_REQUEST,
        data: {
          where: searchSelect,
          value: '',
          reqUser: me.userId,
        },
      });
    }
  }, []);

  const onSearch = useCallback(
    (value) => {
      console.log(value);
      console.log(searchSelect);
      console.log('hi');
      dispatch({
        type: SEARCH_FRIEND_REQUEST,
        data: {
          where: searchSelect,
          value: value,
          reqUser: me.userId,
        },
      });
    },
    [searchSelect]
  );
  const onChangeSearchSelect = useCallback(
    (e) => {
      setSearchSelect(e);
    },
    [setSearchSelect]
  );
  const onClickAskFriend = useCallback((askFriendId) => {
    console.log(askFriendId);
    dispatch({
      type: ASK_FRIEND_REQUEST,
      data: {
        userId: me.userId,
        friendId: askFriendId,
      },
    });
  });

  return (
    <BoardLayout>
      <Head>
        <title>친구찾기 - Vanilla Talk!</title>
      </Head>
      <ChatWrapper>
        <Input.Group compact>
          <Select
            defaultValue={searchSelect}
            style={{ width: '20%' }}
            onChange={onChangeSearchSelect}
          >
            <Option value="userId">ID로 찾기</Option>
            <Option value="userNickname">닉네임으로 찾기</Option>
          </Select>
          <Search
            placeholder="input search text"
            onSearch={onSearch}
            enterButton
            style={{ width: '80%' }}
            loading={isSearchingFriend}
          />
        </Input.Group>
        <HorizontalLine />
        <div style={{ overflowY: 'scroll', height: '80%' }}>
          {foundFriendList && (
            <List
              dataSource={foundFriendList}
              renderItem={(item) => (
                <List.Item key={item.id}>
                  <List.Item.Meta
                    avatar={<Avatar>{item.nickname[0]}</Avatar>}
                    title={item.nickname}
                    description={item.userId}
                  />
                  <Button type="button" onClick={() => onClickAskFriend(item.userId)}>
                    친구 요청
                  </Button>
                </List.Item>
              )}
            >
              {loading && hasMore && (
                <div className="demo-loading-container">
                  <Spin />
                </div>
              )}
            </List>
          )}
        </div>
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
const HorizontalLine = styled.hr`
  display: block;
  width: 100%;
  height: 1px;
  background-color: #000000;
  margin: 20px 0 20px;
`;
const Button = styled.button`
  border: 0;
  background-color: #ffffff;
  color: blue;
  cursor: pointer;
`;
