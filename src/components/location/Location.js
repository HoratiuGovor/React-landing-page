import React from 'react';

const Location = (props) => {
  return (
    <div id="location_wrapper" className="location_wrapper">
    	<iframe 
    		src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58374.37658383181!2d-0.12724638507114278!3d51.49769864933335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondra%2C%20Regatul%20Unit!5e0!3m2!1sro!2sro!4v1596544999877!5m2!1sro!2sro"
    		width="100%" 
            height= {window.innerHeight*0.6}
            frameBorder="0" 
            allowfullScreen>
    	</iframe>
    </div>
  )
}

export default Location;