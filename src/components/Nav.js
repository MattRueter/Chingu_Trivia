import React from 'react';


export default function Nav ({correct,incorrect}){	
	return(
		<nav id="navbar">		
			<h1>Chingu Trivia</h1>		
			<div>Correct: {correct}</div>
			<div>Incorrect: {incorrect}</div>			
		</nav>
	)
};

