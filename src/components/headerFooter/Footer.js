import React from 'react';
import Fade from 'react-reveal/Fade'
const Footer = (props) => {
  var date = new Date();
  var year = date.getFullYear();
  return (
    <div className="footer">
    	<Fade delay={500}>
    		<div className="footerText">
	    		<span style={{color:'#498ab7'}}>Website</span> <br/>
	    		E-mail: domain@yahoo.com <br/>
	    		<span style={{fontSize:'0.9vh'}}>Copyright {year}</span>
    		</div>
    	</Fade>
    </div>
  )
}

export default Footer;