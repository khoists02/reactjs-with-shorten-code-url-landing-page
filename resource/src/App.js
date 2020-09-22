import React from 'react';
import Banner from './components/Banner/';
import Form from './components/Form/';
// import Example from './components/Example/';
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
      {/* <Example></Example> */}

      <Form></Form>
    </div>
  );
}

export default App;
