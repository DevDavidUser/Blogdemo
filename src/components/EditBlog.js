import React, { Component } from 'react';
import Navbar from './Navbar';

class EditBlog extends Component{
	state={
		userId:'',
		title:'',
		body:''
	}
	onChange = (e) =>{
		this.setState({
			[e.target.name]:e.target.value,
			[e.target.name]:e.target.value,
			[e.target.name]:e.target.value
		})
 	}
	onSubmit = (e)  =>{
		e.preventDefault();

		const blog = {
		  userId:this.state.userId,
		  title:this.state.title,
		  body:this.state.body
		}
		this.props.addBlog(blog);
	}
	render(){
		return (
			<div>
				<Navbar />
				<form onSubmit={this.onSubmit}>
					<label>UserId:</label>
					<input type="number"  step="1"
						name="userId"
						value={this.state.userId}
               			onChange={this.onChange}
					/>
					<label>Title:</label>
					<input type="text" 
						name="title"
						value={this.state.title}
               			onChange={this.onChange}
					/>
					<label>Body:</label>
					<input type="text" 
						name="body"
						value={this.state.body}
               			onChange={this.onChange}
					/>
					<input type="submit" value="Update Blog" />
				</form>
			</div>
		);
	}
}

export default EditBlog;
