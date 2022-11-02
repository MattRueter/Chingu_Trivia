import React, {useState, useEffect} from 'react';

import {resetColor} from '../utility_functions/reset_color.js';
import {resetHighlight} from '../utility_functions/reset_highlight.js';
import Counter from './Counter.js';
import Question from './Question.js';
import Options from './Options.js';

//global
let incorrectResponses =[];

export default function Container ({updateScore}){
	
	const [questionSet,setQuestionSet] = useState(null)
	const [totalQuestions, setTotalQuestions] =useState(null)
	const [questionNumber, setQuestionNumber] = useState(null)
	const [currentQuestion, setCurrentQuestion] = useState(null)	
	const [options, setOptions] = useState([])
	const [answer, setAnswer]	= useState(null)	

	const [selected, setSelected] = useState(null);
	const [answerEvaluated, setAnswerEvaluated] = useState(false);

	useEffect(() =>{
		fetch('https://johnmeade-webdev.github.io/chingu_quiz_api/trial.json')
		 .then((response) =>response.json())
		 .then((data) =>setQuestionSet(data)) 
	},[]);

	useEffect(() =>{
		if(questionSet !== null){
			setTotalQuestions(questionSet.length)
			setQuestionNumber(questionSet[0].id)
			setCurrentQuestion(questionSet[0].question)
			setOptions(Object.entries(questionSet[0].choices))
			setAnswer(questionSet[0].answer)
		}
	},[questionSet])

	useEffect(() =>{		
		const nextBtn = document.getElementById('nextBtn');
		nextBtn.textContent === 'CHECK' ? nextBtn.textContent='NEXT' : nextBtn.textContent='CHECK';
	},[answerEvaluated])

	function updateSelected(selectedOption){
		setSelected(selectedOption);
	}

	function nextQuestion (){		
				
			const index = questionSet.findIndex(item =>{
				return item.question === currentQuestion
			})
	
			const nextIndex = index +1
			if(nextIndex +1 > totalQuestions){
	
			}else{
				setQuestionNumber(nextIndex+1);
				setCurrentQuestion(questionSet[nextIndex].question);
				setOptions(Object.entries(questionSet[nextIndex].choices))
				setAnswer(questionSet[nextIndex].answer)			
			}
			
			resetColor();
			resetHighlight();
			setAnswerEvaluated(false);		
	};


	function checkAnswer (){
			
		if(selected.textContent[0] === answer){		
			selected.style.backgroundColor='green';
			updateScore("correct");
		}else{		
			selected.style.backgroundColor='red';
			updateScore("incorrect");
			createIncorrectArray(questionSet[questionNumber])
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
		incorrectResponses.push(question)
		console.log(incorrectResponses)		
	};
	
	return (
		<div id="container">
			<Counter questionNumber={questionNumber} totalQuestions={totalQuestions} />
			<Question currentQuestion={currentQuestion} />
			<Options options={options} answer={answer} updateScore={updateScore} updateSelected={updateSelected} answerEvaluated={answerEvaluated}/>
			<button id='nextBtn' onClick={handleClick}>CHECK</button>
		</div>
	)
}
