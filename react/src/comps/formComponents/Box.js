import React, { Component } from 'react';

class Box extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
        	value: this.props.value,
        	title: this.props.title,
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
	
	check = e => {
		Promise.resolve().then(() => {
			this.setState({value: !this.state.value})
		}).then(() => {
			this.props.onChange({
				state: this.state,
				props: this.props
			});
		});
	}

    render() {
		let title = '';
		if (this.props.title) {
			title = <div className="check box-title">{this.props.title}</div>;
		}
		if (this.props.on && this.state.value) {
			title = <div className="check box-title">{this.props.on}</div>;
		}
		if (this.props.off && !this.state.value) {
			title = <div className="check box-title">{this.props.off}</div>;
		}

		const size = (this.props.size in this.state.sizes) ? this.props.size : 'big';

		let box = null;

		if (this.props.editable) {
			if (this.props.type === 'checkbox') {

				box = <div className="check-box-wrapper">
					<div onClick={this.check} className="check-box">
						{this.props.value &&
						<i className="zmdi zmdi-check check-box-access"></i>}
					</div>
					<input type="text" className="check box-title-input" />
				</div>;

			}
			if (this.props.type === 'radiobox') {

				box = <div className="check-box-wrapper">
					<div onClick={this.check} className="radio-box">
						{this.props.value &&
						<i className="zmdi zmdi-circle radio-box-access"></i>}
					</div>
					<div contentEditable="true" ref="input" className="check box-title-input" onKeyPress={this.onInput}>{this.props.title}</div>
					{this.props.onDelete && <button onClick={() => this.props.onDelete(this.props.form)}>X</button>}
				</div>;

			}
		}
		else {
			if (this.props.type === 'checkbox') {

				box = <div className="check-box-wrapper">
					<div onClick={this.check} className="check-box">
						{this.state.value &&
						<span><i className="fas fa-check check-box-access"></i></span>}
					</div>
					{title}
				</div>;

			}
			if (this.props.type === 'radiobox') {

				box = <div className="check-box-wrapper">
					<div onClick={this.check} className="radio-box">
						{this.state.value &&
						<span><i className="fas fa-circle radio-box-access"></i></span>}
					</div>
					{title}
				</div>;

			}
			if (this.props.type === 'trigger') {

				box = <div className="check-box-wrapper">
					<div onClick={this.check} className={this.state.sizes[size].wrap}>
						<div className={this.state.value ?
							this.state.sizes[size].on :
							this.state.sizes[size].off}
						>{this.state.value ? 'ON' : 'OFF'}</div>
					</div>
					{title}
				</div>;

			}
		}

		return box;
    }
};

export default Box;