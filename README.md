# Chingu-Trivia (solo project submission)

Live Demo here...(eventually)

---
## The quiz:

This simple quiz app allows users to test their knowledge of a range of html, CSS & Javascript basics. 

The user selects their answer for each question and once they reach the end, they are given the opportunity to retry those questions they previously got wrong. They do this until they get 100%. Their current score is displayed in the navbar throughout the quiz.

There is only a UI for quiz-takers. It's not designed to allow the creation of new questions or question sets by a 'quiz-maker' (i.e. a teacher, instructor, etc..).

---
## Development:
- installing locally
- Component hierarchy
- Documentation - State, API,utility functions etc.. 

## INSTALLING LOCALLY:
The quiz is built with Create React App (18.2.0). To run locally run the following.
``` javascript
npm install
```

## COMPONENT HIERARCHY:
Chingu-trivia is built with React. No CSS library or framework was used.

The entry point is index.js which calls App.

App and CardContainer are both stateful components. App renders the navbar and CardContainer components. It also controls scoring and passes this to the Navbar for display and to CardContainer for use in rendering 'Try again' or 'Finished' messages. 

CardContainer renders the main quiz card and each section within this card is a much smaller stateless component.


# DOCUMENTATION:
- STATE
- data and utility functions
- CardContainer functions
- control flow

## **STATE:**
There are three main categories for state:

1. State which deals with the current 'mode' of the game.
2. State which deals with scoring and displaying the score.
3. State which deals with the question arrays.

## ***Game mode:*** 
```javascript
const [index, setIndex] = useState(0);
const [selected, setSelected] = useState(null);
const [answerEvaluated, setAnswerEvaluated] = useState(false);
const [tryAgain, setTryAgain] = useState(false);
const [endGame, setEndGame] = useState(false);
``` 
```javascript
const [index, setIndex]
/*
This is used throughout the app to help display the current question number. To check the answer of the current question against what the user has selected. To move on to the next question. And to determine if the player has reached the last question. 
*/
const [selected, setSelected] 
const [answerEvaluated, setAnswerEvaluated] 
/*
These are used to evaluate the answer. The user can select a different answer if they change their mind. Once they click the 'check' button, however, they can't change their mind and have to click 'next'. These help mangage that functionality.
*/
const [tryAgain, setTryAgain] 
const [endGame, setEndGame] 
/*
These are used to determine if the user needs to continue the quiz and attempt questions they had previously got wrong or if the game is finished. Different messages are rendered based on these states once the last question is reached.
*/

 ```
## ***Scoring:***
- ***App.js***
``` javascript
const [correct, setCorrect] = useState(0);
const [incorrect, setIncorrect] = useState(0);
```
- ***CardContainer.js***
``` javascript
const [total, setTotal] = useState([correct,incorrect])
```
```javascript
const [correct, setCorrect]
const [incorrect, setIncorrect]
/*
These simply add up the number of correct and incorrect responses. They are used to display the same in the nav bar and in messages at the end of the round/quiz.
*/
const [total, setTotal]
/*
This is used in CardContainer to display the score and is and array made up of correct and incorrrect...come to think of it these should probably just be simplified to one const passed between App and CardContainer.
*/
```
## ***Question arrays:***
``` javascript
const [questionMaster, setQuestionMaster]= useState(loading);
const [questionSet,setQuestionSet] = useState(loading)
const [incorrectResponses, setIncorrectResponses] = useState([])
```
``` javascript
const [questionMaster, setQuestionMaster]
/*
This is where the question array is stored after the fetch.
*/
const [incorrectResponses, setIncorrectResponses]
/*
This is created and updated as the user gets answers wrong.
*/
const [questionSet,setQuestionSet]
/*
Originally this was the only array holding the question objects. I then added the ability to retry missed questions and then the ability to do the whole quiz again (rather than reload the page).
This variable is now a container for whichever set of questions are being 'played'. It changes to the incorrectResponses and then back to the Master depending on if a user has finsihed or not.
*/

```
