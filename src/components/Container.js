import React, {useState, useEffect} from 'react';
import {resetColor} from '../utility_functions/reset_color.js';
import {resetHighlight} from '../utility_functions/reset_highlight.js';
import Counter from './Counter.js';
import Question from './Question.js';
import Options from './Options.js';
import Message from './Message.js';
import {testQuestions} from '../data/user.js';

//--------------------------------------------------------------------------------------------
//***** Container controls state for all components within the question card *****************
//--------------------------------------------------------------------------------------------
export default function Container ({updateScore, resetScore, correct, incorrect}){
	const [questionMaster, setQuestionMaster]= useState(testQuestions);
	const [questionSet,setQuestionSet] = useState(testQuestions)
	const [incorrectResponses, setIncorrectResponses] = useState([])
	const [index, setIndex] = useState(0);
	const [selected, setSelected] = useState(null);
	const [answerEvaluated, setAnswerEvaluated] = useState(false);
	const [tryAgain, setTryAgain] = useState(false);
	const [endGame, setEndGame] = useState(false);
	const [roundScore, setRoundScore] = useState([correct,incorrect])

//implement once dev is finished and then check restarting okay.
//	useEffect(() =>{		
//		fetch('https://johnmeade-webdev.github.io/chingu_quiz_api/trial.json')
//		 .then((response) =>response.json())
//		 .then((data) =>setQuestionSet(data)) 		 
//	},[]);

	useEffect(() =>{	
		if(endGame===false && tryAgain === false){
			const nextBtn = document.getElementById('nextBtn');
			nextBtn.textContent === 'CHECK' ? nextBtn.textContent='NEXT' : nextBtn.textContent='CHECK';
		}	
	},[answerEvaluated])

	function updateSelected(selectedOption){
		setSelected(selectedOption);
	}

	function nextQuestion (){		
			if(index +2 > questionSet.length){
				displayEndgame ();
			}else{
				setIndex(index + 1);			
			}			
			resetColor();
			resetHighlight();
			setAnswerEvaluated(false);		
	};


	function checkAnswer (){	
		if(selected.textContent[0] === questionSet[index].answer){		
			selected.style.backgroundColor='green';
			updateScore("correct");
		}else{		
			selected.style.backgroundColor='red';
			updateScore("incorrect");
			createIncorrectArray(questionSet[index])
		}
		setAnswerEvaluated(true);
	};
	
	function handleClick(){
		if (answerEvaluated === true){
			nextQuestion()
		}else{
			checkAnswer()
		}
	}

	function createIncorrectArray(question){
		setIncorrectResponses(current =>[...current, question])
	};

	function displayEndgame (){	
		if(answeredAllCorrectly()){
			setTryAgain(false)
			setEndGame(true);
		}else{
			setTryAgain(true)	
			setAnswerEvaluated(false)
			setRoundScore([correct,incorrect])
			setIndex(0);
			setQuestionSet(incorrectResponses);
			setIncorrectResponses([]);
		}
	}

	function answeredAllCorrectly(){
		if(incorrectResponses.length === 0 ){
			return true;
		}else{
			return false;
		}
	}

	function toggleTryAgain (){
		if (tryAgain === true){
			setTryAgain(false);
			resetScore()
		}else{
			setTryAgain(true);
		}
	};
	
	function toggleEndGame (){		
		if (endGame === true){
			setEndGame(false);
			setQuestionSet(questionMaster);
			setIndex(0)
			resetScore()	
		}else{
			setEndGame(true);
		}
		
	}

	if(endGame === false && tryAgain === false){
		return (
			<div id="container">
				<Counter questionNumber={index + 1} totalQuestions={questionSet.length} />
				<Question currentQuestion={questionSet[index].question} />
				<Options options={Object.entries(questionSet[index].choices)} answer={questionSet[index].answer} updateScore={updateScore} updateSelected={updateSelected} answerEvaluated={answerEvaluated}/>
				<button id='nextBtn' onClick={handleClick}>CHECK</button>
			</div>
		)

	}else if(tryAgain === true){
	
		return(
			<Message msgHead={`${roundScore[0]}:correct / ${roundScore[1]}: incorrect`} msg="Now go back and try the ones you missed." btnMsg="Continue" toggle={toggleTryAgain} />
			
		)
	}
	else if (endGame === true){
		return(
			<Message msgHead="Congrats!" msg="You've got 100%!"  btnMsg="Continue" toggle={toggleEndGame} />
		)
	}
}
