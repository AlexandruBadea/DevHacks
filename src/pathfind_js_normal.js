// import React from 'react'; // get the React object from the react module

// class pathfind extends React.Component {
//     render() {
//         var PF = require('pathfinding');


// let matrix=[
//     [-1 ,-1 ,-1 ,-1, -1, -1],
//     [3, 0, 0 , 0, 4 ,0],
//     [0 ,-1 ,0 ,-1, 0 ,-1],
//     [0, 0, 0 ,0 ,0, -1],
//     [0, -1, 0, -1, 0 ,-1],
//     [0, -1, 2, 0, 0, -1],
//     [0, -1, -1, -1, -1, -1]
// ];

// let grid = new PF.Grid(matrix);

// for (var x = 0; x < 6; x++) {
//     for (var y = 0; y < 7; y++) {
//         if (matrix[y][x] === -1) {
//             grid.setWalkableAt(x, y, false);
//         }
//     }
// }

// var finder = new PF.AStarFinder();

// console.log(finder.findPath(5, 2, 1, 4, grid));

//       return 1;}
//   }   
  
//   export default pathfind;



  var PF = require('pathfinding');


let matrix=[
    [0, 0, 0, 1, 0],
    [1, 0, 0, 0, 1],
    [0, 0, 1, 0, 0],
    ];

let grid = new PF.Grid(matrix);

grid.setWalkableAt(0, 1, false);

var finder = new PF.AStarFinder();

console.log(finder.findPath(1, 2, 4, 2, grid));

