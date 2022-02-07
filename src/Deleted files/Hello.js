import React,{ Component } from 'react';
import './Hello.css';
import 'tachyons';
class Hello extends Component{

	render(){

		return (
			<div className = "tc">
				<h1>Welcome to ReactJS</h1>
				<p>I am still learning</p>
			</div>
			)

	}
}

export default Hello;