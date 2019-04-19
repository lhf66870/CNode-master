import React, { Component } from 'react';

import MainHeader from "./view/public/main-header"
import MainFooter from "./view/public/main-footer"

import './view/index.css';

import RouterIndex from './router/index'
class App extends Component {
  render() {
    return (<div className="pageWrap">
      <MainHeader />
      <main className="main">
        <RouterIndex />
      </main>
      <MainFooter />
    </div>);
  }
}

export default App;
