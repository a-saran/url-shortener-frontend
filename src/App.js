import React from 'react';
import './App.scss';

import Nav from './components/nav'
import Content from './components/body'

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Content />
    </div>
  );
}

export default App;
