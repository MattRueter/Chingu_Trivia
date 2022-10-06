

function fetchQuestions (){
  return new Promise(resolve => {
 
    fetch('https://johnmeade-webdev.github.io/chingu_quiz_api/trial.json')
     .then((response) =>response.json())
     .then((data) => {
       resolve(data)
     })

  })
}
async function questions () {
  const questionSet = await fetchQuestions();
  console.log(questionSet);
}
questions();

export default function App() {
  return (
   <h1>Hello World</h1>
  );
}