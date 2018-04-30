import React, { Component } from 'react';
import CheckboxGroup from './CheckboxGroup.js';
import {TestWrap, Title, Text, Area} from '../../styled/formComponents/TestFormCSS';

class TestForm extends Component {

	constructor(props) {
		super(props);
		this.state = {
			data: props.data.data,
			text: props.data.text
		};
	}

	onInput = e => {
		Promise.resolve()
		.then(() => {
			this.setState({text: this.refs.area.value});
		})
		.then(() => {
			this.props.callback && this.props.callback({
				data: this.state,
				id: this.props.data.id,
				type: this.props.type,
				title: this.props.title
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
				data: this.state,
				id: this.props.data.id || this.props.id,
				type: this.props.type,
				title: this.props.title
			});
		});
	};

	render() {
		let title = this.props.title && <Title>{this.props.title}</Title>;
		let text = this.props.data.text && <Text>{this.props.data.text}</Text>;
		let textarea = 
					<Area>
						{this.props.onDelete && 
						<span onClick={e => this.props.onDelete(this.props.data.id)}>
							<i className="fas fa-ban"></i>
						</span>}
						<textarea 
							ref="area"
							onInput={this.onInput}
							defaultValue={this.state.text}
						></textarea>
					</Area>;
		let form = this.props.editable ?
			<CheckboxGroup
				callback={this.callback}
				data={this.state.data}
				type={this.props.type}
				editable={1}
			/>:
			<CheckboxGroup
				callback={this.callback}
				data={this.state.data}
				type={this.props.type}
			/>;

		return(
			<TestWrap>
				{title}
				{this.props.editable ? textarea : text}
				{form}
			</TestWrap>
		);
	}
}

export default TestForm;