import * as React from "react";
import { motion } from "framer-motion";

import './App.css';

// move div to the right


function App() {
  return (

    // div moves to the right
    <motion.div
      initial={{ x: 0 }}
      animate={{ x: 100 }}
      transition={{ duration: 2 }}
    >
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </motion.div>

  );
}

export default App;

