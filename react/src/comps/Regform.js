import React, { Component } from 'react';
import axios from 'axios';
import {RegFormTag, H2, Message, A} from '../styled/RegformCSS.js';
import Input from '../styled/InputCSS.js';
import Button from '../styled/ButtonCSS.js';
import Autradio from '../styled/AutradioCSS.js';

class Regform extends Component {
  constructor(props){
    super(props);
    this.state = {
      mail: ``,
      pass: ``,
      char: `pupil`,
      mess: ``
    }
  }
  
  setVal(e) {
    const t = e.target;
    this.setState({[t.name]: t.value});
  }

  handleRatio(e) {
    this.setState({char: e.target.id});
  }

  checkVal(e) {
    const mail  = this.state.mail,
          pass  = this.state.pass,
          expr  = /^[\w.%+-]+@[\w-]+\.+[\w]{2,}$/i,
          boolM = expr.test(mail),
          boolP = pass.length >= 6;

    if (!boolM || !boolP) {
      let field;
      if (!boolM) field = `Некоректна електронна пошта`;
      else if (!boolP) field = `Пароль занадто короткий`;
      this.setState({mess: field});
      this.clearMess();
      return;
    }

    this.sendVal();
  }

  sendVal() {
    const _this = this,
          info = {
            mail: this.state.mail,
            password: this.state.pass
          };

    axios.post(`/reg/reg`, info)
      .then(res => {
        if (res.data === 0) {
          _this.setState({mess: `Обліковий запис не знайдено`});
          _this.clearMess();
        } else {
            window.location = `${window.location.origin}profile`;
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
    
        <H2> Реєстрація </H2>
        <Message>{this.state.mess}</Message>

        <Input type="text" name="firstName"
          placeholder="Ім'я"
          spellCheck="false"
          tabIndex="1"
          onMouseEnter={e => e.target.focus()}
          onChange={e => this.setVal(e)}
          autoFocus
          />

        <Input type="text" name="lastName"
          placeholder="Прізвище"
          spellCheck="false"
          tabIndex="2"
          onMouseEnter={e => e.target.focus()}
          onChange={e => this.setVal(e)}
          />
       
        <Input type="email" name="mail"
          placeholder="Електронна пошта"
          spellCheck="false"
          tabIndex="3"
          onMouseEnter={e => e.target.focus()}
          onChange={e => this.setVal(e)}
          />

        <Input type="password" name="pass1"
          placeholder="Пароль"
          tabIndex="4"
          onMouseEnter={e => e.target.focus()}
          onChange={e => this.setVal(e)} 
          />

        <Input type="text" name="school"
          placeholder="Навчальний заклад"
          spellCheck="false"
          tabIndex="5"
          onMouseEnter={e => e.target.focus()}
          onChange={e => this.setVal(e)}
          />

        <Autradio>
          <label htmlFor="pupil">учень</label>
          <input type="radio" id="pupil"
          onChange={e => this.handleRatio(e)}
          checked={this.state.char == "pupil"} />
          <label htmlFor="master">учитель</label>
          <input type="radio" id="master"
          onChange={e => this.handleRatio(e)} 
          checked={this.state.char == "master"} />
	      </Autradio>

        <Button 
          tabIndex="6"
          onMouseEnter={e => e.target.focus()}
          onClick = {e => this.checkVal(e)}
          onKeyDown = {e => this.checkVal(e)}> 
          Створити обліковий запис 
        </Button>

      </RegFormTag>
    );
  }
}

export default Regform;
