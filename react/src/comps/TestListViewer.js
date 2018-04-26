import React, { Component } from 'react';
import axios from 'axios';



class TestListViewer extends Component {
	constructor() {
		super();
		this.state = {};
		this.test = {};
	}

	componentWillMount() {
		axios('viewer/get_test_list')
		.then((res) => {
			this.setState({ids: res.data});
		});
	}

	render() {
		let content = this.state.ids ?
			this.state.ids.map(e =>
				<p key={Math.random(0,1)}>Test #<a href={location.origin + '/poll/' + e}>{e}</a></p>
			) : <h1>You don't have any test</h1>;
		return(
			<div>
				{content}
			</div>
		);
	}
}

export default TestListViewer;