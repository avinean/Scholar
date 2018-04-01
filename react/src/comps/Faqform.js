import React, { Component } from 'react';
import axios from 'axios';
import {RegFormTag, H2, Message, Input, Button, A} from 
        '../styled/RegFormCSS.js';

class Faqform extends Component {
  constructor(props){
    super(props);
    this.state = {
      mail: ``,
      pass: ``,
      mess: ``
    }
  }
      
  render() {
    return (
      <RegFormTag>
    
        <H2> FAQ </H2>

      </RegFormTag>
    );
  }
}

export default Faqform;
