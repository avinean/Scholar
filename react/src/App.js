let path = window.location.pathname;
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import React, { Component } from 'react';
import Header from './comps/Header.js';
import Regform from './comps/Regform.js';
import Autform from './comps/Autform.js';
import Resform from './comps/Resform.js';
import Faqform from './comps/Faqform.js';
import Prenav from './comps/Prenav.js';
import Wrapper from './styled/WrapperCSS.js';

class App extends Component {
  render() {
    return (
      <Router>
        <Wrapper>
            <Header />  
                
            <Route exact path="/" component={Regform} />
            <Route path="/autorize" component={Autform} />
            <Route path="/restore" component={Resform} />
            <Route path="/faq" component={Faqform} />
            
            <Prenav />
        </Wrapper>
      </Router>
    );
  }
}

export default App;