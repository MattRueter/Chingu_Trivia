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
	updateScore (correctOrIncorrect){
		let key = correctOrIncorrect
		this.currentSession[key] += 1;
	}
	resetScore(){
		this.currentSession.correct = 0;
		this.currentSession.incorrect = 0;
	}
	updateCurrentQuestion (number){
		this.currentSession.currentQuestion += number;	
	}
}

const user_one = new User('Player One', 'examplePassword123');
const user_two = new User('Player Two', 'examplePassword123');
	
const users = [
	user_one,
	user_two
]


export {users, testQuestions }




const testQuestions = [
	{
	  "question": "Which HTML5 element should contain important links for navigating a website?",
	  "id": 1,
	  "topic": "html",
	  "choices": {
		"a": "<li>",
		"b": "<ul>",
		"c": "<header>",
		"d": "<nav>"
	  },
	  "answer": "d"
	},
	{
	  "question": "Which HTML5 element should contain important information about what page you are on and the topic of the page?",
	  "id": 2,
	  "topic": "html",
	  "choices": {
		"a": "<li>",
		"b": "<ul>",
		"c": "<header>",
		"d": "<nav>"
	  },
	  "answer": "c"
	},
	{
	  "question": "Which JavaScript variable declaration is used when the assigned value is likely to change?",
	  "id": 3,
	  "topic": "javascript",
	  "choices": {
		"a": "let",
		"b": "var",
		"c": "variable",
		"d": "const"
	  },
	  "answer": "a"
	},
];
  
  