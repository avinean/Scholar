import React, { Component } from 'react';
import CheckboxGroup from './CheckboxGroup.js'

class TestForm extends Component {

	constructor(props) {
		super(props);
		this.state = {
			data: this.props.data,
			text: this.props.data.text
		};
	}

	onInput = e => {
		Promise.resolve()
		.then(() => {
			this.setState({text: this.refs.area.value});
		})
		.then(() => {
			this.props.callback && this.props.callback({
				state: this.state,
				id: this.props.data.id
			});
		});
	};

	callback = e => {
		Promise.resolve()
		.then(() => {
			if (this.props.editable) {
				this.setState({data: e.data});
			}
			else {
				this.setState({data: e.state.data});
			}
		})
		.then(() => {
			this.props.callback && this.props.callback({
				state: this.state,
				id: this.props.data.id
			});
		});
	}

	render() {
		let title = this.props.title && <p className="test-form-title">{this.props.title}</p>;
		let text = this.props.data.text && <p className="test-form-text">{this.props.data.text}</p>;
		let textarea = <textarea ref="area" className="check box-title-area" onInput={this.onInput} defaultValue={this.state.text}></textarea>
		let form = this.props.editable ?
			<CheckboxGroup
				callback={this.callback}
				data={this.state.data.data}
				type={this.props.type}
				editable={1}
			/>:
			<CheckboxGroup
				callback={this.callback}
				data={this.state.data.data}
				type={this.props.type}
			/>;

		return(

			<div className="test-form-wrap">
				{title}
				{this.props.editable ? textarea : text}
				{form}
			</div>
		);
	}
}

export default TestForm;