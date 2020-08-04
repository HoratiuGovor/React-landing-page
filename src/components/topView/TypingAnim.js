import React from 'react';
import Typical from 'react-typical'
export default class TypingAnim extends React.Component {
	shouldComponentUpdate(nextProps, nextState){
	   return false; 
	}
	render() {
		return (

				<Typical 
				loop={Infinity}
				wrapper="typeStyle"
				steps={[
					' quis',
					3000,
					' accumsan',
					3000,
					' aliquam',
					3000,
					' quam',
					3000,
					' dapibus',
					3000,
					' turpis!',
					3000
				]}
			/>
	
		);
	}
}
