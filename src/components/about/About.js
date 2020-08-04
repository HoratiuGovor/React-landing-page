import React from 'react';
import Fade from 'react-reveal/Fade'
import aboutImage from '../../resources/middleImage.png'
import aboutMobileImage from '../../resources/mobileMiddleImage.png'
export default class About extends React.Component {
	state ={
		discountStart:0,
		discountEnd:90,
		noProjStart:0,
		noProjEnd:100,
		width: window.innerWidth,
		height: window.innerHeight
	}
	updateDimensions = () => {
      this.setState({ width: window.innerWidth, height: window.innerHeight});
    };
	componentDidMount() {
	  document.addEventListener('scroll', this.trackScrolling);
	  window.addEventListener('resize', this.updateDimensions);
	}

	componentWillUnmount() {
	  document.removeEventListener('scroll', this.trackScrolling);
	  window.removeEventListener('resize', this.updateDimensions);
	}
	trackScrolling = () => {
  	 const wrappedElement = document.getElementById('location_wrapper');
	};
	procentageDiscount =()=>{
		if(this.state.discountStart<this.state.discountEnd){
			this.setState({
				discountStart: this.state.discountStart+1,
				noProjStart: this.state.noProjStart+1
			});
		}
	}
	procentageNoProj =()=>{
		if(this.state.noProjStart<this.state.noProjEnd){
			this.setState({
				noProjStart: this.state.noProjStart+1,
			});
		}
	}
	componentDidUpdate(prevProps, prevState) {
		if(this.state.discountStart<this.state.discountEnd){
			setTimeout(()=>{
				this.procentageDiscount()
			},20)
		}
		else{
			setTimeout(()=>{
				this.procentageNoProj()
			},60)
		}
	}
    showimage(){
    	if(this.state.height/this.state.width>=1.5)
    		return(<img style={{paddingTop:'2vh'}} src={aboutMobileImage} width='100%'/>)
    }
	render() {
		if (this.state.width >= 768) {
		    return (
				<div id="about_wrapper" 
				     className="aboutWrapper"
				     style={{
				    	height:0.95*window.innerHeight,
				    	overflow:'visible'
				    }}>
					<div className="aboutLeftChild">
						<img src={aboutImage} width='100%'/>
					</div>
					<div className="aboutRightChild">	
						<div className="aboutTopViewText">
							<Fade>
								<div className="aboutViewTextDesc">
									 <span style={{color: '#498ab7',fontWeight: '400',marginLeft:'0.5vw', display:'inline-block'}}>Lorem ipsum</span> dolor sit amet,
									 consectetur adipiscing elit. 
									 Aliquam ornare, mauris id gravida condimentum,
									 sem pellentesque arcu, sed commodo velit 
									 turpis ut nulla. Aliquam iaculis metus ut nulla
									 hendrerit, sit amet ultrices quam viverra. Sem elit pellentesque arcu,
									 sed commodo velit turpis.
								</div>
							</Fade>
							<div className="projectStats">
								<Fade
								delay={300}
					    		onReveal={()=>this.procentageNoProj()}>
									<div className="statsLeft">
										Aliquam  <span style={{color: '#498ab7',fontSize:'3vw',lineHeight:'0%'}}>{this.state.noProjStart}</span><br/><span style={{color: '#498ab7',fontWeight: '300'}}>viverra</span>
									</div>
								</Fade>
								<Fade
								delay={600}
								>
									<div className="statsRight">
										<span style={{color: '#498ab7',fontWeight: '300',marginRight:'0.1vw', display:'inline-block'}}>Sem elit pellentesque</span> la  <span style={{color: '#498ab7',fontSize:'3vw',lineHeight:'0%'}}>{this.state.discountStart}%</span><br/>  sed commodo velit
									</div>
								</Fade>
							</div>
						</div>
				    </div>
				</div>
			);
		}else{
			return (
				<div id="about_wrapper" 
				     className="aboutWrapper"
				     style={{
				    	height:0.8*window.innerHeight,
				    	overflow:'hidden',
				    	flexDirection: 'column',
				    	justifyContent:'start'
				    }}>
					<div className="aboutRightChild">	
						<div className="aboutTopViewText">
							<Fade>
								<div className="aboutViewTextDescFullScreen">
									 <span style={{color: '#498ab7',fontWeight: '400',marginLeft:'0.5vw', display:'inline-block'}}>Lorem ipsum</span> dolor sit amet,
									 consectetur adipiscing elit. 
									 Aliquam ornare, mauris id gravida condimentum,
									 sem pellentesque arcu, sed commodo velit 
									 turpis ut nulla. Aliquam iaculis metus ut nulla
									 hendrerit, sit amet ultrices quam viverra. Sem elit pellentesque arcu,
									 sed commodo velit turpis.
								</div>
							</Fade>
							<div className="projectStatsFullScreen">
								<Fade
								delay={300}
					    		onReveal={()=>this.procentageNoProj()}>
									<div className="statsLeftFullScreen">
										Aliquam <br/><span style={{color: '#498ab7',fontSize:'5vw',lineHeight:'0%'}}>{this.state.noProjStart}</span><br/><span style={{color: '#498ab7',fontWeight: '300'}}>viverra</span>
									</div>
								</Fade>
								<Fade
								delay={600}
								>
									<div className="statsRightFullScreen">
										<span style={{color: '#498ab7',fontWeight: '300',marginRight:'0.1vw', display:'inline-block'}}>Sem elit pellentesque</span>la  <span style={{color: '#498ab7',fontSize:'5vw',lineHeight:'0%'}}>{this.state.discountStart}%</span><br/>  sed commodo velit
									</div>
								</Fade>
							</div>
						</div>
						{this.showimage()}
				    </div>
				</div>
			);
		}
	}
}
