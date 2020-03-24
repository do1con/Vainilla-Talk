import React from 'react';
import App from 'next/app';
import MainPage from './mainPage';
import '../public/base.css';
import '../public/style.css';
import 'antd/dist/antd.css';

export default class RootApp extends App {
  render() {
    return <MainPage />;
  }
}
