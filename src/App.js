import * as React from "react";
import { motion } from "framer-motion";
import HelloWorld from "./map";

//import Round from "./map_elements/round";
import Pathfind from "./pathfind";
import './App.css';
let arrX = [0 ,100,250,340,0];
let arry= [0,100,20,550,0];

function App() {
    return (
      <>
        {/* <Pathfind /> */}
        <HelloWorld  />
        <motion.div
          animate={{ x: arrX, y: arry }}
          transition={{ duration: 5, delay: 0.5, transition: "easeInOut", repeat: Infinity, repeatType: "reverse" }}>
        <div className="my_box"></div>
        </motion.div> 
      </>
  );
  
    }
    
export default App;

{/* <motion.div
          animate={{ x: arrX, y: arry }}
          transition={{ duration: 5, delay: 0.5, transition: "easeInOut", repeat: Infinity, repeatType: "reverse" }}>
        <div className="my_box"></div>
        </motion.div> */}