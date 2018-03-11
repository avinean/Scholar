import React, { Component } from 'react';
import {HeaderTag, Title, A} from 
        '../styled/HeaderCSS.js';

class Header extends Component {
    render() {
      return (
          <HeaderTag>
            <Title>Ласкаво просимо до <A href="!#">Scholar</A></Title>
          </HeaderTag>
      );
    }
  }

export default Header;