import React, {useState} from 'react';
import '../css/index.css';
import Nav from './Nav.js';
import CardContainer from './CardContainer.js';

//--------------------------------------------------------------------------------------------
//***** App controls state for scoring and score display in Navbar *****************
//--------------------------------------------------------------------------------------------
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
      <CardContainer updateScore={updateScore} resetScore={resetScore} correct={correct} incorrect={incorrect}/>
    </div>
  );
}