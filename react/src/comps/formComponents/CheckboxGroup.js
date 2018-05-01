import React, { Component } from 'react';
import Box from './Box.js';

class CheckboxGroup extends Component {

	constructor(props) {
		super(props);
		this.keys = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "a1", "b1", "c1", "d1", "e1", "f1", "g1", "h1", "i1", "j1", "k1", "l1", "m1", "n1", "o1", "p1", "q1", "r1", "s1", "t1", "u1", "v1", "w1", "x1", "y1", "z1"];
		if (!props.data[0].id) {
			props.data[0] = {id: this.keys.shift()};
		}
		this.state = {
			checkedId: null,
			data: props.data
		};
		this.inputs = [];
	}

	setVal = (e) => {

		let temp = [...this.state.data];
		
		this.setState({checkedId: e.props.id}, () => {
			temp.forEach(el => {
				if (this.props.type === 'radio') {
					el.value = e.props.id === el.id ? true : null;
				}
				if (this.props.type === 'check' && e.props.id === el.id) {
					el.value =  e.state.value;
				}
			})
		});

		this.setState({data: temp},
			this.props.callback({
				props: this.props,
				state: this.state
			})
		);
	};

	changeVal = e => {

		let temp = [...this.state.data];

		Promise.resolve()
		.then(() => {
			if (this.props.type  === 'radio') {
				temp.forEach(el => {
					el.value = e.props.id === el.id;
					if (e.props.id === el.id) {
						el.title = e.state.title;
					}
				});
			}
			if (this.props.type === 'check') {
				temp.forEach(el => {
					if (e.props.id === el.id) {
						el.value = e.state.value;
						el.title = e.state.title;
					}
				});
			}
		})
		.then(() => this.setState({checkedId: e.id}))
		.then(() => this.props.callback && this.props.callback(this.state));
	};

	addField = _ => {
		let keys = [];
		let inputs = [];
		let temp = [...this.state.data];
		Promise.resolve()
		.then(() => temp.push({id: this.keys.shift()}))
		.then(() => this.setState({data: temp}))
		.then(() => {
			for (let k in this.refs) {
				inputs.push(this.refs[k].refs.input);
				keys.push(k);
			}
			inputs[inputs.length - 1].focus();
		})
		.then(() => this.setState({checkedId: keys[keys.length - 1]}))
		.then(() => this.props.callback && this.props.callback(this.state));;
	};

	delField = e => {

		let temp = [...this.state.data];

		Promise.resolve()
		.then(() => {
			temp = temp.filter(el => e.props.id !== el.id);
			if (!temp.length) temp.push({id: this.keys.shift()});
		})
		.then(() => this.setState({
			checkedId: this.state.checkedId,
			data: temp
		}))
		.then(() => this.props.callback && this.props.callback(this.state));;
	};

	render() {
		let m = this.props.type;
		let items = this.state.data.map((e,i) => {
			return(
				(m === 'check' && this.props.editable) ?
					<Box
						key={e.id}
						onChange={this.changeVal}
						onDelete={this.delField}
						onEnter={this.addField}
						editable={1}
						type="checkbox"
						value={e.value}
						form={e}
						id={e.id}
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
						value={e.value}
						prevent={1}
						form={e}
						id={e.id}
						ref={'i' + e.id}
					/> :
				m === 'radio' ?
					<Box
						key={e.id}
						onChange={this.setVal}
						type="radiobox"
						title={e.title}
						id={e.id}
						value={e.value}
						prevent={1}
					/> :
				m === 'check' ?
					<Box
						key={e.id}
						onChange={this.setVal}
						type="checkbox"
						title={e.title}
						id={e.id}
					/> : ''
			);
		});

		return(
			<div>
				{items}
			</div>
		);
	}
}

export default CheckboxGroup;