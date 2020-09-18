import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import BlogContent from './components/BlogContent';
import CreateBlog from './components/CreateBlog';
import Element from './components/Element';
import EditBlog from './components/EditBlog';
import axios from "axios";


class Home extends Component{
	state = {
    	blogs: []
  	};
	updateBlog = (id,blog) => {
		axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, blog)
		  .then(res => {
			this.setState({ blogs: [...this.state.blogs, res.data] });
		  })
		  .catch((error) => {console.log(error);});
	 };
	addBlog = blog => {
		axios.post('https://jsonplaceholder.typicode.com/posts', blog)
		  .then(res => {
			this.setState({ blogs: [...this.state.blogs, res.data] });
		  })
		  .catch((error) => {console.log(error);});
	  };
   	deleteBlog = (id) => {
		axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
		  .then(res => this.setState({
			blogs: [...this.state.blogs.filter(blog => blog.id !== id)]
		  })
		)
		.catch((error) => {console.log(error);});
    };
	getBlog = (id) => {
		axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
		  .then(res => {return res})
		  .catch((error) => {console.log(error);});
    };
   componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
      .then(res => this.setState({ blogs: res.data }))
	  .catch((error) => {console.log(error);});
   }
	render(){
		return (
			<div>
				<Router>
					<Switch>
						<Route path="/" exact render={props => (
							<React.Fragment>
							  <Navbar />
							  <BlogContent blogs={this.state.blogs} deleteBlog={this.deleteBlog}/>
							</React.Fragment>
						  )}
						/>
						<Route path="/create" exact component={props => (
							<React.Fragment>
							  <CreateBlog addBlog={this.addBlog}/>
							</React.Fragment>
						  )} />
						<Route path="/:id" exact component={props => (
							<React.Fragment>
							  <Element blog={this.state.blog} getBlog={this.getBlog}/>
							</React.Fragment>
						  )} />
						<Route path="/:id/edit" component={props => (
							<React.Fragment>
							  <EditBlog updateBlog={this.updateBlog}/>
							</React.Fragment>
						  )} />
					</Switch>
				</Router>
			</div>
		);
	}
}

export default Home;

