import React from 'react';
import App from 'next/app';
import Link from 'next/link';
import MainPage from './mainPage';
import '../public/base.css';

export default class RootApp extends App {
  render() {
    return <MainPage />;
  }
}
