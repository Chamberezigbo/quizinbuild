let counter = 0;
let point = 0;
let totalQuestions;
let mainAnswer;

var myQuestions = [
	{
		question: "How many persons founded rad5",
		answers: {
			a: '4',
			b: '15',
			c: '115',
			d: '2'
		},
		correctAnswer: '2'
	},
	{
		question: "One of this is not a backend programing language",
		answers: {
			a: 'javascript',
			b: 'php',
			c: 'css',
			d: 'node'
		},
		correctAnswer: 'css'
	},
	{
		question: "what is the full meaning of HTML",
		answers: {
			a: 'hymen telegram media language',
			b: 'hyper text makeup language',
			c: 'hot tea mode language',
			d: 'hosta team mode language'
		},
		correctAnswer: 'hyper text makeup language'
	},
	{
		question: "identify a git command for initializing git",
		answers: {
			a: 'git init',
			b: 'git commit -m',
			c: 'git language',
			d: 'console.log();'
		},
		correctAnswer: 'git init'
	},
	{
		question: "which of this is use to write massage on the console",
		answers: {
			a: 'log.come()',
			b: 'innerHTML',
			c: 'console.log()',
			d: 'document'
		},
		correctAnswer: 'console.log()'
	},
	{
		question: "which of this is not a HTML tag",
		answers: {
			a: '<ddm></ddm>',
			b: '<go></go>',
			c: '<kill></kill>',
			d: '<h1></h1>'
		},
		correctAnswer: '<h1></h1>'
	},
	{
		question: "javascript file end with what extension",
		answers: {
			a: '.jjs',
			b: '.js',
			c: '.com',
			d: '.https'
		},
		correctAnswer: '.js'
	},
	{
		question: "which of this is an instructor in rad5",
		answers: {
			a: 'candor',
			b: 'trust',
			c: 'emmanuel',
			d: 'divine'
		},
		correctAnswer: 'candor',
	},
	{
		question: "one of this is not a javascript data type",
		answers: {
			a: 'object',
			b: 'string',
			c: 'numbers',
			d: 'functions'
		},
		correctAnswer: 'functions'
	},
	{
		question: "who are go founders of rad5 tech hub",
		answers: {
			a: 'divine and sullivan',
			b: 'emmanuel and chamber',
			c: 'naco and igwe',
			d: 'condor and trust'
		},
		correctAnswer: 'naco and igwe'
	}

];

function newQuestion(){
	if(counter < 10){
	    // console.log(totalQuestions[counter])
	    const keys = Object.keys(myQuestions);
	    const randomIndex = keys[Math.floor(Math.random() * keys.length)];
	    const item = myQuestions[randomIndex];
	    mainAnswer = item.correctAnswer;
	    console.log(mainAnswer);
	    // console.log(allAnswers)

	    document.getElementById('question').innerHTML = item.question;
	    document.getElementById('option1').innerHTML = item.answers.a;
	    document.getElementById('option2').innerHTML = item.answers.b;
	    document.getElementById('option3').innerHTML = item.answers.c;
	    document.getElementById('option4').innerHTML = item.answers.d;
	    counter++;
	}else{
	    document.getElementById('holder').innerHTML = "<h1 class='center'> Thank You for Completing Quizzer 1.0 <br> Your Total Point is : " + point + "</h1>";
	}
}
newQuestion()
console.log(mainAnswer);



   function checkAnswer(selectedAnswerIndex){
	let selectedAnswer = document.getElementById(selectedAnswerIndex).innerHTML
	if(selectedAnswer == mainAnswer){
	    point++;
	    alert("correct, 1 Point Added");
	    document.getElementById('point').innerHTML = point;
	    newQuestion()

	}else{
	    alert("Wrong Answer");
	    newQuestion()
	}
	
   }