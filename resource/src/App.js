import React from 'react';
import Banner from './components/Banner/';
import GetLink from './components/GetLink/';
import Header from './components/Header/';
import Statics from './components/Statics/';
import './index.scss';

function App() {
  return (
    <div className="app">
      <Header></Header>
      <div className="main pos-r">
        <Banner></Banner>
        <GetLink></GetLink>
      </div>
      <Statics></Statics>

    </div>
  );
}

export default App;
