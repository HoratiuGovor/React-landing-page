import React from 'react';
import {Element} from 'react-scroll';
import Header from './components/headerFooter/Header.js'
import TopView from './components/topView/TopView.js'
import About from './components/about/About.js'
import Projects from './components/projects/Projects.js'
import Footer from './components/headerFooter/Footer.js'
import Location from'./components/location/Location.js'
function App() {
  return (
    <div style={{width:'100%',margin:'0',padding: '0',height:'0px'}}>
    <Header/>
    <Element name="0">
      <TopView/>
    </Element>
    <Element name="1">
      <About/>
    </Element>
    <Element name="2">
      <Projects/>
    </Element>
    <Element name="3">
      <Location/>
    </Element>
      <Footer/>
    </div>
  );
}

export default App;
