quizTemp();

function quizTemp(){
 document.getElementById("quiz").innerHTML = <div><div id="question-number"></div>
 <div id="question"></div>
 <div>
   <form name="answer-form" action="" onsubmit="return submitAnswer()">
     <input id="answerInput" type="number" name="answer" placeholder="Answer Here"></input>
     <button id="button" type="submit" aria-placeholder="asdasd">Blast It</button>
   </form>
 </div>
 <div id="message" class="message"></div></div>;
}
