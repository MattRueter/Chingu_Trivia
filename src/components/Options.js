import React from 'react';
import {resetHighlight} from '../utility_functions/reset_highlight.js';

export default function Options ({options, updateSelected, answerEvaluated}){

	function selectOption (key) {
		if(answerEvaluated === false){
			resetHighlight();
			const selectedOption = document.getElementById('optionsBox').children[key];
				selectedOption.classList.add('selectedOption');
				updateSelected(selectedOption);
		}
	};

	return (
		<div id="optionsBox">
			{options.map((option, index)=>{
				
				return (			
					<div 
					className="optionItem" 
					key={index}
					onClick={()=>selectOption(index)}					
					> 						
						{`${option[0]}: ${option[1]}`} 					
					</div>		
				)
			})}
		</div>
	)
};
