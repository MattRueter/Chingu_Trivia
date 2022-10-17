import React, {useState} from 'react';

import '../css/index.css';
import Nav from './Nav.js';
import Container from './Container.js';
import {users} from '../data/user.js';

export default function App() {
  const [user, setUser] = useState(users[1])
	const [correct, setCorrect] = useState(user.correctResponses);
	const [incorrect, setIncorrect] = useState(user.incorrectResponses);

  function updateScore(correctOrIncorrect){
    console.log(`updating score.`)
    
    if(correctOrIncorrect==='correct'){
      user.updateScore("correct")
      setCorrect(user.correctResponses)
    }else{
      user.updateScore("incorrect")
      setIncorrect(user.incorrectResponses)
    }
  }

  return (
    <div>
      <Nav user={user} correct={correct} incorrect={incorrect}  />
      <Container updateScore={updateScore}/>
    </div>
  );
}