import React from 'react';
import topImage from '../../resources/topImage.png'
import mobileTopImage from '../../resources/mobileTopImage.png'
import Typical from 'react-typical'
import TypingAnim from './TypingAnim.js'
class TopView extends React.Component {
	state = { width: window.innerWidth, height: window.innerHeight};
 	updateDimensions = () => {
      this.setState({ width: window.innerWidth, height: window.innerHeight});
      //window.location.reload(); 
    };
	componentDidMount() {
	  window.addEventListener('resize', this.updateDimensions);

	}
	componentWillUnmount() {
	  window.removeEventListener('resize', this.updateDimensions);
	}
	showimage(){
    	if(this.state.height/this.state.width>=1.5)
    		return(<img src={mobileTopImage} width='100%'/>)
    }
	render(){
	  if (this.state.width >= 768) {
		  return (
		  	<div    id="home_wrapper"
		  	        className="featured_wrapper" 
		  			style={{
			    	height:this.state.height,
			    	overflow:'visible'
			    }}>
			    <div className="leftchild">
			    	<div className="topViewText">
			    		<div className="topViewTextTitle" style={{}}>
			    		Praesent eget metus
				    		<div className="topViewTextDesc">
				    			Vivamus consequat semper egestas est tempor
								<TypingAnim/>
				    		</div>
			    		</div>
			    	</div>
			    </div>
			    <div className="rightchild">	
			    	<img src={topImage} width='100%'/>
			    </div>
		    </div>
		  )
		}
		else{
			return(
				<div className="featured_wrapper" 
		  			style={{
			    	height:`${window.innerHeight}px`,
			    	overflow:'hidden',
			    	flexDirection: 'column'
			    }}>
			    <div className="leftchild2">
			    	<div className="topViewText">
			    		<div className="topViewTextTitleFullScreen" style={{}}>
			    		Praesent eget metus
				    		<div className="topViewTextDescFullScreen">
				    			Vivamus consequat semper egestas est tempor
								<TypingAnim/>
				    			</div>
			    			</div>
			    		</div>
			    	</div>
			    	{this.showimage()}
		   		</div>
			)
		}
	}
}

export default TopView;