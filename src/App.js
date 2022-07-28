import React from 'react';
import Header from './components/Header';
import Content from './components/Content';
import GlobalStyles from './styles/GlobalStyles';
import MenuSpacing from './components/MenuSpacing';
import Projects from './components/Projects';

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <MenuSpacing />
      <Content />
      <Projects />
    </>
  );
}

export default App;
