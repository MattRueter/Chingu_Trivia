import React, {useState, useEffect} from 'react';

import {questions} from '../data/questions.js';
import Counter from './Counter.js';
import Question from './Question.js';
import Options from './Options.js';

export default function Container (){

	const [currentQuestionObj, setCurrentQuestionObj] = useState(questions[0])
	const [questionNumber, setQuestionNumber] = useState(currentQuestionObj.id)
	let totalQuestions = questions.length;
	const [question, setQuestion] = useState(currentQuestionObj.question)	
	const [options, setOptions] = useState(Object.entries(currentQuestionObj.choices))	
		
	return (
		<div id="container">
			<Counter questionNumber={questionNumber} totalQuestions={totalQuestions} />
			<Question question={question} />
			<Options options={options}/>
			<button>NEXT</button>
		</div>
	)
}