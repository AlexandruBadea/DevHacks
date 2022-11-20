import * as React from "react";
import HelloWorld from "./map";
import { useState, useEffect } from "react";
import Animation from "./Animation";
import Animation2 from "./Animation2";
import Animation3 from "./Animation3";
import './App.css';
import './controll.css'
import { IoIosSpeedometer } from 'react-icons/io'
import { FaGasPump } from 'react-icons/fa'

//x=640,y=500 
 

function App() {
  
   const [isMoving, setMoving] = useState(false);
   const toggleIsMoving = () => {
    setMoving(current => !current);

    let lin1= document.getElementById("5-3")
    lin1.classList.toggle("cyan");
    let lin2= document.getElementById("4-3");
    lin2.classList.toggle("cyan");
    let lin3= document.getElementById("4-4");
    lin3.classList.toggle("cyan");
    let lin4= document.getElementById("3-5");
    lin4.classList.toggle("cyan");

    let linRosie= document.getElementById("2-4");
    linRosie.classList.toggle("red");
    
    

    

   }
    const [isMoving2, setMoving2] = useState(false);
    const toggleIsMoving2 = () => {
    setMoving2(current => !current);

    let lin1= document.getElementById("5-3")
    lin1.classList.toggle("cyan");
    let lin2= document.getElementById("4-3");
    lin2.classList.toggle("cyan");
    let lin3= document.getElementById("3-3");
    lin3.classList.toggle("cyan");
    let lin4= document.getElementById("2-4");
    lin4.classList.toggle("cyan");
      
    let linRosie= document.getElementById("s2-2");
    linRosie.classList.toggle("red");
   }

   const [isMoving3, setMoving3] = useState(false);
   const toggleIsMoving3 = () => {
    setMoving3(current => !current);

    let lin1= document.getElementById("5-3")
    lin1.classList.toggle("cyan");
    let lin2= document.getElementById("4-2");
    lin2.classList.toggle("cyan");
    let lin3= document.getElementById("3-1");
    lin3.classList.toggle("cyan");
    

    let linRosie= document.getElementById("4-3");
    linRosie.classList.toggle("red");
    let linRosie2= document.getElementById("3-3");
    linRosie2.classList.toggle("red");
    let linRosie3= document.getElementById("4-4");
    linRosie3.classList.toggle("red");
   }
   
   
   

  
useEffect(() => {
  console.log(isMoving);
}, [isMoving]);

useEffect(() => {
  console.log(isMoving2);
}, [isMoving2]);

useEffect(() => {
  console.log(isMoving3);
}, [isMoving3]);

    return (<>
      <HelloWorld />
      
      <button className="first-route" onClick={ toggleIsMoving }> first congested route </button>
      <button className="second-route" onClick={ toggleIsMoving2 }> Second congested route </button>
      <button className="third-route" onClick={ toggleIsMoving3 }> third congested route </button>
      <p className='speed'><IoIosSpeedometer/> Speed: 50 km/h</p>
      <p className='fuel'><FaGasPump/> Fuel: Efficency</p>
      {isMoving? <Animation />: null}
      {isMoving2? <Animation2 />: null}
      {isMoving3? <Animation3 />: null}
      

      </>);

    };
  
export default App;

{/* <motion.div
          animate={{ x: arrX, y: arry }}
          transition={{ duration: 5, delay: 0.5, transition: "easeInOut", repeat: Infinity, repeatType: "reverse" }}>
        <div className="my_box"></div>
        </motion.div> */}