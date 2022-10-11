import React, {useState} from 'react';

import {questions, optionSet, counter} from '../data/questions.js';
import Counter from './Counter.js';
import Question from './Question.js';
import Options from './Options.js';

export default function Container (){
	const [question, setQuestion] = useState("");
	questions(setQuestion)

	const [options, setOptions] = useState([])
	optionSet(setOptions)

	const [questionNumber, setQuestionNumber] = useState([])	
	counter(setQuestionNumber);

	return (
		<div id="container">
			<Counter questionNumber={questionNumber} totalQuestions={45} />
			<Question question={question} />
			<Options options={options}/>
			<button>NEXT</button>
		</div>
	)

}
