import Display from './Components/Display'
import Buttons from './Components/Buttons'
import styles from './App.module.css'
import React, { useState } from 'react'
const App = () => {
  const [calval, setcalval] = useState(""); 
  const buttonValue = (e) => {
    let value = e.target.textContent;
        
   if (value === 'AC') {
    setcalval("");
   } else if (value === 'DEL') {
    setcalval(calval.substring(0, calval.length-1));
   } else if (value === '=') {
    const result = eval(calval);
    setcalval(result);
   } else {
    const newValue = calval + value;
    setcalval(newValue);
   }
   
  } 
  return (
    <center>
    <div className={styles.container}>
      <Display displayValue={calval}></Display>
      <Buttons buttonClick={buttonValue}></Buttons>
    </div>
    </center>
  )
}

export default App