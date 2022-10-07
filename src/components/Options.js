import React, {useState} from 'react';
import {optionSet} from '../data/questions.js';

export default function Options (){
	const [options, setOptions] = useState([])

	optionSet(setOptions)
	
	const optionList = options.map((option, index)=>{
		return (
			<div>
				<div>{`${option[0]}:    ${option[1]}`} </div>		
			</div>
		)
	})	
	return (
		<div>
			{optionList}
		</div>
	)
}