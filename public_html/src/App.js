import React, { Component } from 'react';
import Header from './comps/Header.jsx';
import RegForm from './comps/RegForm.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <RegForm />
      </div>
    );
  }
}

export default App;
