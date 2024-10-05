import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  //Initializes Variables
  const [input1, setInput1] = useState(0);
  const [input2, setInput2] = useState(0);
  const [input3, setInput3] = useState(0);
  const [grade, setGrade] = useState(0);
  const [result, setResult] = useState(0);

  const compute = () => {
    //Calculates Grade
    setGrade(
      ((+input1 * 0.3) + (+input2 * 0.3) + (+input3 * 0.4))
    )
    
    //Calculates Final Grade
    if (grade < 74.5) {
      setResult(0);
          } else if (grade >= 74.51 && grade <= 76.5) {
              setResult(1);
          } else if (grade >= 76.51 && grade <= 78.5) {
              setResult(1.25);
          } else if (grade >= 78.51 && grade <= 80.5) {
              setResult(1.5);
          } else if (grade >= 80.51 && grade <= 82.5) {
              setResult(1.75);
          } else if (grade >= 82.51 && grade <= 84.5) {
              setResult(2);
          } else if (grade >= 84.51 && grade <= 86.5) {
              setResult(2.25);
          } else if (grade >= 86.51 && grade <= 88.5) {
              setResult(2.5);
          } else if (grade >= 88.51 && grade <= 90.5) {
              setResult(2.75);
          } else if (grade >= 90.51 && grade <= 92.5) {
              setResult(3);
          } else if (grade >= 92.51 && grade <= 94.5) {
              setResult(3.25);
          } else if (grade >= 94.51 && grade <= 96.5) {
              setResult(3.5);
          } else if (grade >= 96.51 && grade <= 98.5) {
              setResult(3.75);
          } else if (grade >= 98.51 && grade <= 100) {
            setResult(4);
          } else {setResult("ERROR")}
  
  }

  return ( 
    <div className="App">
      <header className="App-header">  
        
        {/* Icon Spin */}
        <div className="AppCont">
          <div style={{height: '30vw', maxHeight: '300px'}}>       
          <img src={logo} className="App-logo" alt="logo" width={250} height={250}/>
          </div>
        <p><br></br>

         {/* Input Fields */}
          <h1><strong>GRADE CALCULATOR</strong></h1>
          <br></br>
          <h2>Quizzes</h2>
          <input className='appText' type="text" value={(input1)} onChange={(e) => setInput1(e.target.value)}></input><br></br>
          <h2>Lab Activities</h2>
          <input className='appText' type="text" value={(input2)} onChange={(e) => setInput2(e.target.value)}></input><br></br>
          <h2>Final Exam</h2>
          <input className='appText' type="text" value={(input3)} onChange={(e) => setInput3(e.target.value)}></input><br></br>
         
          {/* Calculate & LogOut Buttons */}
         <br></br>
         <button onClick={compute} style={{margin: '0 5px 40px 0', padding: '0 40px 0 40px'}}><strong>Calculate</strong></button>
         <button onClick={window.close} style={{margin: '0 0 40px 5px', padding: '0 40px 0 40px'}}><strong>Log Out</strong></button>
         
         <h3>Grade: {grade}</h3>
         <h2>[Final Grade]</h2><strong style={{fontSize: '3vw'}}>{result}</strong>
         

        </p>
        <p style={{fontSize: '24px'}}>Note: The Calculate button needs to be clicked twice</p>
        </div><br></br>
       
      </header>
    </div>
  );
}

export default App;

// Malang, Andrei || Lab Activity: State & UseState 
