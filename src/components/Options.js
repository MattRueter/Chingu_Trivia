import React from 'react';

export default function Options ({options, answer, updateScore}){
/*
	function selectAnswer (selectedChoice, key){
		const currentOption = document.getElementById('optionsBox').children[key];
			
		if(selectedChoice === answer){		
			console.log("correct!")
			currentOption.style.backgroundColor='green';
			updateScore("correct");
		}else{		
			console.log("incorrect")
			currentOption.style.backgroundColor='red';
			updateScore("incorrect");
		}
	};
*/
	function selectOption (key) {
		const allOptions = document.getElementById('optionsBox').children;
			for(let i=0; i < allOptions.length; i++){
				if(allOptions[i].classList[1]==='selectedOption'){
					allOptions[i].classList.remove('selectedOption');
				}
			}
		
		const selectedOption = document.getElementById('optionsBox').children[key];
			selectedOption.classList.add('selectedOption');
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