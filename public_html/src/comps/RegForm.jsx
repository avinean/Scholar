import React, { Component } from 'react';
import {RegFormTag, H2, Message, Input, Button, A} from 
        '../styledComps/RegFormCSS.jsx';

class RegForm extends Component {
  state = {
    mail: ``,
    pass: ``,
    mess: ``
  }
  
  setVal = e => {
    const t = e.target;
    this.setState({[t.name]: t.value});
  }

  checkVal = e => {
    const mail  = this.state.mail,
          pass  = this.state.pass,
          expr  = /^[\w.%+-]+@[\w-]+\.+[\w]{2,}$/i,
          boolM = expr.test(mail),
          boolP = pass.length >= 6;

    if (!boolM || !boolP) {
      const self = this,
            field = !boolM ? 
              `Некоректна електронна пошта` 
            : `Пароль занадто короткий`;

      this.setState({mess: field});
      setTimeout(() => {
        self.setState({mess: ``}) 
      }, 1250);

      return;
    };

    this.sendVal();
  }

  sendVal = e => {
    const self = this,
          info = {
            mail: this.state.mail,
            pass: this.state.pass
          };

    console.log(info);

    /*
    axios.post(`auth/reg`, { info })
      .then(res => {
        if (res.data === 0) {
          self.setState({mess: `Обліковий запис не знайдено`});
          setTimeout(() => {
            self.setState({mess: ``}) 
          }, 2000);
        } else {

        }
    })
    */
  }
    
  render() {
    return (
      <RegFormTag>
    
        <H2> Реєстрація </H2>
        <Message>{this.state.mess}</Message>
       
        <Input type="email" name="mail"
          placeholder="Електронна пошта"
          spellCheck="false"
          tabIndex="1"
          onMouseEnter={e => e.target.focus()}
          onChange={this.setVal} 
          />
        <Input type="password" name="pass"
          placeholder="Пароль"
          tabIndex="2"
          onMouseEnter={e => e.target.focus()}
          onChange={this.setVal} 
          />

        <Button 
          tabIndex="3"
          onMouseEnter={e => e.target.focus()}
          onClick = {this.checkVal}
          onKeyDown = {this.checkVal}> 
          Ввійти 
        </Button>

        <A href='!#'> Зареєструватись на Scholar </A>
        <A href='profile'> Відновити обліковий запис </A>

      </RegFormTag>
    );
  }
}

export default RegForm;
