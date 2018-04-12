import React, { Component } from 'react';
import axios from 'axios';
import TestForm from './formComponents/TestForm.js';

class FromCreator extends Component {
	constructor() {
		super();
		this.state = {
			form: [
				{id:'a1',text:'',data:[{}],type:'radio'},
				{id:'a2',text:'',data:[{}],type:'radio'},
				{id:'a3',text:'',data:[{}],type:'check'},
				{id:'a4',text:'',data:[{}],type:'check'}
			]
		};
		this.test = [];
	}

	callback = e => {
		if (!this.test.length) this.test.push(e);
		else {
			let tempid = null;
			this.test.forEach((el, i) => {
				if (el.id === e.id) tempid = i;
			});
			tempid !== null ? this.test[tempid] = e : this.test.push(e);
		}
	};

	sendForm = e => {	
		let data = JSON.stringify(this.test);
		let info = new URLSearchParams();
		info.append('data', data);

		axios.post('/former/set_form', info)
		.then(res => {
			console.log(res);
		});
	};

	render() {
		let form = this.state.form
		.map(e => 
			<TestForm 
				key={e.id + Math.random(0,1)}
				callback={this.callback} 
				data={e} 
				type={e.type}
				editable={1} 
			/>
		);
		return(
			<div className='wrapper'>
				<br />
				<h1>Ready forms</h1>
				{form}
				<br />
				<button onClick={this.sendForm}>Send form</button>
			</div>
		);
	}
}

export default FromCreator;