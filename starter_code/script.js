var userPoint = 0;
var aiPoint = 0;

// This function returns the selection of the computer
function getAISelection() {
  var random_num = Math.random() * 3;
  var computer_num_choice = Math.floor(random_num + 1);
if(computer_num_choice==2){
  computer_choice = "rock"; 
  
}

else if (computer_num_choice==1){
  computer_choice="scissors";
}

else if (computer_num_choice==3){
  computer_choice="paper";
}
  return(computer_choice);
}
    console.log(getAISelection());


function pickWinner(comp_choice, user_choice) {
    if(comp_choice === "rock" && user_choice === "rock"){
      return "draw";
    }
   if(comp_choice === "rock" && user_choice === "paper"){
      return "ai";
   }  
  
  if(comp_choice === "rock" && user_choice === "scissors"){
      return "ai";
  }
  
  if(comp_choice === "paper" && user_choice === "paper"){
      return "draw";
  }
 
  if(comp_choice === "paper" && user_choice === "scissors"){
      return "user";
  }
  if(comp_choice === "paper" && user_choice === "rock"){
      return "user"
}
if(comp_choice === "scissors" && user_chioce === "rock"){
 return "draw";   
}

if(comp_choice === "scissors" && user_choice === "paper"){
    return "ai";
}

if(comp_choice === "scissors" && user_choice === "scissors"){
    return "draw";
}

}
// This function sets the scoreboard with the correct points
function setScore() {}


// This function captures the click and picks the winner
function evaluate(evt) {
    var userValue = evt.target.getAttribute('id');
    var aiValue = getAISelection();

    var winner = pickWinner(userValue, aiValue);

    if ( 'user' === winner ) {
        $('#message').delay(50).text('You have won!, Click a box to play again '+ aiValue);
    } else if ( winner === 'draw' ) {
        $('#message').delay(50).text('Draw! Click a box to play again');
    } else {
        $('#message').delay(50).text('You have lost!, Click a box to play again');
    }
}

// This function runs on page load
$(document).ready(function(){
console.log("hello");
 $('.token').click(function(e){
     evaluate(e);
 });
 
});