import React from 'react';

import {questions} from '../data/questions.js';
import Counter from './Counter.js';
import Question from './Question.js';
import Options from './Options.js';

export default function Container (){


	return (
		<div id="container">
			<Counter />
			<Question />
			<Options />
			<button>NEXT</button>
		</div>
	)

}