import React from 'react';
import '../App.css';


class VerticalRoad extends React.Component {
  render() {
    console.log("vertical-road loaded");
    return (<>
        <div className="road-vertical"></div>
        <div className="road-vertical"></div>
        </>
  )}
}   

export default VerticalRoad;