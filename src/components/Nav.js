import React from 'react';
import {users} from '../data/user.js';

export default function Nav ({user,correct,incorrect,createNewUser, selectUser}){
	
	const userList = users.map((item, index)=>{
		return(
			<option key={index} value={index}>{item.userName}</option>	
		)
	})
	
	return(
		<nav id="navbar">		
				<h1>Chingu Trivia</h1>		
			<div className="navWrapper">
				<button onClick={createNewUser}>Create User</button>
				<select onChange={selectUser}>
					{userList}	
				</select>
				<h2>{user.userName}</h2>
				<div>Correct: {correct}</div>
				<div>Incorrect: {incorrect}</div>
			</div>
		</nav>
	)
}