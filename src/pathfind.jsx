import React from 'react'; // get the React object from the react module

class Pathfind extends React.Component {
    render() {
        var PF = require('pathfinding');


let matrix=[
    [-1 ,-1 ,-1 ,-1, -1, -1],
    [3, 0, 0 , 0, 4 ,0],
    [0 ,-1 ,0 ,-1, 0 ,-1],
    [0, 0, 0 ,0 ,0, -1],
    [0, -1, 0, -1, 0 ,-1],
    [0, -1, 2, 0, 0, -1],
    [0, -1, -1, -1, -1, -1]
];

let grid = new PF.Grid(matrix);

grid.setWalkableAt(0,0,false);

let finder = new PF.AStarFinder();

console.log(finder.findPath(2, 5, 4, 1, grid));

      return 1;}
  }   
  
  export default Pathfind;