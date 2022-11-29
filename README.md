# Chingu-Trivia (solo project submission)

Live Demo here...(eventually)

---
## The quiz:

This simple quiz app allows users to test their knowledge of a range of html, CSS & Javascript basics. 
---
The user selects their answer for each question and once they reach the end, they are given the opportunity to retry those questions they previously got wrong. They do this until they get 100%. Their current score is displayed in the navbar throughout the quiz.
---
There is only a UI for quiz-takers. It's not designed to allow the creation of new questions or question sets by a 'quiz-maker' (i.e. a teacher, instructor, etc..).
---
---
## Development:
- installing locally
- 'stack'
- Component hierarchy
- 'documentation' (api, State, functions)

## INSTALLING LOCALLY:
---
The quiz is built with Create React App (18.2.0). To run locally run the following.
``` javascript
npm install
```

## COMPONENT HIERARCHY:
---
Chingu-trivia is built with React. No CSS library or framework was used.

The entry point is index.js which calls App.

App and CardContainer are both stateful components. App renders the navbar and CardContainer components. It also controls scoring and passes this to the Navbar for display and to CardContainer for use in rendering 'Try again' or 'Finished' messages. 

CardContainer renders the main quiz card and each section within this card is a much smaller stateless component.


## DOCUMENTATION:
---
- STATE
- data and utility functions
- CardContainer functions
- control flow