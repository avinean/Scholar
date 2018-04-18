import React, { Component } from 'react';
import axios from 'axios';
import TestForm from './formComponents/TestForm.js';
import Button from '../styled/ButtonCSS.js';

class FromCreator extends Component {
	constructor() {
		super();
		this.state = {
			form: [
				{id:'a1',text:'',data:[{}],type:'radio'},
			]
		};
		this.test = [];
	}

	addFormField = e => {
		let a = [...this.state.form];
		a.push({id:Math.random(),text:'',data:[{}],type:e});
		this.setState({form: a});
	};

	deleteFormField = e => {
		let a = [...this.state.form].filter(el => el.id !== e);
		if (!a.length) {
			a.push({id:Math.random(),text:'',data:[{}],type:e});
		}
		else {
			this.setState({form: a});
		}
	};

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
			this.setState({testId: res.data});
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
				onDelete={this.deleteFormField}
			/>
		);
		return(
			this.state.testId ?
			<div>Link to your test <a href={location.origin + '/poll/' + this.state.testId}>{this.state.testId}</a></div> :
			<div>
				<br />
				<h1>Ready forms</h1>
				{form}
				<br />
				<Button onClick={e => this.addFormField('check')}>Add new checkbox form</Button>
				<Button onClick={e => this.addFormField('radio')}>Add new radiobox form</Button>
				<Button onClick={this.sendForm}>Send form</Button>
			</div>
		);
	}
}

export default FromCreator;