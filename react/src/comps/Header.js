import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Logotitle from '../styled/LogotitleCSS.js';
import Logo from './Logo.js';
import HeaderTag from '../styled/HeaderCSS.js';

class Header extends Component {
    render() {
      return (
          <HeaderTag>
          <Link to="/" style={{ textDecoration: 'none' }}>
              <section>
                <Logo></Logo>
                <Logotitle>Sc<span>h</span>olar</Logotitle>
              </section>
          </Link>
          </HeaderTag>
      );
    }
  }

export default Header;