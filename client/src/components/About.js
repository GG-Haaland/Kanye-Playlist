import React from 'react';
import ImageSlider from './ImageSlider';

import { SliderData } from './SliderData'
const About = (props) => {
  
    return (
      <div >
        <div className="img-wrapper">
        <ImageSlider slides={SliderData}/>
        </div>
      </div>
    )
  }
  
  export default About