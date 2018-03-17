import React, { Component } from 'react';

class Logo extends Component {
    render() {
      return (
        <svg xmlns="http://www.w3.org/2000/svg"
        width="70"
        viewBox="0 0 500 500">
          <path 
          fill="#678098" 
          stroke="#101826" 
          strokeWidth="2"
          d="M68,198 Q61,207,60,223 V430 
          S60,490,120,490 H320 S380,490,380,430 
          V230 Q377,194,356,181 Q330,218,319,239 
          Q324,245,325,260 V400 S325,435,290,435 
          H150 S115,435,115,400 V260 Q115,252,115,252 
          Q95,223,67,198 M106,173 Q110,170,123,170 H294 
          Q264,205,252,225 H175 Q145,200,107,173" />
          <path 
          fill="#fa3838" 
          fill="#101826"
          stroke="#101826" 
          strokeWidth="3" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          d="M220,305 Q175,220,15,135 Q155,235,220,410 
          Q300,190,480,10 Q300,155,220,305" />
        </svg>
      );
    }
  }
 
export default Logo;