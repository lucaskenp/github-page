import React from 'react';
import Header from './components/Header';
import Content from './components/Content';
import GlobalStyles from './styles/GlobalStyles';
import MenuSpacing from './components/MenuSpacing';

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <MenuSpacing />
      <Content />
    </>
  );
}

export default App;
