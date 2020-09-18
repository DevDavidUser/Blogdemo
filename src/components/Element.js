import React, { Component } from 'react';
import Navbar from './Navbar';

class Element extends Component{
	render(){
		console.log(this.props.getBlog(1));
		return (
			<div>
				<Navbar />
				
			</div>
		);
	}
}

export default Element;
