let currentQuestionIndex = -1;
let score = 0;
nextQuestion();

function submitAnswer() {
  scoreTracker()
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
  }
  document.getElementById("message").innerHTML= "Broj bodova " + score
}
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const user = urlParams.get('user')
