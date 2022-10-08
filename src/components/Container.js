import React, {useState} from 'react';

import {questions} from '../data/questions.js';
import Counter from './Counter.js';
import Question from './Question.js';
import Options from './Options.js';

export default function Container (){
	const [question, setQuestion] = useState("");
	questions(setQuestion)

	return (
		<div id="container">
			<Counter />
			<Question question={question} />
			<Options />
			<button>NEXT</button>
		</div>
	)

}
