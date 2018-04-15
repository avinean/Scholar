import React, { Component } from 'react';
import axios from 'axios';
import Box from './formComponents/Box';
import CheckboxGroup from './formComponents/CheckboxGroup.js';
import TestForm from './formComponents/TestForm.js';



class FormViewer extends Component {
	constructor() {
		super();
		this.test = {};
	}

	componentWillMount() {
		axios('/viewer/get_form')
		.then((res) => {
			let arr = JSON.parse(res.data.data_form);
			arr.forEach(e => e.data.data
				.forEach(i => i.value = false));
			this.setState(arr);
		});
	}

	callback = e => {
		this.test[e.id] =  e;
	}

	sendForm = e => {	
		let data = JSON.stringify(this.test);
		let info = new URLSearchParams();
		info.append('data', data);

		axios.post('/former/set_form', info)
		.then(res => {
			// console.log(JSON.parse(res.data.data_form));
		});
	}

	render() {
		let form = [];
		if (!this.state) {
			return(
				<div className='wrapper'>
					<h1>No poll</h1>
				</div>
			); 
		}
		else {
			for (let k in this.state) {
				form.push( 
					<TestForm
					key={Math.random(0,1)**Math.random(0,1)}
					callback={this.callback}
					data={this.state[k].data}
					type={this.state[k].type}
				/>);
			}

			return(
				<div className='wrapper'>
					<br />
					<h1>Ready forms</h1>
					{form.length ? form : ''}
					<br />
					<button onClick={this.sendForm}>Send form</button>
				</div>
			);
		}
	}
}

export default FormViewer;