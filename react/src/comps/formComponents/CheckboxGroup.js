import React, { Component } from 'react';
import Box from './Box.js';

class CheckboxGroup extends Component {

	constructor(props) {
		super(props);
		if (!this.props.data[0].id) {
			this.props.data[0] = {id: Math.random(0, 1) * Math.random(0, 1)};
		}
		this.state = {checkedId: null};
		this.inputs = [];
	}

	setVal = (e) => {
		Promise.resolve().then(() => {
			this.props.data.forEach(el => {
				if (this.props.type === 'radio') {
					el.value = e.id === el.id;
					this.setState({value: e.id === el.id});
				}
				if (this.props.type === 'check')
					e.id === el.id ? el.value = !el.value :  null;
			});
		}).then(() => {
			this.props.callback && this.props.callback({
				props: this.props,
				state: this.state
			});
		});
	};

	changeVal = e => {
		Promise.resolve()
		.then(() => {
			if (this.props.type  === 'radio') {
				this.props.data.forEach(el => el.checked = e.id === el.id);
			}T
		})
		.then(() => this.setState({checkedId: e.id}));
	};

	delField = e => {
		Promise.resolve()
		.then(() => this.props.data = this.props.data.filter(el => e.id !== el.id))
		.then(() => this.setState({checkedId: this.state.checkedId}));
	};

	addField = _ => {
		let keys = [];
		let inputs = [];
		Promise.resolve()
		.then(() => this.props.data.push({id: Math.random(0,1)*Math.random(0,1)}))
		.then(() => this.setState({data: this.props.data}))
		.then(() => {
			for (let k in this.refs) {
				inputs.push(this.refs[k].refs.input);
				keys.push(k);
			}
			inputs[inputs.length - 1].focus();
		})
		.then(() => this.setState({checkedId: keys[keys.length - 1]}));
	};

	render() {
		let m = this.props.type;
		let items = this.props.data.map((e,i) => {
			return(
				(m === 'check' && this.props.editable) ?
					<Box
						key={e.id}
						onChange={this.changeVal}
						onDelete={this.delField}
						onEnter={this.addField}
						editable={1}
						type="checkbox"
						value={e.checked}
						form={e}
						uniqid={e.id}
						ref={'i' + e.id}
					/> :
				(m === 'radio' && this.props.editable) ?
					<Box
						key={e.id}
						onChange={this.changeVal}
						onDelete={this.delField}
						onEnter={this.addField}
						editable={1}
						type="radiobox"
						value={e.id === this.state.checkedId}
						form={e}
						uniqid={e.id}
						ref={'i' + e.id}
					/> :
				m === 'radio' ?
					<Box
						key={e.id}
						onChange={this.setVal}
						type="radiobox"
						title={e.answer}
						uniqid={e.id}
						value={e.value}
						prevent={true}
					/> :
				m === 'check' ?
					<Box
						key={e.id}
						onChange={this.setVal}
						type="checkbox"
						title={e.answer}
						uniqid={e.id}
					/> : ''
			);
		});

		return(
			<div>
				{/*{this.props.editable ? <button onClick={this.addField} class="add-button">add field</button> : ''}*/}
				{items}
			</div>
		);
	}
}

export default CheckboxGroup;