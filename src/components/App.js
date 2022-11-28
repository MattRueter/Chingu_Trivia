import React, {useState} from 'react';
import '../css/index.css';
import Nav from './Nav.js';
import Container from './Container.js';


export default function App() {
	const [correct, setCorrect] = useState(0);
  const [incorrect, setIncorrect] = useState(0);

  function updateScore(correctOrIncorrect){    
    if(correctOrIncorrect==='correct'){
      setCorrect(correct + 1)
    }else{      
      setIncorrect(incorrect + 1)
    }
  }

  function resetScore(){    
    setCorrect(0);
    setIncorrect(0);
  }

  return (
    <div>
      <Nav  correct={correct} incorrect={incorrect} />
      <Container updateScore={updateScore} resetScore={resetScore}/>
    </div>
  );
}