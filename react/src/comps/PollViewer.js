import React, { Component } from 'react';
import axios from 'axios';
import TestForm from './formComponents/TestForm.js';
import Button from '../styled/ButtonCSS.js';
import Spinner from '../styled/SpinnerCSS.js';



class PollViewer extends Component {
	constructor() {
		super();
		this.test = {};
	}

	componentWillMount() {
		let id = location.pathname.match(/\d+/)[0];
		axios(`${id}/get_form`)
		.then((res) => {
			let arr = JSON.parse(res.data.data_form);
			arr.forEach(e => e.data.data
				.forEach(i => i.value = false));
			this.setState(arr);
		});
	}

	callback = e => {
		e.data.data.forEach(el => {
			if (el.value) {
				this.test['r' + e.id] = el.id;
			}
		});
	};

	sendForm = e => {
		let data = JSON.stringify(this.test);
		let idp = location.pathname.match(/\d+/)[0];
		let info = new URLSearchParams();
		info.append('data', data);
		info.append('idp', idp);
		axios.post('/poll/set_form_result', info)
		.then(res => {
			console.log(res.data);
		});
	};

	render() {
		let form = [];
		if (!this.state) {
			return (
				<div className='wrapper'>
					<Spinner><i className="fas fa-sync-alt"></i></Spinner>
				</div>
			);
		}
		else {
			if (!Object.keys(this.state).length) {
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
							id={this.state[k].id}
						/>);
				}

				return(
					<div>
						<br />
						<h1>Ready forms</h1>
						{form.length ? form : ''}
						<br />
						<Button onClick={this.sendForm}>Send form</Button>
					</div>
				);
			}
		}
	}
}

export default PollViewer;