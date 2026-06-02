let questions = [

{
question:"What does HTML stand for?",
answers:[
"Hyper Text Markup Language",
"Home Tool Markup Language",
"High Tech Markup Language",
"Hyper Transfer Markup Language"
],
correct:0
},

{
question:"Which branch studies space?",
answers:[
"Biology",
"Astronomy",
"Geology",
"Chemistry"
],
correct:1
}

];

let currentQuestion = 0;
let score = 0;
let timer;
let timeLeft = 60;

function saveProfile(){

const name =
document.getElementById("studentName").value;

const rank =
document.getElementById("rank").value;

const branch =
document.getElementById("branch").value;

const notes =
document.getElementById("notes").value;

if(name === "" || rank === "" || branch === ""){
alert("Fill all fields");
return;
}

const profile = {
name:name,
rank:rank,
branch:branch,
notes:notes
};

localStorage.setItem(
"jaraProfile",
JSON.stringify(profile)
);

document.getElementById("profile-box").classList.remove("hidden");

document.getElementById("display-name").innerText = name;

document.getElementById("display-rank").innerText = rank;

document.getElementById("display-branch").innerText = branch;

document.getElementById("display-notes").innerText = notes;

alert("Dashboard Saved");

}

function startExam(){

document.getElementById("exam-screen").classList.remove("hidden");

startTimer();

loadQuestion();

}

function startTimer(){

timer = setInterval(()=>{

timeLeft--;

document.getElementById("timer").innerText =
"Time: " + timeLeft;

if(timeLeft <= 0){
finishExam();
}

},1000);

}

function loadQuestion(){

const q = questions[currentQuestion];

document.getElementById("question-number").innerText =
`Question ${currentQuestion + 1}/${questions.length}`;

document.getElementById("question").innerText =
q.question;

const answersDiv =
document.getElementById("answers");

answersDiv.innerHTML = "";

q.answers.forEach((answer,index)=>{

const button =
document.createElement("button");

button.innerText = answer;

button.classList.add("answer-btn");

button.onclick = ()=>selectAnswer(index);

answersDiv.appendChild(button);

});

}

function selectAnswer(index){

if(index === questions[currentQuestion].correct){
score++;
}

const buttons =
document.querySelectorAll(".answer-btn");

buttons.forEach(btn=>btn.disabled=true);

}

function nextQuestion(){

currentQuestion++;

if(currentQuestion < questions.length){

loadQuestion();

}else{

finishExam();

}

}

function finishExam(){

clearInterval(timer);

document.getElementById("result-screen").classList.remove("hidden");

document.getElementById("final-score").innerText =
`Your Score: ${score}/${questions.length}`;

}
