import React from 'react';
import './App.css';
import {motion} from 'framer-motion';

let arrX=[640,640,270,270];
let arrY=[500,300,300,100];

// function change(){
//     for(let i=0;i<5;i++){
//         let elm= document.getElementsByClassName("lin-cyan");
//         let elmRosu= document.getElementsByClassName("lin-rosu");
//         elm.toggleClass('cyan'); 

// }}

// change()

class Animation3 extends React.Component {
    
    render() {
      
      return (
        <motion.div
        id='animation'
        layout
        initial={{ x: 640, y: 500 ,duration: 5}}
        animate={{ x: arrX, y: arrY}}
        transition={{ duration: 7, delay: 0.5 ,transition: "easeInOut"}}>
        

        <div className="my_box"></div>
        
      </motion.div>
      
    )}
  }   
  
  export default Animation3;