import React, {useState} from 'react';

import {questions, optionSet} from '../data/questions.js';
import Counter from './Counter.js';
import Question from './Question.js';
import Options from './Options.js';

export default function Container (){
	const [question, setQuestion] = useState("");
	questions(setQuestion)

	const [options, setOptions] = useState([])
	optionSet(setOptions)

	return (
		<div id="container">
			<Counter />
			<Question question={question} />
			<Options options={options}/>
			<button>NEXT</button>
		</div>
	)

}
