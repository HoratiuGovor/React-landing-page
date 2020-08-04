import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import {scroller} from 'react-scroll';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';


const StyledTabsLower = withStyles({
 root: {},
  indicator: {
      height: '50%',
      bottom: '25%',
      borderRadius: '1rem',
      backgroundColor: '#00acc1',
      opacity:1,
      zIndex:0
    },
})(props => <Tabs {...props} TabIndicatorProps={{ children: <div /> }} />);


const StyledTabLower = withStyles(theme => ({
  root: {
      fontFamily: 'Poppins, sans-serif',
      fontWeight: '400',
      textTransform: 'initial',
      color: '#888a8d',
      minWidth: 5,
      zIndex:1,
      '&$selected': {
      '&, &:hover': {
        color: '#f1f5ee',
      },
    },
  },
  selected: {},
  
}))(props => <Tab disableRipple {...props} />);

export default class HeaderLowerResolution extends React.Component {
  constructor(props) {
    super(props);
     this.state={
      value:0,
      disabled:false,
      mobileMenu: false
    }
  }
  handleChange = (event, newValue) => {
    console.log(newValue);
    this.setState({
      value:newValue
    });
    this.scrolltoElem(newValue);
  };
  scrolltoElem = (element) => {
    document.removeEventListener('scroll', this.trackScrolling);
    this.setState({
      disabled:true 
    });
    scroller.scrollTo(element,{
      duration:1300,
      delay:100,
      smooth:true,
      offset:-80
    });
    setTimeout(function() { 
      document.addEventListener('scroll', this.trackScrolling);
      this.trackScrolling();
      this.setState({
      disabled:false
     });
     }.bind(this), 1200)

  }
  componentDidMount() {
    document.addEventListener('scroll', this.trackScrolling);
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.trackScrolling);
  }
  trackScrolling = () => {
    //console.log(window.pageYOffset);
    if (window.pageYOffset<window.innerHeight/2) {
      this.setState({
      value:0
      });
    }
    else if (window.pageYOffset<window.innerHeight+window.innerHeight*0.85/2) {
      this.setState({
      value:1,
      mobileMenu:true
      });
    }
    else if (window.pageYOffset<window.innerHeight+window.innerHeight*0.85+window.innerHeight*0.8/2) {
      this.setState({
      value:2
      });
    }
    else  {
      this.setState({
      value:3
      });
    }
};

render(){
    return(
      <AppBar
        position="fixed"
        style={{
          backgroundColor:'#f9f5ee',
          boxShadow: 'none',
          padding: '0px 0px 0px 0px',
          height:'4.5rem'
        }}>
        <Toolbar style ={{display:'flex',flexDirection: 'column'}}>
          <div style={{fontSize:'5vw',padding:'3vw 0vw 0vw 0vw'}}>
            <span className="headerLogo1">Web</span><span className="headerLogo2">site</span>
          </div>
          <StyledTabsLower value={this.state.value} onChange={this.handleChange} >
            <StyledTabLower label="Acasa" disabled={this.state.disabled} />
            <StyledTabLower label="Despre" disabled={this.state.disabled} />
            <StyledTabLower label="Proiecte" disabled={this.state.disabled} />
            <StyledTabLower label="Contact" disabled={this.state.disabled} />
          </StyledTabsLower>
        </Toolbar>
    </AppBar>);
}
}