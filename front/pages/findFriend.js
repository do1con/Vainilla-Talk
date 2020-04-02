import React, { useState, useEffect, useCallback, useRef } from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import reqwest from 'reqwest';
import InfiniteScroll from 'react-infinite-scroller';
import { Input, Select, List, message, Avatar, Spin } from 'antd';
import BoardLayout from '../components/boardLayout';

const { Search } = Input;
const { Option } = Select;
const fakeDataUrl = 'https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo';

export default function findFriend() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [searchSelect, setSearchSelect] = useState('userId');

  const fetchData = (callback) => {
    reqwest({
      url: fakeDataUrl,
      type: 'json',
      method: 'get',
      contentType: 'application/json',
      success: (res) => {
        callback(res);
      },
    });
  };

  useEffect(() => {
    fetchData((res) => {
      setData(res.results);
    });
  }, []);

  const handleInfiniteOnLoad = () => {
    setLoading(true);
    if (data.length > 14) {
      message.warning('Infinite List loaded all');
      setHasMore(false);
      setLoading(false);
      return false;
    }
    fetchData((res) => {
      setData(data.concat(res.results));
      setLoading(false);
    });
    return true;
  };

  const onSearch = useCallback(
    (value) => {
      console.log(value);
      console.log(searchSelect);
      console.log('hi');
    },
    [searchSelect]
  );
  const onChangeSearchSelect = useCallback(
    (e) => {
      setSearchSelect(e);
    },
    [setSearchSelect]
  );

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
          />
        </Input.Group>
        <HorizontalLine />
        <div className="demo-infinite-container">
          <InfiniteScroll
            initialLoad={false}
            pageStart={0}
            loadMore={handleInfiniteOnLoad}
            hasMore={!loading && hasMore}
            useWindow={false}
          >
            <List
              dataSource={data}
              renderItem={(item) => (
                <List.Item key={item.id}>
                  <List.Item.Meta
                    avatar={
                      <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                    }
                    title={<a href="https://ant.design">{item.name.last}</a>}
                    description={item.email}
                  />
                  <div>Content</div>
                </List.Item>
              )}
            >
              {loading && hasMore && (
                <div className="demo-loading-container">
                  <Spin />
                </div>
              )}
            </List>
          </InfiniteScroll>
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
`;

const HorizontalLine = styled.hr`
  display: block;
  width: 100%;
  height: 1px;
  background-color: #000000;
  margin: 20px 0 20px;
`;
