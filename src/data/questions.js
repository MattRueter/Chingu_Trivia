
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
async function getQuestions (stateSetter) {

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

/**************************************************/
//---------  Hard written API questions object ----
/**************************************************/
const questions = [
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
  {
    "question": "Which term in JavaScript can be used to describe a declared variable that has not yet been given a value?",
    "id": 4,
    "topic": "javascript",
    "choices": {
      "a": "null",
      "b": "undefined",
      "c": "typeError",
      "d": "NaN"
    },
    "answer": "b"
  },
  {
    "question": "Which selector could refer to an html element with the class of 'sm-col'?",
    "id": 5,
    "topic": "css",
    "choices": {
      "a": "#sm-col",
      "b": ".sm, .col",
      "c": "[class~=col]",
      "d": ".sm_col"
    },
    "answer": "c"
  },
  {
    "question": "Setting an element height to '10vh' bases the height calculation on _________",
    "id": 6,
    "topic": "css",
    "choices": {
      "a": "viewfinder height",
      "b": "viewport width",
      "c": "visible height",
      "d": "viewport height"
    },
    "answer": "d"
  },
  {
    "question": "Which HTML5 property can be used for custom data?",
    "id": 7,
    "topic": "html",
    "choices": {
      "a": "data-",
      "b": "-data-",
      "c": "data=",
      "d": "custom"
    },
    "answer": "a"
  },
  {
    "question": "Which HTML5 tag is used to define 'independant, self-contained content' within a web page?",
    "id": 8,
    "topic": "html",
    "choices": {
      "a": "<section>",
      "b": "<main>",
      "c": "<aside>",
      "d": "<article>"
    },
    "answer": "d"
  },
  {
    "question": "Which of the following snippets does not result in a return value of 8?",
    "id": 9,
    "topic": "javascript",
    "choices": {
      "a": "8**1",
      "b": "Math.pow(16, .75)",
      "c": "2 * 2 * 'two'",
      "d": "2**+'3'"
    },
    "answer": "c"
  },
  {
    "question": "Which of these statements is NOT true of browser-side JavaScript?",
    "id": 10,
    "topic": "javascript",
    "choices": {
      "a": "JavaScript can be used for functional programming.",
      "b": "JavaScript can be used for file reading and writing on client machines.",
      "c": "JavaScript does not require frameworks or libraries to be used.",
      "d": "Though not class-based, JavaScript is an Object-Oriented Programming Language."
    },
    "answer": "b"
  },
  {
    "question": "If we want define style for an unique element, then which css selector will we use ?",
    "id": 11,
    "topic": "css",
    "choices":{
      "a":"id",
      "b":"class",
      "c":"text",
      "d":"name"
    },
    "answer": "a"
  },
  {
    "question": "If we don't want to allow a floating div to the left side of an element, which css property will we use ?",
    "id": 12,
    "topic":"css",
    "choices":{
      "a":"margin",
      "b":"clear",
      "c":"float",
      "d":"floating"
    },
    "answer":"b"
  },
  {
    "question":"Suppose we want to arragnge five nos. of DIVs so that DIV4 is placed above DIV1. Now, which css property will we use to control the order of stack?",
    "id":13,
    "topic":"css",
    "choices":{
      "a":"d-index",
      "b":"c-index",
      "c":"s-index",
      "d":"z-index"
    },
    "answer":"d"
  },
  {
    "question":"Can we align a Block element by setting the left and right margins ?",
    "id":14,
    "topic":"css",
    "choices":{
      "a": "yes, it's possible",
      "b":"no, it's not possible"
    },
    "answer":"b"
  },
  {
    "question":"If we want to wrap a block of text around an image, which css property will we use ?",
    "id":14,
    "topic":"css",
    "choices":{
      "a":"wrap",
      "b":"push",
      "c":"float",
      "d": "align"
    },
    "answer":"c"
  },
  {
    "question": "Can we define the text direction via css property ?",
    "id": 15,
    "topic":"css",
    "choices":{
      "a": "yes",
      "b": "no"
    },
    "answer":"a"
  },
  {
    "question":"If we want to show an Arrow as cursor, then which value we will use ?",
    "id":15,
    "topic":"css",
    "choices":{
      "a":"pointer",
      "b":"default",
      "c":"arrow",
      "d":"arr"
    },
    "answer":"b"
  },
  {
    "question":"If we want to use a nice looking green dotted border around an image, which css property will we use?",
    "id":16,
    "topic":"css",
    "choices":{
      "a":"border-color",
      "b":"border-decoration",
      "c":"border-style",
      "d":"border-line"
    },
    "answer":"c"
  },
  {
    "question":" Which of the following properties will we use to display border around a cell without any content?",
    "id":17,
    "topic":"css",
    "choices":{
      "a":"empty-cell",
      "b":"blank-cell",
      "c":"noncontent-cell",
      "d":"void-cell"
    },
    "answer":"a"
  },
  {
    "question":"What should be the table width, so that the width of a table adjust to the current width of the browser window?",
    "id":18,
    "topic":"css",
    "choices":{
      "a":"640 pixels",
      "b":"100%",
      "c":"full-screen",
      "d":"1024px"
    },
    "answer":"a"
  },
  {
    "question":"How can we write comment along with CSS code ?",
    "id":19,
    "topic":"css",
    "choices":{
      "a":"/* a comment */",
      "b":"// a comment //",
      "c":"/ a comment /",
      "d":"<' a comment'>"
    },
    "answer":"a"
  },
  {
    "question":"Which css property you will use if you want to add some margin between a DIV's border and its inner text?",
    "id":20,
    "topic":"css",
    "choices":{
      "a":"spacing",
      "b":"margin",
      "c":"padding",
      "d":"inner-margin"
    },
    "answer":"c"
  },
  {
    "question":"Which of the following is true about typeof operator in JavaScript?",
    "id":21,
    "topic":"javascript",
    "choices":{
      "a":"The typeof is a unary operator that is placed before its single operand, which can be of any type.",
      "b":"Its value is a string indicating the data type of the operand.",
      "c":"Both of the above.",
      "d":"none of the above"
    },
    "answer":"c"
  },
  {
    "question":"Can you pass a anonymous function as an argument to another function?",
    "id":22,
    "topic":"javascript",
    "choices":{
      "a":"true",
      "b":"false"     
    },
    "answer":"a"
  },
  {
    "question":"Which built-in method reverses the order of the elements of an array?",
    "id":22,
    "topic":"javascript",
    "choices":{
      "a":"changeOrder(order)",
      "b":"reverse()",
      "c":"sort(order)",
      "d":"none of the above"
    },
    "answer":"b"
  },
  {
    "question":"Which of the following function of String object returns a number indicating the Unicode value of the character at the given index?",
    "id":23,
    "topic":"javascript",
    "choices":{
      "a":"charAt()",
      "b":"charCodeAt()",
      "c":"concat()",
      "d":"indexOf()"
    },
    "answer":"b"
  },
  {
    "question":"Which of the following function of String object returns the index within the calling String object of the last occurrence of the specified value?",
    "id":24,
    "topic":"javascript",
    "choices":{
      "a":"search()",
      "b":"lastIndexOf()",
      "c":"substr()",
      "d":"indexOf()"
    },
    "answer":"b"
  },
  {
    "question":"Which of the following function of String object causes a string to be italic, as if it were in an <i> tag?",
    "id":25,
    "topic":"javascript",
    "choices":{
      "a":"fixed()",
      "b":"fontcolor()",
      "c":"fontsize()",
      "d":"italics()"
    },
    "answer":"d"
  },
  {
    "question":"Which of the following function of Array object joins all elements of an array into a string?",
    "id":26,
    "topic":"javascript",
    "choices":{
      "a":"concat()",
      "b":"join()",
      "c":"pop()",
      "d":"map()"
    },
    "answer":"b"
  },
  {
    "question":"Which of the following function of Array object returns a string representing the array and its elements?",
    "id":27,
    "topic":"javascript",
    "choices":{
      "a":"toSource()",
      "b":"sort()",
      "c":"splice()",
      "d":"toString()"
    },
    "answer":"d"
  },
  {
    "question":"Which of the following is not a reserved word in JavaScript?",
    "id":28,
    "topic":"javascript",
    "choices":{
      "a":"interface",
      "b":"throws",
      "c":"program",
      "d":"short"
    },
    "answer":"d"
  },
  {
    "question":"The external JavaScript file must contain <script> tag. True or False?",
    "id":29,
    "topic":"javascript",
    "choices":{
      "a":"true",
      "b":"false"
    },
    "answer":"b"
  },
  {
    "question":"What is the correct syntax for referring to an external script called 'geek.js'?",
    "id":30,
    "topic":"javascript",
    "choices":{
      "a":"<script src='geek.js'>",
      "b":"<script href='geek.js'>",
      "c":"<script ref='geek.js'>",
      "d":"<script name='geek.js'>"
    },
    "answer": "a"
  },
   {
    "question": "What purpose does alt serve in an image tag?",
    "id": 31,
    "topic": "html",
    "choices": {
      "a": "Provide visually impaired users with descriptive text of an image.",
      "b": "If an image link is broken, this text can replace the image",
      "c": "alt tags can be useful for users who browse with images turned off.",
      "d": "ALL of the above."
    },
    "answer": "d"  
  },
  {
    "question": "What does the JavaScript function getElementsByClassName(<classname>) return?",
    "id": 32,
    "topic": "javascript",
    "choices":{
      "a": "The Class object identified by <classname>",
      "b": "A collection of HTML objects, or nodes in a list structure that can be iterated.",
      "c": "The first element that it finds in the HTML document.",
      "d": "All classes in the document by <classname>"      
    },
    "answer": "b"    
  },
  {
    "question" : "What does the term 'bootstrap' refer to?",
    "id": 33,
    "topic": "css",
    "choices":{
      "a": "A javascript file linked into the <head> with a <script> tag.",
      "b": "Any css file stylesheet placed in the HTML.",
      "c": "A phrase that means using an outside sources css file to style your HTML.",
      "d": "A popular front-end framework that can be used for styling, user-interface, and much more."
     },
    "answer": "d"    
  },
  {
    "question": "What does the term 'Vanilla JavaScript' refer to?",
    "id": 34,
    "topic": "javascript",
    "choices":{
      "a": "Vanilla JavaScript is referring to raw/plain JavaScript. Frameworks are built with Vanilla JavaScript.",
      "b": "A framework of JavaScript that focuses on condensed library code.",
      "c": "A play on words to convince companies that raw/plain JavaScript was a new and great framework.",
      "d": "A Ben and Jerry's ice cream flavor that leaves your tummy feeling undefined."      
    },
    "answer": "a"
    
  },
  {
    "question": "Why is the 'lang' attribute necessary?",
    "id": 35,
    "topic": "html",
    "choices":{
      "a": "It's not necessary.",
      "b": "This is used to signal to screen readers what language the content of the page is written in."
       },
    "answer": "b"
  },
  {
    "question": "In window.localStorage(<item>), what is the acceptable data type for <item>?",
    "id": 36,
    "topic": "html",
    "choices":{
      "a": "the item can be any data type.",
      "b": "the item can only be integers.",
      "c": "the item has to be alphanumeric only.",
      "d": "the item can only be a string type."     
       },
    "answer": "d"
    
  }
]

export {questions}