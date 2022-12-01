import React from 'react';

export default function Nav ({correct,incorrect}){	
	return(
		<nav id="navbar">		
			<h1>Chingu Trivia</h1>		
			<div className="score">Correct: {correct}</div>
			<div className="score">Incorrect: {incorrect}</div>			
		</nav>
	)
};

