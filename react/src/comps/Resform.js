import React, { Component } from 'react';
import axios from 'axios';
import {RegFormTag, H2, Message, Input, Button, A} from 
        '../styled/RegFormCSS.js';

class Resform extends Component {
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
    
        <H2> Restore </H2>

      </RegFormTag>
    );
  }
}

export default Resform;
