import React from 'react';
import App, { Container } from 'next/app';
import MainPage from './mainPage';
import '../static/designs/base.css';

export default class RootApp extends App {
  render() {
    return (
      <Container>
        <MainPage />
      </Container>
    );
  }
}
