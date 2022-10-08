import React from 'react';

export default function Options ({options}){
		
	return (
		<div>
			{options.map((option, index)=>{
				return (			
					<div key={index}>{`${option[0]}:    ${option[1]}`} </div>		
				)
			})}
		</div>
	)
}