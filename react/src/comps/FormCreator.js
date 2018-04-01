import React, { Component } from 'react';
import Box from './formComponents/Box';
import CheckboxGroup from './formComponents/CheckboxGroup.js';
import TestForm from './formComponents/TestForm.js';


class FromCreator extends Component {
	constructor() {
		super();
		this.state = {
			trigged: true,
			checked: true,
			radioChecked: true,
			fakeValuesRadio: [
				{
					id: 1,
					answer: "London is a capital of Ukraine",
				},{
					id: 2,
					answer: "I am not me",
				},{
					id: 3,
					answer: "Right answer",
				},{
					id: 4,
					answer: "Duck",
				}
			],
			fakeValuesCheck: [
				{
					id: 1,
					answer: "London is a capital of Ukraine",
				},{
					id: 2,
					answer: "I am not me",
				},{
					id: 3,
					answer: "Right answer",
				},{
					id: 4,
					answer: "Duck",
				},{
					id: 5,
					answer: "Aimzibesovzibes",
				}
			],
			eradio: [{}],
			echeck: [{}],
			fakeFormValuesRadio: {
				id: '1232qweqwe',
				text: 'This is a question?',
				data: [
					{
						id: 1,
						answer: "London is a capital of Ukraine",
					}, {
						id: 2,
						answer: "I am not me",
					}, {
						id: 3,
						answer: "Right answer",
					}, {
						id: 4,
						answer: "Duck",
					}
				]
			},
			fakeFormValuesCheck: {
				id: '1232qweqwe',
				text: 'Is multiselect working?',
				data: [
					{
						id: 1,
						answer: "London is a capital of Ukraine",
					}, {
						id: 2,
						answer: "I am not me",
					}, {
						id: 3,
						answer: "Right answer",
					}, {
						id: 4,
						answer: "Duck",
					}
				]
			},
			dataFormRadio: {
				id: '1232qweqwe',
				text: '',
				data: [{}]
			},
			dataFormCheck: {
				id: '1232qweqwe',
				text: '',
				data: [{}]
			},
		}
	}

	trig = e => {
		this.setState({trigged: !this.state.trigged});
	}

	check = e => {
		this.setState({checked: !this.state.checked});
	}

	radio = e => {
		this.setState({radioChecked: !this.state.radio});
	}

	callback = e => {
		console.log(e.data);		
	}

	render() {
		return(
			<div className='wrapper'>
				{/*<br />
				<h1>Ready forms</h1>
				<TestForm
					callback={this.callback}
					data={this.state.fakeFormValuesRadio}
					type="radio"
					title="Radio form testing"
				/>
				<TestForm
					callback={this.callback}
					data={this.state.fakeFormValuesCheck}
					type="check"
					title="Check form testing"
				/>*/}
				<TestForm
					callback={this.callback}
					data={this.state.dataFormRadio}
					type="radio"
					editable={1}
					title="Radio creating form testing"
				/>
				<TestForm
					callback={this.callback}
					data={this.state.dataFormCheck}
					type="check"
					editable={1}
					title="Check creating form testing"
				/>{/*}
				<br />
				<br />
				<br />
				<h1>Radiobox group</h1>
				<CheckboxGroup
					callback={this.callback}
					data={this.state.fakeValuesRadio}
					type="radio"
				/>
				<h1>Checkbox group</h1>
				<CheckboxGroup
					callback={this.callback}
					data={this.state.fakeValuesCheck}
					type="check"
				/><h1>Editable radiobox group</h1>
				<CheckboxGroup
					callback={this.callback}
					data={this.state.eradio}
					type="radio"
					editable={1}
				/>
				<h1>Editable checkbox group</h1>
				<CheckboxGroup
					callback={this.callback}
					data={this.state.echeck}
					type="check"
					editable={1}
				/>
				<br />
				<br />
				<br />
				<Box
					onChange={this.callback}
					onDelete={1}
					value={this.state.checked}
					type="checkbox"
					editable="1"
				/>
				<Box
					onChange={this.callback}
					onDelete={1}
					value={this.state.radioChecked}
					type="radiobox"
					editable="1"
				/>
				<br />
				<br />
				<br />
				<Box
					onChange={this.trig}
					value={this.state.trigged}
					type="trigger"
					size="small"
					on="OK" off="Chpok"
				/>
				<Box
					onChange={this.check}
					value={this.state.checked}
					type="checkbox"
					on="OK" off="Chpok"
				/>
				<Box
					onChange={this.radio}
					value={this.state.radioChecked}
					type="radiobox"
					on="OK" off="Chpok"
				/> */}
			</div>
		);
	}
}

export default FromCreator;