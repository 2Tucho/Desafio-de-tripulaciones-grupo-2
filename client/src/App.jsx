import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import './styles/pages/_App.scss';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Main />
      </BrowserRouter>
    </>
  )
}

export default App
