import React from 'react';

export default function Options ({options}){
		
	return (
		<div id="optionsBox">
			{options.map((option, index)=>{
				return (			
					<div className="optionItem" key={index}>{`${option[0]}: ${option[1]}`} </div>		
				)
			})}
		</div>
	)
}