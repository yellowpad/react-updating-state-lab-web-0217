import React from 'react'

export default class DigitalClicker extends React.Component{
	constructor(){
		super();

		this.state = {
			timesClicked: 0
		}

		this.handleClick = this.handleClick.bind(this)
	}
	
	handleClick(){
		this.setState({
			timesClicked:  this.state.timesClicked + 1
		})
	}

	render(){
		return(
			<div>
				<button onClick={this.handleClick} id="digital-clicker">{this.state.timesClicked}</button>
			</div>
		);
	}
}