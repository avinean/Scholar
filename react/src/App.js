let path = window.location.pathname;
let Comp;

import React, { Component } from 'react';
import Header from './comps/Header.js';
import Regform from './comps/Regform.js';
import Profile from './comps/Profile.js';

switch (path) {
  case '/':
    Comp = Regform;
    break;
  case '/profile':
    Comp = Profile;
    break;
}

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Comp />
      </div>
    );
  }
}

export default App;
