import React from 'react';
import HeaderDesktop from './HeaderDesktop.js';
import HeaderMobile from './HeaderMobile.js'
import HeaderLowerResolution from './HeaderLowerResolution.js'

export default class Header extends React.Component {
  constructor(props) {
    super(props);
     this.state={
      width: window.innerWidth,
      height: window.innerHeight,
    }
  }
 
  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }
  updateDimensions = () => {
      this.setState({ width: window.innerWidth, height: window.innerHeight});
  };

render(){
  if (this.state.width >= 768 && this.state.height >= 768) {
    return(
      <HeaderDesktop/>
    );
  }
  else if(this.state.width >= 360){
    return(
      <HeaderMobile/>
    );
  }
  else {
    return(
      <HeaderLowerResolution/>
    );
  }
}
}