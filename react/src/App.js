let path = window.location.pathname;
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import React, { Component } from 'react';
import Header from './comps/Header.js';
import Regform from './comps/Regform.js';
import Autform from './comps/Autform.js';
import Resform from './comps/Resform.js';
import Faqform from './comps/Faqform.js';
import FormCreator from './comps/FormCreator.js';
import PollViewer from './comps/PollViewer.js';
import TestListViewer from './comps/TestListViewer.js';
import Prenav from './comps/Prenav.js';
import Profile from './comps/Profile.js';
import Wrapper from './styled/WrapperCSS.js';

class App extends Component {
  render() {
    return (
      <Router>
        <Wrapper>
            <Header />  
                
            <Route exact path="/" component={Autform} />
            <Route path="/reg" component={Regform} />
            <Route path="/restore" component={Resform} />
            <Route path="/faq" component={Faqform} />
            <Route path="/profile" component={Profile} />
            <Route path="/former" component={FormCreator} />
            <Route path="/viewer" component={TestListViewer} />
            <Route path="/poll/:id" component={PollViewer} />
            
            <Prenav />
        </Wrapper>
      </Router>
    );
  }
}

export default App;
