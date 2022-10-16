import React from 'react';

export default function Options ({options, answer}){

function selectAnswer (selectedChoice){
	if(selectedChoice === answer){		
		console.log("correct!")
	}else{
		console.log("incorrect")
	}
};
	return (
		<div id="optionsBox">
			{options.map((option, index)=>{
				
				return (			
					<div className="optionItem" 
					key={index}
					onClick={()=>selectAnswer(option[0])}
					> {`${option[0]}: ${option[1]}`} </div>		
				)
				
			})}
		</div>
	)
}