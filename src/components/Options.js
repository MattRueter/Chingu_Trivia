import React from 'react';

export default function Options ({options, answer}){


function selectAnswer (selectedChoice, key){
	const currentOption = document.getElementById('optionsBox').children[key];
		
	if(selectedChoice === answer){		
		console.log("correct!")
		currentOption.style.backgroundColor='green';
		
	}else{		
		console.log("incorrect")
		currentOption.style.backgroundColor='red';
	}
};
	return (
		<div id="optionsBox">
			{options.map((option, index)=>{
				
				return (			
					<div 
						className="optionItem" 
						key={index}
						onClick={()=>selectAnswer(option[0], index)}
					
						> 
						
						{`${option[0]}: ${option[1]}`} 
					
					</div>		
				)

			})}
		</div>
	)
}