class User {
	constructor(name,password){
		this._userName = name;
		this._password = password;

		this.currentSession ={
			currentQuestion:0,
			correct: 0,
			incorrect: 0
		}
	}
	get userName (){
		return this._userName;
	}
	get currentQuestion (){
		return this.currentSession.currentQuestion;
	}
	get correctResponses (){
		return this.currentSession.correct;
	}
	get incorrectResponses (){
		return this.currentSession.incorrect;
	}
	set score (correctOrIncorrect){
		let key = correctOrIncorrect
		this.currentSession[key] += 1;
	}
	set currentQuestion (number){
		this.currentSession.currentQuestion += number;	
	}
}

const user_one = new User('Player One', 'examplePassword123');
const user_two = new User('Player Two', 'examplePassword123');
	
const users = [
	user_one,
	user_two
]


export {users}