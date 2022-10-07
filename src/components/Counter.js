import React, {useState} from 'react';
import {counter} from '../data/questions.js';


export default function Counter (){
	const [questionNumber, setQuestionNumber] = useState([])
	
	counter(setQuestionNumber);


	return <div>{questionNumber} out of #total# </div>
}