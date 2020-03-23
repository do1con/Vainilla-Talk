import React from 'react';
import App from 'next/app';
import MainPage from './mainPage';

export default class RootApp extends App {
  render() {
    return <MainPage />;
  }
}
