import React, {useState, useEffect} from 'react';

import {questions} from '../data/questions.js';
import Counter from './Counter.js';
import Question from './Question.js';
import Options from './Options.js';

export default function Container (){
	
	let totalQuestions = questions.length;
	
	const [questionNumber, setQuestionNumber] = useState(1)
	const [question, setQuestion] = useState(questions[0].question)	
	const [options, setOptions] = useState(Object.entries(questions[0].choices))	



	function handleClick (){
		const index = questions.findIndex(item =>{
			return item.question===question
		})
		console.log(index);

		const nextIndex = index +1
		

		setQuestionNumber(nextIndex+1);
		setQuestion(questions[nextIndex].question);
		setOptions(Object.entries(questions[nextIndex].choices))
	};

	return (
		<div id="container">
			<Counter questionNumber={questionNumber} totalQuestions={totalQuestions} />
			<Question question={question} />
			<Options options={options}/>
			<button onClick={handleClick}>NEXT</button>
		</div>
	)
}