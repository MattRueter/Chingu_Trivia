
function fetchQuestions (){
  return new Promise(resolve => {
 
    fetch('https://johnmeade-webdev.github.io/chingu_quiz_api/trial.json')
     .then((response) =>response.json())
     .then((data) => {
       resolve(data)
     })

  })
}

//******* Consuming data from fetchQuestions()*********/

// use questions to access API data 
// * will need to be flushed out to allow arguments to access multiple specific values.
async function questions (stateSetter) {

  const questionSet = await fetchQuestions();
  console.log(questionSet)
  stateSetter(questionSet[0].question);
}

async function optionSet (stateSetter){
  
  const questionSet = await fetchQuestions();
  let options = Object.entries(questionSet[0].choices) 
 
  stateSetter(options);
}

async function counter (stateSetter){

  const questionSet = await fetchQuestions();
  
  stateSetter(questionSet[0].id)
}



export {questions,optionSet, counter};