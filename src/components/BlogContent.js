import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Blog = props => (
	<div>
		<h1>{props.blog.title}</h1>
		<p>{props.blog.body}</p>
		<p><span><button> <Link to={"/"+props.blog.id}>See</Link></button> || 
			<button onClick={() => { props.deleteBlog(props.blog.id) }}>X</button> || 
			<button><Link to={"/"+props.blog.id+"/edit"}>Edit</Link></button> </span></p>
	</div>
)

class BlogContent extends Component{
	blogslist = () =>{
		return this.props.blogs.map(blog =>{
			return <Blog blog={blog} key={blog.id} deleteBlog={this.props.deleteBlog}/>;
		})
	}
	render(){
		return (
			<div>
				{this.blogslist()}
			</div>
		);
	}
}

export default BlogContent;
