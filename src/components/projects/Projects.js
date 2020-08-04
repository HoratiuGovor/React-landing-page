import React, { useState, useEffect } from 'react';
import proj1 from '../../resources/proj1.jpg';
import ItemsCarousel from 'react-items-carousel';
import Fab from '@material-ui/core/Fab';
import ArrowBackIosOutlinedIcon from '@material-ui/icons/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@material-ui/icons/ArrowForwardIosOutlined';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom'

const Projects = (props) => {
  const [dimensions, setDimensions] = React.useState({ 
    height: window.innerHeight,
    width: window.innerWidth
  })
  const updateDimensions = () => {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      })

    };
  useEffect(() => {
    window.addEventListener('resize', updateDimensions);
    return () => {
      window.removeEventListener('resize', updateDimensions);
    }
}, [dimensions])
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const [rerender, setRerender] = useState(0);
  const chevronWidth = 70;
  const image=[proj1,proj1,proj1]
  const desc=['Suspendisse imperdiet ut nunc',
  'Ut dignissim, tellus ut tempor',
  'Maecenas fringilla nec quam'];
  const cardNo = () =>{
    if(window.innerWidth<768)
        return 1;
    else
       return 3;
  }
  return (
    <div id="projects_wrapper"
         class="projectsWrapper" 
         style={{
            height:0.9*window.innerHeight
          }}>
      <div class="projectTitle">
        <Fade top delay={200}>
          Printre proiectele realizate...
        </Fade>
      </div>
      <div style={{padding: `0 ${chevronWidth}px` }}>
        <ItemsCarousel
          infiniteLoop
          requestToChangeActive={setActiveItemIndex}
          activeItemIndex={activeItemIndex}
          numberOfCards={cardNo()}
          gutter={20}
          leftChevron={<Fab size="small" style={{background:'#f9f5ee',boxShadow: 'none'}}>
                        <ArrowBackIosOutlinedIcon style={{color:'#00acc1'}}/>
                       </Fab>}
          rightChevron={<Fab size="small" style={{background:'#f9f5ee',boxShadow: 'none'}}>
                        <ArrowForwardIosOutlinedIcon style={{color:'#00acc1'}}/>
                       </Fab>}
          outsideChevron
          chevronWidth={chevronWidth}
        >
          {desc.map((box,i)=>(
            /*<Fade top delay={400} duration={2000}>*/
              <div style={{paddingBottom:'50px',paddingLeft:'20px',paddingRight:'20px'}}>
                <div class="w3-card-4" >
                  <img src={image[i]} width='100%'/>
                    <div class="w3-container w3-center"style={{}}>
                      <p>{desc[i]}</p>
                    </div>
                </div>
            </div>
            /*</Fade>*/
            ))}
        </ItemsCarousel>
      </div>
    </div>
  );
};
export default Projects;