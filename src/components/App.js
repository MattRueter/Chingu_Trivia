import React, {useState} from 'react';
import {questions} from '../data/questions.js';


//questions call below is testing 'consumption' of async code which 
//fetches API info. See Questions.js file.


export default function App() {
  const [question, setQuestion] = useState("")
  questions(setQuestion)
  return (
   <h1>{question}</h1>
  );
}