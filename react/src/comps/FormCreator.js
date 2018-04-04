import React, { Component } from 'react';
import axios from 'axios';
import Box from './formComponents/Box';
import CheckboxGroup from './formComponents/CheckboxGroup.js';
import TestForm from './formComponents/TestForm.js';



class FromCreator extends Component {
	constructor() {
		super();
		this.state = {
			a1: {
				id: 'a1',
				text: '',
				data: [{}]
			},
			a2: {
				id: 'a2',
				text: '',
				data: [{}]
			},
			a3: {
				id: 'a3',
				text: '',
				data: [{}]
			},
			a4: {
				id: 'a4',
				text: '',
				data: [{}]
			},
		};
		this.test = {};
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
			console.log(res);
		});
	}

	render() {
	

		return(
			<div className='wrapper'>
				<br />
				<h1>Ready forms</h1>
				<TestForm
					callback={this.callback}
					data={this.state.a1}
					type="radio"
					editable={1}
				/>
				<TestForm
					callback={this.callback}
					data={this.state.a2}
					type="check"
					editable={1}
				/>
				<TestForm
					callback={this.callback}
					data={this.state.a3}
					type="radio"
					editable={1}
				/>
				<TestForm
					callback={this.callback}
					data={this.state.a4}
					type="check"
					editable={1}
				/>
				<br />
				<button onClick={this.sendForm}>Send form</button>
			</div>
		);
	}
}

export default FromCreator;


// class FromCreator extends Component {
// 	constructor() {
// 		super();
// 		this.state = {
// 			trigged: true,
// 			checked: true,
// 			radioChecked: true,
// 			fakeValuesRadio: [
// 				{
// 					id: 1,
// 					answer: "London is a capital of Ukraine",
// 				},{
// 					id: 2,
// 					answer: "I am not me",
// 				},{
// 					id: 3,
// 					answer: "Right answer",
// 				},{
// 					id: 4,
// 					answer: "Duck",
// 				}
// 			],
// 			fakeValuesCheck: [
// 				{
// 					id: 1,
// 					answer: "London is a capital of Ukraine",
// 				},{
// 					id: 2,
// 					answer: "I am not me",
// 				},{
// 					id: 3,
// 					answer: "Right answer",
// 				},{
// 					id: 4,
// 					answer: "Duck",
// 				},{
// 					id: 5,
// 					answer: "Aimzibesovzibes",
// 				}
// 			],
// 			eradio: [{}],
// 			echeck: [{}],
// 			fakeFormValuesRadio: {
// 				id: '1232qweqwe',
// 				text: 'This is a question?',
// 				data: [
// 					{
// 						id: 1,
// 						title: "London is a capital of Ukraine",
// 					}, {
// 						id: 2,
// 						title: "I am not me",
// 						value: true
// 					}, {
// 						id: 3,
// 						title: "Right answer",
// 					}, {
// 						id: 4,
// 						title: "Duck",
// 					}
// 				]
// 			},
// 			fakeFormValuesCheck: {
// 				id: '1232qweqwe',
// 				text: 'Is multiselect working?',
// 				data: [
// 					{
// 						id: 1,
// 						title: "London is a capital of Ukraine",
// 						value: true
// 					}, {
// 						id: 2,
// 						title: "I am not me",
// 					}, {
// 						id: 3,
// 						title: "Right answer",
// 					}, {
// 						id: 4,
// 						title: "Duck",
// 					}
// 				]
// 			},
// 			dataFormRadio: {
// 				id: '1232qweqwe',
// 				text: '',
// 				data: [{}]
// 			},
// 			dataFormCheck: {
// 				id: '1232qweqwe',
// 				text: '',
// 				data: [{}]
// 			},
// 		}
// 	}

// 	trig = e => {
// 		this.setState({trigged: !this.state.trigged});
// 	}

// 	check = e => {
// 		this.setState({checked: !this.state.checked});
// 	}

// 	radio = e => {
// 		this.setState({radioChecked: !this.state.radio});
// 	}

// 	callback = e => {
// 		this.form = e;		
// 	}

// 	send = e => {
// 		let info = new URLSearchParams();
// 		info.append('info', this.form);
  
// 		axios.post('/former/setForm', info)
// 		.then((e) => {
			
// 		});
// 	};

// 	render() {
// 		return(
// 			<div className='wrapper'>
// 				<br />
// 				<h1>Ready forms</h1>
// 				{/* <TestForm
// 					callback={this.callback}
// 					data={this.state.fakeFormValuesRadio}
// 					type="radio"
// 					title="Radio form testing"
// 				/>
// 				<TestForm
// 					callback={this.callback}
// 					data={this.state.fakeFormValuesCheck}
// 					type="check"
// 					title="Check form testing"
// 				/> */}
// 				<TestForm
// 					callback={this.callback}
// 					data={this.state.fakeFormValuesRadio}
// 					type="radio"
// 					editable={1}
// 					title="Radio creating form testing"
// 				/>
// 				{/* <TestForm
// 					callback={this.callback}
// 					data={this.state.fakeFormValuesCheck}
// 					type="check"
// 					editable={1}
// 					title="Check creating form testing"
// 				/> */}
// 				<button onClick={this.send}>SEND FORM</button>
// 			</div>
// 		);
// 	}
// }