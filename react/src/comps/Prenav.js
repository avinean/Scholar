import React, { Component } from 'react';
import Styledlink from '../styled/LinkCSS.js';
import Prenavtag from '../styled/PrenavtagCSS.js';

class Prenav extends Component {
    render() {
      return (
          <Prenavtag>
            <Styledlink to="/" >Авторизація</Styledlink>
            <Styledlink to="/reg">Реєстрація</Styledlink>
            <Styledlink to="/restore">Відновити пароль</Styledlink>
            <Styledlink to="/faq">Про ресурс</Styledlink>
          </Prenavtag>
      );
    }
  }

export default Prenav;