import React from 'react'; // get the React object from the react module
import './App.css';
import './grid.css';
import HorisontalRoad from "./map_elements/horizontalRoad";
import VerticalRoad from "./map_elements/verticalRoad";
import Round from "./map_elements/round";
import './controll.css';

class HelloWorld extends React.Component {
  render() {
    
    return (
        <>
        {/* <HorisontalRoad/>
        <VerticalRoad/>
        
        <Round/>  */}
        
        <div className='grid-layout'>
          <div className='control-center'>
            <div className='control-center__header'>
              <div className='control-center__header__title'>
                <h1>Control Center</h1>
               
                </div>
              </div>
            </div>
          <div className='map map-layout'>
            <div className='tbd grid-1-1'></div>
            <div className='tbd grid-1-2'></div>
            <div className='road-vertical grid-1-3'></div>
            <div className='tbd grid-1-4'></div>
            <div className='tbd grid-1-5'></div>
            <div className='tbd grid-1-6'></div>
            <div className='CLADIRE grid-2-1 GAS'></div>
            {/* <div className='road-orizontal grid-2-2'></div> */}
            {/* <div className='INTERSECTIE grid-2-3'></div> */}
            <div className='road-orizontal grid-2-4' id ='2-4'></div>
            <div className='CLADIRE grid-2-5'></div>
            <div className='tbd grid-2-6'></div>
            <div className='road-vertical grid-3-1' id ='3-1'></div>
            <div className='tbd grid-3-2'></div>
            <div className='road-vertical grid-3-3' id ='3-3'></div>
            <div className='tbd grid-3-4'></div>
            <div className='road-vertical grid-3-5' id= '3-5'></div>
            <div className='tbd grid-3-6'></div>
            {/* <div className='INTERSECTIE-3 grid-4-1'></div> */}
            <div className='road-orizontal grid-4-2' id='4-2'></div>
            <div className='road-round grid-4-3' id ='4-3'>
              <div className='road-round2'></div>
            </div>
            <div className='road-orizontal grid-4-4' id='4-4'></div>
            {/* <div className='INTERSECTIE grid-4-5'></div> */}
            <div className='road-orizontal grid-4-6'></div>
            <div className='road-vertical grid-5-1'></div>
            <div className='tbd grid-5-2'></div>
            <div className='road-vertical grid-5-3' id='5-3'></div>
            <div className='tbd grid-5-4'></div>
            <div className='road-vertical grid-5-5'></div>
            <div className='tbd grid-5-6'></div>
            <div className='road-vertical grid-6-1'></div>
            <div className='tbd grid-6-2'></div>
            <div className='CLADIREE grid-6-3'></div>
            <div className='road-orizontal grid-6-4'></div>
            <div className='road-orizontal grid-6-6'></div>
            <div className='road-vertical grid-7-1' ></div>
            <div className='tbd grid-7-2'></div>
            <div className='road-vertical grid-7-3'></div>
            <div className='tbd grid-7-4'></div>
            <div className='tbd grid-7-5' ></div>
            <div className='tbd grid-7-6'></div>
            // <div className='road-orizontal grid-2-2-h' id ="s2-2"></div>
            </div>
          </div>
        </>
  )}
}   

export default HelloWorld;