import React, { Component } from 'react';
import CheckboxGroup from './CheckboxGroup.js'

class TestForm extends Component {

	onInput = (e) => {
		this.props.data.text = e.target.innerText || '';
	};

	render() {
		const p = this.props;
		let m = p.type;
		let title = p.title && <p className="test-form-title">{p.title}</p>;
		let text = p.data.text && <p className="test-form-text">{p.data.text}</p>;
		let textarea = <div contenteditable="true" className="check box-title-area" onKeyPress={this.onInput}>{p.data.text}</div>
		let form = this.props.editable ?
			<CheckboxGroup
				data={p.data.data}
				type={p.type}
				editable={1}
			/>:
			<CheckboxGroup
				data={p.data.data}
				type={p.type}
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