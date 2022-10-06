
function fetchQuestions (){
  return new Promise(resolve => {
 
    fetch('https://johnmeade-webdev.github.io/chingu_quiz_api/trial.json')
     .then((response) =>response.json())
     .then((data) => {
       resolve(data)
     })

  })
}
// use questions to access API data 
// * will need to be flushed out to allow arguments to access multiple specific values.
export async function questions (stateSetter) {
  const questionSet = await fetchQuestions();
  stateSetter(questionSet[0].question);
}