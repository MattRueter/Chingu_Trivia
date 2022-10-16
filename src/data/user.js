const users = [
	{
		userName:'user_one',
		password: 'examplePassword123',
		currentSession:{
			currentQuestion: null,
			correct: 0,
			incorrect: 0
		},
	},
	{
		userName:'user_two',
		password: 'examplePassword123',
		currentSession:{
			currentQuestion:4,
			correct: 2,
			incorrect: 1
		},
	}
]

export {users}