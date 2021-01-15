import React from 'react';

class Social extends React.Component{

	constructor(props){


		super(props); 
		this.state = this.getTime();

	}
	componentDidMount(){
		this.setTimer();
	}

	setTimer(){
		clearTimeout(this.timout);
		this.timout = setTimeout(this.updateClock.bind(this), 100)
	}
	updateClock(){

		this.setState(this .getTime, this.setTimer)

	}
	getTime(){
		const currentTime = new Date();

		return{
			hours: currentTime.getHours(),
			minutes: currentTime.getMinutes(),
			seconds: currentTime.getSeconds(),
			ampm: currentTime.getHours() >= 12 ? 'pm' : 'am'
		}
	}


	render() {
		return (

		<>

			<ul>
				<h4>The time is 
				{this.state.hours == 0 ? 12 : this.state.hours -12}: 
				{this.state.minutes > 9 ? this.state.minutes : `0${this.state.minutes}`}:
				{this.state.seconds > 9 ? this.state.seconds : `0${this.state.minutes}`}
				{this.state.ampm}</h4>

				{this.props.links.map((link,i) =><li key={i}>{link}</li>)}

			</ul>
				<h3>NAMES OF COUNTRIES</h3>

		</>	

		)
	}
} 

function Footer(){
  return(
        <footer className="main-footer">
        	<Social links={['facebook.com', 'Twitter', 'LinkedIn']} />

        </footer>
  )
}

export default Footer;