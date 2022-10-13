import React, {useState, useEffect} from 'react';

import {questions} from '../data/questions.js';
//import {questions, optionSet, counter} from '../data/questions.js';
import Counter from './Counter.js';
import Question from './Question.js';
import Options from './Options.js';

export default function Container (){
	const [questionsArray, setQuestionsArray] = useState([])
	useEffect(() => {
		fetch('https://johnmeade-webdev.github.io/chingu_quiz_api/trial.json')
		.then((response) =>response.json())
		.then((data) => {
		 setQuestionsArray([...data])
		})
	},[])
	console.log(questionsArray[0])

	const [question, setQuestion] = useState('Lipsom ....?')
	
	const [options, setOptions] = useState(['a','b','c','d'])
	
	const [questionNumber, setQuestionNumber] = useState('one')	
	
	return (
		<div id="container">
			<Counter questionNumber={questionNumber} totalQuestions={45} />
			<Question question={question} />
			<Options options={options}/>
			<button>NEXT</button>
		</div>
	)

}


/*
const [options, setOptions] = useState([])
optionSet(setOptions)

const [questionNumber, setQuestionNumber] = useState([])	
counter(setQuestionNumber);
*/


/*
<div id="container">
			<Counter questionNumber={questionNumber} totalQuestions={45} />
			<Question question={question} />
			<Options options={options}/>
			<button>NEXT</button>
		</div>
*/