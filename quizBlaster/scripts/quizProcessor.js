document.getElementById("pagehead").innerHTML = quiz.name
questionVisualizer()
answerVisualizer()
let currentQuestionIndex = -1;
let score = 0;
nextQuestion();

function submitAnswer() {
  scoreTracker()
  answerVisualizer()
  nextQuestion()
  return false
}

function nextQuestion(){
  currentQuestionIndex++;
  let currentQuestionDisplay = currentQuestionIndex +1;
  if(currentQuestionIndex===quiz.questions.length){
    window.open("mq-goodbye-page.html?score="+score+"&user="+user,"_self")
    return false;
  }
  document.getElementById("question").innerHTML = quiz.questions[currentQuestionIndex].question
  document.getElementById("question-number").innerHTML= "Pitanje " + currentQuestionDisplay
  document.getElementById("answerInput").value = "";
}

function scoreTracker(){
  let userAnswer = document.getElementById("answerInput").value
  let correctAnswer = quiz.questions[currentQuestionIndex].correctAnswer
  if (userAnswer === correctAnswer) {
    score++
    quiz.questions[currentQuestionIndex].outcome = "correct";
  }else{
  document.getElementById("message").innerHTML= "Broj bodova " + score;
  quiz.questions[currentQuestionIndex].outcome = "wrong";
}
console.log(quiz)
}

function questionVisualizer(){
  const questionNo = quiz.questions.length
  for(i=0;i<questionNo;i++){
    document.getElementById("questionVisualizer").innerHTML +=`
    <div id="${i}">${i+1}</div>
    `
  }
  return false;
}

function answerVisualizer(){
  for ( let i = 0; i<quiz.questions.length; i++){
    if(quiz.questions[i].outcome === "correct"){
        document.getElementById(i).style.backgroundColor = "green";}
    else if(quiz.questions[i].outcome === "wrong"){
      document.getElementById(i).style.backgroundColor = "red";}
    else{
      document.getElementById(i).style.backgroundColor = "aliceblue";
    }
    }   
}

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const user = urlParams.get('user')
