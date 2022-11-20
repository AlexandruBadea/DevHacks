import React from 'react'; // get the React object from the react module
import './App.css';
import './grid.css';
import HorisontalRoad from "./map_elements/horizontalRoad";
import VerticalRoad from "./map_elements/verticalRoad";
import Round from "./map_elements/round";
class HelloWorld extends React.Component {
  render() {
    console.log("Hello World");
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
            <VerticalRoad className='grid-1-3'/>
            <div className='tbd grid-1-4'></div>
            <div className='tbd grid-1-5'></div>
            <div className='tbd grid-1-6'></div>
            <div className='CLADIRE grid-2-1'></div>
            <HorisontalRoad className='grid-2-2'/>
            <div className='INTERSECTIE grid-2-3'></div>
            <HorisontalRoad className='grid-2-4'/>
            <div className='CLADIRE grid-2-5'></div>
            <VerticalRoad className='grid-3-1' />
            <div className='tbd grid-3-2'></div>
            <VerticalRoad className='grid-3-3' />
            <div className='tbd grid-3-4'></div>
            <VerticalRoad className='grid-3-5' />
            <div className='tbd grid-3-6'></div>
            <div className='INTERSECTIE-3 grid-4-1'></div>
            <HorisontalRoad className='grid-4-2' />
            <Round className='grid-4-3' />
            <HorisontalRoad className='grid-4-4' />
            <div className='INTERSECTIE grid-4-5'></div>
            <VerticalRoad className='grid-5-1' />
            <div className='tbd grid-5-2'></div>
            <VerticalRoad className='grid-5-3' />
            <div className='tbd grid-5-4'></div>
            <VerticalRoad className='grid-5-5' />
            <div className='tbd grid-5-6'></div>
            <VerticalRoad className='grid-6-1' />
            <div className='tbd grid-6-2'></div>
            <div className='CLADIREE grid-6-3'></div>
            <HorisontalRoad className='grid-6-4' />
            <div className='INTERSECTIE-3 grid-6-5'></div>
            <HorisontalRoad className='grid-6-6' />
            <VerticalRoad className='grid-7-1' />
            <div className='tbd grid-7-2'></div>
            <VerticalRoad className='grid-7-3' />
            <div className='tbd grid-7-4'></div>
            <div className='tbd grid-7-5' ></div>
            <div className='tbd grid-7-6'></div>

            </div>
          </div>
        </>
  )}
}   

export default HelloWorld;