import React from 'react';

export default function Options ({options, answer, updateScore, updateSelected, answerEvaluated}){

	function selectOption (key) {
		if(answerEvaluated === false){

			const allOptions = document.getElementById('optionsBox').children;
				for(let i=0; i < allOptions.length; i++){
					if(allOptions[i].classList[1]==='selectedOption'){
						allOptions[i].classList.remove('selectedOption');
					}
				}
			
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
}