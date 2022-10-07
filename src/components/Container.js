import React from 'react';

import Counter from './Counter.js';
import Question from './Question.js';
import Options from './Options.js';

export default function Container (){
	return (
		<div>
			<Counter />
			<Question />
			<Options />
			<button>NEXT</button>
		</div>
	)

}