import React, { Component } from 'react';
import {Wrapper, CheckBox, RadioBox, CI, RI} from '../../styled/formComponents/BoxCSS.js';

class Box extends Component {
    
    constructor(props) {
		super(props);
		
        this.state = {
        	value: props.value,
			title: props.title ? props.title : props.form.title,
			sizes: {
				big: {
					wrap: 'big wrap',
					on: 'big-trig trig trig-on',
					off: 'big-trig trig trig-off'
				},
				small: {
					wrap: 'small wrap',
					on: 'small-trig trig trig-on',
					off: 'small-trig trig trig-off'
				}
			}
		};
	}

	componentWillReceiveProps(nextProps) {
		if (this.props.prevent) {
			this.setState({value: nextProps.value});
		}
	}
	
	check = e => {
		this.setState({value: !this.state.value},
			() =>this.props.onChange({
				state: this.state,
				props: this.props
			})
		)
	};

	input = e => {
		this.setState({title: this.refs.input.value},
			() => this.props.onChange({
				state: this.state,
				props: this.props
			})
		);
	};

	delete = e => {
		this.props.onDelete({
			state: this.state,
			props: this.props
		});
	};

	enter = (e) => {
		let key = e.nativeEvent.keyCode;
		if (this.props.onEnter && key === 13) {
			this.props.onEnter();
		}
	};

    render() {
		let title = '';
		if (this.props.title) {
			title = <div>{this.props.title}</div>;
		}
		if (this.props.on && this.state.value) {
			title = <div>{this.props.on}</div>;
		}
		if (this.props.off && !this.state.value) {
			title = <div>{this.props.off}</div>;
		}

		const size = (this.props.size in this.state.sizes) ? this.props.size : 'big';

		let box = null;

		if (this.props.editable) {
			if (this.props.type === 'checkbox') {

				box = <Wrapper>
					<CheckBox onClick={this.check}>
						{this.state.value &&
						<span><CI className="fas fa-check"></CI></span>}
					</CheckBox>
					<input
						ref="input"
						type="text"
						onChange={this.input}
						onKeyPress={this.enter}
						defaultValue={this.state.title}
					/>
					{this.props.onDelete &&
					<span onClick={this.delete}>
						<i className="fas fa-trash-alt"></i>
					</span>}
				</Wrapper>;

			}
			if (this.props.type === 'radiobox') {

				box = <Wrapper>
					<RadioBox onClick={this.check}>
						{this.state.value &&
						<span><RI className="fas fa-circle"></RI></span>}
					</RadioBox>
					<input
						ref="input"
						type="text"
						onChange={this.input}
						onKeyPress={this.enter}
						defaultValue={this.state.title}
					/>
					{this.props.onDelete &&
					<span onClick={this.delete}>
						<i className="fas fa-trash-alt"></i>
					</span>}
				</Wrapper>;

			}
		}
		else {
			if (this.props.type === 'checkbox') {

				box = <Wrapper>
					<CheckBox onClick={this.check}>
						{this.state.value &&
						<span><CI className="fas fa-check"></CI></span>}
					</CheckBox>
					{title}
				</Wrapper>;

			}
			if (this.props.type === 'radiobox') {

				box = <Wrapper>
					<RadioBox onClick={this.check}>
						{this.state.value &&
						<span><RI className="fas fa-circle"></RI></span>}
					</RadioBox>
					{title}
				</Wrapper>;

			}
			if (this.props.type === 'trigger') {

				box = <Wrapper>
					<div onClick={this.check} className={this.state.sizes[size].wrap}>
						<div className={this.state.value ?
							this.state.sizes[size].on :
							this.state.sizes[size].off}
						>{this.state.value ? 'ON' : 'OFF'}</div>
					</div>
					{title}
				</Wrapper>;

			}
		}

		return box;
    }
}

export default Box;