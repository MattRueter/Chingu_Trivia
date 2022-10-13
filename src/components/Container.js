import React, {useState, useEffect} from 'react';


import Counter from './Counter.js';
import Question from './Question.js';
import Options from './Options.js';

export default function Container (){
	const [questionsArray, setQuestionsArray] = useState(null)
	const [question, setQuestion] = useState("question")	
	const [options, setOptions] = useState([])	
	const [questionNumber, setQuestionNumber] = useState("one")
	
	useEffect(() => {
		fetch('https://johnmeade-webdev.github.io/chingu_quiz_api/trial.json')
		.then((response) =>response.json())
		.then((data) => {
		 setQuestionsArray([...data])
		 updateCard(0)
		})	
	},[])

	console.log(questionsArray)

	function updateCard(index){
		setQuestion(questionsArray[index].question)
		setOptions(Object.entries(questionsArray[index].choices) )
		setQuestionNumber(questionsArray[index].id)
	}
	
	
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