import React from 'react';
import './App.scss';

import Nav from './components/nav';
import Footer from './components/footer';
import Content from './components/body'

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
