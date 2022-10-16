import React from 'react';


export default function Nav ({user,correct,incorrect}){
	
	
	return(
		<nav id="navbar">
			<h1>Chingu Trivia</h1>
			<h2>{user.userName}</h2>
			<div>Correct: {correct}</div>
			<div>Incorrect: {incorrect}</div>
		</nav>
	)
}