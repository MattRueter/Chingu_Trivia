import React, {useState, useEffect} from 'react';

import {questions} from '../data/questions.js';
import Counter from './Counter.js';
import Question from './Question.js';
import Options from './Options.js';

export default function Container ({updateScore}){
	
	let totalQuestions = questions.length;
	
	const [questionNumber, setQuestionNumber] = useState(1)
	const [question, setQuestion] = useState(questions[0].question)	
	const [options, setOptions] = useState(Object.entries(questions[0].choices))
	const [answer, setAnswer]	= useState(questions[0].answer)	



	function handleClick (){
		const index = questions.findIndex(item =>{
			return item.question === question
		})

		const nextIndex = index +1
		if (nextIndex +1 > totalQuestions){

		}else{
			setQuestionNumber(nextIndex+1);
			setQuestion(questions[nextIndex].question);
			setOptions(Object.entries(questions[nextIndex].choices))
			setAnswer(questions[nextIndex].answer)
			
		}
		
		resetColor();
	};
//resetColor may be better defined elsewhere as a utility function.
function resetColor(){
	const optionsDOM = document.getElementById('optionsBox').children;
	const children = optionsDOM.length;
		
	for(let i = 0; i<children; i++){
		optionsDOM[i].style.backgroundColor ='white';
	}
};
	return (
		<div id="container">
			<Counter questionNumber={questionNumber} totalQuestions={totalQuestions} />
			<Question question={question} />
			<Options options={options} answer={answer} updateScore={updateScore}/>
			<button onClick={handleClick}>NEXT</button>
		</div>
	)
}