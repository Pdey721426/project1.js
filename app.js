let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        console.log("choice was clicked", userChoice);
      playGame(userChoice);
    })
})
const playGame = (userChoice) => {
   console.log("user Choice = ", userChoice);
   //generate computer choice 
   const compChoice = genCompChoice();
   console.log("comp Choice = ", compChoice);
   if(userChoice==compChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;

        }else if(userChoice==="paper"){
          userWin = compChoice==="scissers"? false:true;
        }else{
           userWin = userChoice==="rock"? false:true;
        }
        showWinner(userWin);
    }
   

  
};
const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
      userScore++;
      userScorePara.innerText = userScore;
      msg.innerText = "You win!";
      msg.style.backgroundColor = "green";
    } else {
      compScore++;
      compScorePara.innerText = compScore;
      msg.innerText = "You lost!";
      msg.style.backgroundColor = "red";
    }
  };
const drawGame = () =>{
   msg.innerText = "Game was Draw!.Play again";
   msg.style.backgroundColor = "#081b31";
};
const genCompChoice = () => {
  // rock, paper, scissors
  const options =  ["rock", "paper", "scissors"];
  const randIdx=Math.floor(Math.random()*3);
  return options[randIdx];
};
