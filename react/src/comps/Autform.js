import React, { Component } from 'react';
import axios from 'axios';
import {RegFormTag, H2, Message, A} from '../styled/RegFormCSS.js';
import Input from '../styled/InputCSS.js';
import Button from '../styled/ButtonCSS.js';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

class Autform extends Component {
  constructor(props){
    super(props);
    this.state = {
      mail: ``,
      pass: ``,
      mess: ``
    };
  }
  
  setVal(e) {
    const t = e.target;
    this.setState({[t.name]: t.value});
  }

  checkVal(e) {
    const mail  = this.state.mail,
          pass  = this.state.pass,
          expr  = /^[\w.%+-]+@[\w-]+\.+[\w]{2,}$/i,
          boolM = expr.test(mail),
          boolP = pass.length >= 6;

    if (!boolM || !boolP) {
      const field = !boolM ? 
              `Некоректна електронна пошта` 
            : `Пароль занадто короткий`;
      this.setState({mess: field});
      this.clearMess();
      return;
    }

    this.sendVal();
  }

  sendVal() {
    const _this = this,
      info = new URLSearchParams();
      info.append('email', this.state.mail);
      info.append('password', this.state.pass);

    axios.post(`auth`, info)
      .then(res => {
        if (res.data === 0) {
          _this.setState({mess: `Обліковий запис не знайдено`});
          _this.clearMess();
        } else {
          window.location = `profile`;
        }
    })
  }

  clearMess() {
    const _this = this;
    setTimeout(() => {
      _this.setState({mess: ``}) 
    }, 2000);
  }
    
  render() {
    return (
      <RegFormTag>
    
        <H2> Авторизація </H2>
        <Message>{this.state.mess}</Message>
       
        <Input type="email" name="mail"
          placeholder="Електронна пошта"
          spellCheck="false"
          tabIndex="1"
          onMouseEnter={e => e.target.focus()}
          onChange={e => this.setVal(e)}
          autoFocus
          />
        <Input type="password" name="pass"
          placeholder="Пароль"
          tabIndex="2"
          onMouseEnter={e => e.target.focus()}
          onChange={e => this.setVal(e)} 
          />

        <Button 
          tabIndex="3"
          onMouseEnter={e => e.target.focus()}
          onClick = {e => this.checkVal(e)}
          onKeyDown = {e => this.checkVal(e)}> 
          Ввійти 
        </Button>

      </RegFormTag>
    );
  }
}

export default Autform;
