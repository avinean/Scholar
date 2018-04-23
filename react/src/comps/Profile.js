import React, { Component } from 'react';
import {RegFormTag} from '../styled/RegFormCSS.js';
import Button from '../styled/ButtonCSS.js';

class Profile extends Component {
  constructor(props){
    super(props);
    this.state = {
      mail: ``,
      pass: ``,
      mess: ``
    }
  }

  relocate = e => {
    location.pathname = e;
  };
      
  render() {
    return (
      <RegFormTag>
        <Button onClick={e => this.relocate('/former')}>Create</Button>
        <Button onClick={e => this.relocate('/viewer')}>Show</Button>
      </RegFormTag>
    );
  }
}

export default Profile;
