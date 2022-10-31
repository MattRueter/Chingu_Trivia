import React, {useState, useEffect} from 'react';
//import {questions} from '../data/questions.js';
import Counter from './Counter.js';
import Question from './Question.js';
import Options from './Options.js';

export default function Container ({updateScore}){
	
	const [totalQuestions, setTotalQuestions] =useState(0)
	const [questionSet,setQuestionSet] = useState(null)
	const [questionNumber, setQuestionNumber] = useState(null)
	const [question, setQuestion] = useState(null)	
	const [options, setOptions] = useState([])
	const [answer, setAnswer]	= useState(null)	

	useEffect(() =>{
	
	fetch('https://johnmeade-webdev.github.io/chingu_quiz_api/trial.json')
     .then((response) =>response.json())
     .then((data) => setQuestionSet(data))
	 .then(()=>{
		setTotalQuestions(questionSet.length)
		setQuestionNumber(questionSet[0].id)
		setQuestion(questionSet[0].question)
		setOptions(Object.entries(questionSet[0].choices))
		setAnswer(questionSet[0].answer)
		console.log(questionSet)
	 })

	},[]);

	function nextQuestion (){
		
		const index = questionSet.findIndex(item =>{
			return item.question === question
		})

		const nextIndex = index +1
		if(nextIndex +1 > totalQuestions){

		}else{
			setQuestionNumber(nextIndex+1);
			setQuestion(questionSet[nextIndex].question);
			setOptions(Object.entries(questionSet[nextIndex].choices))
			setAnswer(questionSet[nextIndex].answer)			
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
			<button onClick={nextQuestion}>NEXT</button>
		</div>
	)
}